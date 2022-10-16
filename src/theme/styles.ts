export default {
  global: {
    '*': { margin: 0 },
    '*, *:after, *:before': { boxSizing: 'border-box' },
    'html, body': { height: '100%' },
    'img, picture, svg, video, canvas': { display: 'block', maxWidth: '100%' },
    button: { font: 'inherit' },
    'p, h1, h2, h3, h4': { overflowWrap: 'break-word', margin: 0 },
    '#root': { isolation: 'isolate' },
    body: {
      lineHeight: 1.5,
      color: 'white',
      backgroundColor: 'black'
    }
  }
}
