import paragraphIcon from '../../assets/icons/paragraph.svg'
import htmlIcon from '../../assets/icons/html.svg'
import hrIcon from '../../assets/icons/horizontal_line.svg'
import frontMatterIcon from '../../assets/icons/front_matter.svg'
import header1Icon from '../../assets/icons/header_1.svg'
import header2Icon from '../../assets/icons/header_2.svg'
import header3Icon from '../../assets/icons/header_3.svg'
import header4Icon from '../../assets/icons/header_4.svg'
import header5Icon from '../../assets/icons/header_5.svg'
import header6Icon from '../../assets/icons/header_6.svg'
import tableIcon from '../../assets/icons/table.svg'
import bulletListIcon from '../../assets/icons/bullet_list.svg'
import codeIcon from '../../assets/icons/code.svg'
import quoteIcon from '../../assets/icons/quote.svg'
import todoListIcon from '../../assets/icons/todolist.svg'
import mathblockIcon from '../../assets/icons/math.svg'
import orderListIcon from '../../assets/icons/order_list.svg'
// import flowchartIcon from '../../assets/icons/flowchart.svg'
// import sequenceIcon from '../../assets/icons/sequence.svg'
// import mermaidIcon from '../../assets/icons/mermaid.svg'
// import vegaIcon from '../../assets/icons/chart.svg'
import { isOsx } from '../../config'

const COMMAND_KEY = isOsx ? '⌘' : '⌃'

// Command (or Cmd) ⌘
// Shift ⇧
// Option (or Alt) ⌥
// Control (or Ctrl) ⌃
// Caps Lock ⇪
// Fn


// Command (or Cmd) ⌘
// Shift ⇧
// Option (or Alt) ⌥
// Control (or Ctrl) ⌃
// Caps Lock ⇪
// Fn


