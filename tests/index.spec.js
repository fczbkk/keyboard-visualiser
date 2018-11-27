import {
  createKeyboardVisualiser,
  getImageByKey,
  keyToImage,
  NONE_IMAGE,
  WRAPPER_CLASS_NAME,
  createWrapperElement,
  createImageElement,
  handleEvent
} from './../src/index.js'

describe('Keyboard Visualiser', function () {

  it('should exist', function () {
    assert(createKeyboardVisualiser)
  })

  describe('getImageByKey', function () {

    it('should return associated image', function () {
      const keys = Object.keys(keyToImage)
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        const val = keyToImage[key]
        assert.equal(getImageByKey(key), val)
      }
    })

    it('should return "none" image when key is unknown', function () {
      assert.equal(getImageByKey('xxx'), NONE_IMAGE)
    })

  })

  describe('createWrapperElement', function () {

    let dummy_element

    beforeEach(function () {
      dummy_element = document.createElement('div')
    })

    it('should create DIV', function () {
      const result = createWrapperElement(dummy_element)
      assert.equal(result.tagName, 'DIV')
    })

    it('should add class to element', function () {
      const result = createWrapperElement(dummy_element)
      assert.equal(result.className, WRAPPER_CLASS_NAME)
    })

    it('should insert element to parent node', function () {
      const result = createWrapperElement(dummy_element)
      assert.equal(result.parentNode, dummy_element)
    })

  })

  describe('handleEvent', function () {

    let dummy_element

    beforeEach(function () {
      dummy_element = document.createElement('div')
    })

    it('should set missing image', function () {
      const image_element = createImageElement(dummy_element)
      handleEvent({key: 'xxx'}, image_element)
      assert(image_element.getAttribute('src'), NONE_IMAGE)
    })

    it('should set correct image', function () {
      const image_element = createImageElement(dummy_element)
      handleEvent({key: 'ArrowUp'}, image_element)
      assert(image_element.getAttribute('src'), keyToImage.ArrowUp)
    })

  })

})
