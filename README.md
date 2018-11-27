# Keyboard Visualizer

Simple JS library that visualises selected keystrokes.

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [getImageByKey](#getimagebykey)
    -   [Parameters](#parameters)
-   [createWrapperElement](#createwrapperelement)
    -   [Parameters](#parameters-1)
-   [createImageElement](#createimageelement)
    -   [Parameters](#parameters-2)
-   [handleEvent](#handleevent)
    -   [Parameters](#parameters-3)
-   [createKeyboardVisualiser](#createkeyboardvisualiser)

### getImageByKey

Returns link to image for specific key.

#### Parameters

-   `key` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)?** 

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### createWrapperElement

Creates wrapper element

#### Parameters

-   `parent_node` **[Node](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)?**  (optional, default `document.body`)

Returns **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)** 

### createImageElement

Creates image element with default source.

#### Parameters

-   `parent_node` **[Node](https://developer.mozilla.org/docs/Web/API/Node/nextSibling)** 

Returns **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)** 

### handleEvent

Reacts to key press.

#### Parameters

-   `event` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
-   `image_element` **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)** 

### createKeyboardVisualiser

Initializes keyboard visualizer.

## Bug reports

If you encounter bugs, send them as issues at Github.