export const quicInsertObj = {
  // 'diagram': [{
  //   title: 'Vega Chart',
  //   subTitle: 'Render flow chart by vega-lite.js.',
  //   label: 'vega-lite',
  //   icon: vegaIcon,
  //   color: 'rgb(224, 54, 54)'
  // }, {
  //   title: 'Flow Chart',
  //   subTitle: 'Render flow chart by flowchart.js.',
  //   label: 'flowchart',
  //   icon: flowchartIcon,
  //   color: 'rgb(224, 54, 54)'
  // }, {
  //   title: 'Sequence Diagram',
  //   subTitle: 'Render sequence diagram by js-sequence.',
  //   label: 'sequence',
  //   icon: sequenceIcon,
  //   color: 'rgb(224, 54, 54)'
  // }, {
  //   title: 'Mermaid',
  //   subTitle: 'Render Diagram by mermaid.',
  //   label: 'mermaid',
  //   icon: mermaidIcon,
  //   color: 'rgb(224, 54, 54)'
  // }],
  'basic block': [{
    title: 'Paragraph',
    subTitle: 'Lorem Ipsum is simply dummy text',
    label: 'paragraph',
<<<<<<< HEAD
    shortCut: '⌘0',
=======
    shortCut: `${COMMAND_KEY}0`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: paragraphIcon,
    color: 'rgb(224, 54, 54)'
  }, {
    title: 'Horizontal Line',
    subTitle: '---',
    label: 'hr',
<<<<<<< HEAD
    shortCut: '⌥⌘-',
=======
    shortCut: `⌥${COMMAND_KEY}-`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: hrIcon,
    color: 'rgb(255, 83, 77)'
  }, {
    title: 'Front Matter',
    subTitle: '--- Lorem Ipsum ---',
    label: 'front-matter',
<<<<<<< HEAD
    shortCut: '⌥⌘Y',
=======
    shortCut: `⌥${COMMAND_KEY}Y`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: frontMatterIcon,
    color: 'rgb(37, 198, 252)'
  }],
  'header': [{
    title: 'Header 1',
    subTitle: '# Lorem Ipsum is simply ...',
    label: 'heading 1',
<<<<<<< HEAD
    shortCut: '⌘1',
=======
    shortCut: `${COMMAND_KEY}1`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: header1Icon,
    color: 'rgb(86, 163, 108)'
  }, {
    title: 'Header 2',
    subTitle: '## Lorem Ipsum is simply ...',
    label: 'heading 2',
<<<<<<< HEAD
    shortCut: '⌘2',
=======
    shortCut: `${COMMAND_KEY}2`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: header2Icon,
    color: 'rgb(94, 133, 121)'
  }, {
    title: 'Header 3',
    subTitle: '### Lorem Ipsum is simply ...',
    label: 'heading 3',
<<<<<<< HEAD
    shortCut: '⌘3',
=======
    shortCut: `${COMMAND_KEY}3`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: header3Icon,
    color: 'rgb(119, 195, 79)'
  }, {
    title: 'Header 4',
    subTitle: '#### Lorem Ipsum is simply ...',
    label: 'heading 4',
<<<<<<< HEAD
    shortCut: '⌘4',
=======
    shortCut: `${COMMAND_KEY}4`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: header4Icon,
    color: 'rgb(46, 104, 170)'
  }, {
    title: 'Header 5',
    subTitle: '##### Lorem Ipsum is simply ...',
    label: 'heading 5',
<<<<<<< HEAD
    shortCut: '⌘5',
=======
    shortCut: `${COMMAND_KEY}5`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: header5Icon,
    color: 'rgb(126, 136, 79)'
  }, {
    title: 'Header 6',
    subTitle: '###### Lorem Ipsum is simply ...',
    label: 'heading 6',
<<<<<<< HEAD
    shortCut: '⌘6',
=======
    shortCut: `${COMMAND_KEY}6`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: header6Icon,
    color: 'rgb(29, 176, 184)'
  }],
  'advanced block': [{
    title: 'Table Block',
    subTitle: '|Lorem | Ipsum is simply |',
    label: 'table',
<<<<<<< HEAD
    shortCut: '⌘T',
=======
    shortCut: `${COMMAND_KEY}T`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: tableIcon,
    color: 'rgb(13, 23, 64)'
  }, {
    title: 'Mathematical Formula',
    subTitle: '$$ Lorem Ipsum is simply $$',
    label: 'mathblock',
<<<<<<< HEAD
    shortCut: '⌥⌘M',
=======
    shortCut: `⌥${COMMAND_KEY}M`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: mathblockIcon,
    color: 'rgb(252, 214, 146)'
  }, {
    title: 'HTML Block',
    subTitle: '<div> Lorem Ipsum is simply </div>',
    label: 'html',
<<<<<<< HEAD
    shortCut: '⌥⌘J',
=======
    shortCut: `⌥${COMMAND_KEY}J`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: htmlIcon,
    color: 'rgb(13, 23, 64)'
  }, {
    title: 'Code Block',
    subTitle: '```java Lorem Ipsum is simply ```',
    label: 'pre',
<<<<<<< HEAD
    shortCut: '⌥⌘C',
=======
    shortCut: `⌥${COMMAND_KEY}C`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: codeIcon,
    color: 'rgb(164, 159, 147)'
  }, {
    title: 'Quote Block',
    subTitle: '>Lorem Ipsum is simply ...',
    label: 'blockquote',
<<<<<<< HEAD
    shortCut: '⌥⌘Q',
=======
    shortCut: `⌥${COMMAND_KEY}Q`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: quoteIcon,
    color: 'rgb(31, 111, 181)'
  }],
  'list block': [{
    title: 'Order List',
    subTitle: '1. Lorem Ipsum is simply ...',
    label: 'ol-order',
<<<<<<< HEAD
    shortCut: '⌥⌘O',
=======
    shortCut: `⌥${COMMAND_KEY}O`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: orderListIcon,
    color: 'rgb(242, 159, 63)'
  }, {
    title: 'Bullet List',
    subTitle: '- Lorem Ipsum is simply ...',
    label: 'ul-bullet',
<<<<<<< HEAD
    shortCut: '⌥⌘U',
=======
    shortCut: `⌥${COMMAND_KEY}U`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: bulletListIcon,
    color: 'rgb(242, 117, 63)'
  }, {
    title: 'To-do List',
    subTitle: '- [x] Lorem Ipsum is simply ...',
    label: 'ul-task',
<<<<<<< HEAD
    shortCut: '⌥⌘X',
=======
    shortCut: `⌥${COMMAND_KEY}X`,
>>>>>>> 7abb13778ea8dda8a06fdbf70049fd5e0d16cd5b
    icon: todoListIcon,
    color: 'rgb(222, 140, 124)'
  }]
}
