
import './style.css';

import none from './none.svg';
import arrowUp from './arrow-up.svg';
import arrowDown from './arrow-down.svg';
import arrowRight from './arrow-right.svg';
import arrowLeft from './arrow-left.svg';

export const keyToImage = {
  'ArrowUp': arrowUp,
  'ArrowDown': arrowDown,
  'ArrowRight': arrowRight,
  'ArrowLeft': arrowLeft,
  'w': arrowUp,
  'a': arrowDown,
  's': arrowRight,
  'd': arrowLeft
};

export const NONE_IMAGE = none;
export const WRAPPER_CLASS_NAME = 'keyboardVisualiser';

/**
 * Returns link to image for specific key.
 * @param {string} [key]
 * @return {string}
 */
export function getImageByKey (key) {
  return keyToImage[key] || NONE_IMAGE;
}

/**
 * Creates wrapper element
 * @param {Node} [parent_node]
 * @return {HTMLElement}
 */
export function createWrapperElement (parent_node = document.body) {
  const element = document.createElement('div');
  element.className = WRAPPER_CLASS_NAME;
  parent_node.appendChild(element);
  return element;
}

/**
 * Creates image element with default source.
 * @param {Node} parent_node
 * @return {HTMLElement}
 */
export function createImageElement (parent_node) {
  const image = document.createElement('img');
  image.setAttribute('src', none);
  parent_node.appendChild(image);
  return image;
}

/**
 * Reacts to key press.
 * @param {Object} event
 * @param {HTMLElement} image_element
 */
export function handleEvent (event, image_element) {
  image_element.setAttribute('src', getImageByKey(event.key));
}

/**
 * Initializes keyboard visualizer.
 */
export function createKeyboardVisualiser () {
  const wrapper_element = createWrapperElement(document.body);
  const image_element = createImageElement(wrapper_element);

  window.addEventListener(
    'keydown',
    (event) => handleEvent(event, image_element)
  );
}
