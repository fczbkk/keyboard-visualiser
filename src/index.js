require('./style.css')

import arrowUp from './arrow-up.svg'
import arrowDown from './arrow-down.svg'
import arrowRight from './arrow-right.svg'
import arrowLeft from './arrow-left.svg'

console.log('arrow', arrowUp)

export function createKeyboardVisualiser (config) {
  console.log('keyboard visualiser')

  const element = document.createElement('div')
  element.className = 'keyboardVisualiser'
  document.body.appendChild(element)

  const image = document.createElement('img')
  element.appendChild(image)

  window.addEventListener('keydown', function (event) {
    // console.log('key is pressed', event);

    if (event.key === 'ArrowUp') {
      console.log('up')
      image.setAttribute('src', arrowUp)
    }

    if (event.key === 'ArrowDown') {
      console.log('down')
      image.setAttribute('src', arrowDown)
    }

    if (event.key === 'ArrowRight') {
      console.log('right')
      image.setAttribute('src', arrowRight)
    }

    if (event.key === 'ArrowLeft') {
      console.log('left')
      image.setAttribute('src', arrowLeft)
    }

  })
}
