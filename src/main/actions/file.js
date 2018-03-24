'use strict'

import fs from 'fs'
// import chokidar from 'chokidar'
import path from 'path'
import { app, dialog, ipcMain, BrowserWindow } from 'electron'
import createWindow, { windows } from '../createWindow'
import { EXTENSIONS, EXTENSION_HASN } from '../config'
import { getPath, log, isMarkdownFile } from '../utils'
import userPreference from '../preference'

const watchAndReload = (pathname, win) => { // when i build, and failed.
  // const watcher = chokidar.watch(pathname, {
  //   persistent: true
  // })
  // const filename = path.basename(pathname)
  // watcher.on('change', path => {
  //   fs.readFile(pathname, 'utf-8', (err, file) => {
  //     if (err) return console.log(err)
  //     win.webContents.send('AGANI::file-change', {
  //       file,
  //       filename,
  //       pathname
  //     })
  //   })
  // })
}

const writeFile = (pathname, content, extension, win, e) => {
  if (pathname) {
    pathname = pathname.endsWith(extension) ? pathname : `${pathname}${extension}`
    const filename = path.basename(pathname)
    fs.writeFile(pathname, content, 'utf-8', err => {
      if (err) log(err)
      // not export
      if (extension === '.md' && e) e.sender.send('AGANI::set-pathname', { pathname, filename })
    })
    // watchAndReload(pathname, win)
  }
}

const forceClose = win => {
  if (!win) return
  if (windows.has(win.id)) {
    windows.delete(win.id)
  }
  win.destroy() // if use win.close(), it will cause a endless loop.
  if (windows.size === 0) {
    app.quit()
  }
}
// handle the response from render process.
const handleResponseForExport = (e, { type, content, filename, pathname }) => {
  const win = BrowserWindow.fromWebContents(e.sender)
  const extension = EXTENSION_HASN[type]
  const dirname = pathname ? path.dirname(pathname) : getPath('documents')
  const nakedFilename = pathname ? path.basename(pathname, '.md') : 'untitled'
  const defaultPath = `${dirname}/${nakedFilename}${extension}`
  const filePath = dialog.showSaveDialog(win, {
    defaultPath
  })

  if (!content && type === 'pdf') {
    win.webContents.printToPDF({ printBackground: true }, (err, data) => {
      if (err) log(err)
      writeFile(filePath, data, extension, win, e)
    })
  } else {
    writeFile(filePath, content, extension, win, e)
  }
}

const handleResponseForSave = (e, { markdown, pathname }) => {
  const win = BrowserWindow.fromWebContents(e.sender)
  if (pathname) {
    fs.writeFile(pathname, markdown, 'utf-8', err => {
      if (err) log(err)
    })
  } else {
    const filePath = dialog.showSaveDialog(win, {
      defaultPath: getPath('documents') + '/Untitled.md'
    })
    writeFile(filePath, markdown, '.md', win, e)
  }
}

ipcMain.on('AGANI::response-file-save-as', (e, { markdown, pathname }) => {
  const win = BrowserWindow.fromWebContents(e.sender)
  let filePath = dialog.showSaveDialog(win, {
    defaultPath: pathname || getPath('documents') + '/Untitled.md'
  })
  writeFile(filePath, markdown, '.md', win, e)
})

ipcMain.on('AGANI::response-close-confirm', (e, { filename, pathname, markdown }) => {
  const win = BrowserWindow.fromWebContents(e.sender)
  dialog.showMessageBox(win, {
    type: 'warning',
    buttons: ['Save', 'Cancel', 'Delete'],
    defaultId: 0,
    message: `Do you want to save the changes you made to ${filename}?`,
    detail: `Your changes will be lost if you don't save them.`,
    cancelId: 1,
    noLink: true
  }, index => {
    switch (index) {
      case 2:
        forceClose(win)
        break
      case 0:
        setTimeout(() => {
          handleResponseForSave(e, { pathname, markdown })
        })
        break
    }
  })
})

ipcMain.on('AGANI::response-file-save', handleResponseForSave)

ipcMain.on('AGANI::response-export', handleResponseForExport)

ipcMain.on('AGANI::close-window', e => {
  const win = BrowserWindow.fromWebContents(e.sender)
  forceClose(win)
})

ipcMain.on('AGANI::window::drop', (e, fileList) => {
  for (const file of fileList) {
    if (isMarkdownFile(file)) {
      createWindow(file)
      break
    }
  }
})

ipcMain.on('AGANI::response-file-move-to', (e, { pathname }) => {
  const win = BrowserWindow.fromWebContents(e.sender)
  if (pathname !== '') {
    let newPath = dialog.showSaveDialog(win, {
      buttonLabel: 'Move or rename',
      nameFieldLabel: 'Filename:',
      defaultPath: pathname || '~/Untitled.md'
    })
    if (newPath === undefined) return
    if (!fs.existsSync(newPath)) {
      fs.renameSync(pathname, newPath)
      e.sender.send('AGANI::set-pathname', {pathname: newPath, filename: path.basename(newPath)})
    } else {
      dialog.showMessageBox({
        type: 'warning',
        buttons: ['Replace', 'Cancel'],
        defaultId: 1,
        message: `The file ${pathname} already exists. Do you want to replace it?`,
        cancelId: 1,
        noLink: true
      }, index => {
        if (index === 0) {
          fs.renameSync(pathname, newPath)
          e.sender.send('AGANI::set-pathname', {pathname: newPath, filename: path.basename(newPath)})
        }
      })
    }
  } else {
    dialog.showMessageBox({
      type: 'info',
      buttons: ['OK'],
      message: `Please save the file before moving it!`,
      cancelId: 0,
      noLink: true
    })
  }
})

export const exportFile = (win, type) => {
  win.webContents.send('AGANI::export', { type })
}

export const print = win => {
  win.webContents.print({ silent: false, printBackground: true, deviceName: '' })
}

export const open = win => {
  const filename = dialog.showOpenDialog(win, {
    properties: [ 'openFile' ],
    filters: [{
      name: 'text',
      extensions: EXTENSIONS
    }]
  })
  if (filename && filename[0]) {
    const newWindow = createWindow(filename[0])
    watchAndReload(filename[0], newWindow)
  }
}

export const newFile = () => {
  createWindow()
}

export const save = win => {
  win.webContents.send('AGANI::ask-file-save')
}

export const saveAs = win => {
  win.webContents.send('AGANI::ask-file-save-as')
}

export const autoSave = (menuItem, browserWindow) => {
  const { checked } = menuItem
  userPreference.setItem('autoSave', checked)
    .then(() => {
      for (const win of windows.values()) {
        win.webContents.send('AGANI::user-preference', { autoSave: checked })
      }
    })
    .catch(log)
}

export const moveTo = win => {
  win.webContents.send('AGANI::ask-file-move-to')
}
