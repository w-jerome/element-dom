# Create and updates HTML dom element — 1ko

## Installation

```console
npm install --save element-dom
```

or

```html
<script src="https://cdn.jsdelivr.net/gh/w-jerome/element-dom/dist/element-dom.min.js"></script>
```

## Usage

```javascript
import dom from 'element-dom';

var el = dom('div');

document.body.appendChild(el);
```

## Advanced usage

The function accepts parameters that can be used to customize your element.

### Full options example

```javascript
/**
 * The `dom` function is a utility function in Javascript that creates and manipulates DOM elements
 *
 * @param {string|HTMLElement} element The `element` parameter can be either a string (e.g., 'div', 'span', 'p') or an DOM HTMLElement object
 * @param {DomOptions} [options] The `options` parameter is an optional object that represents the properties of the html element created
 * @param {HTMLElement|HTMLElement[]|NodeList} [children] - The `children` parameter is an optional parameter for adding children to the dom element
 * @param {Function} [onAfterAppend] - The `onAfterAppend` parameter is a callback function that will be called after the element and its children have been appended to the DOM. It takes the element as its only argument
 *
 * @returns the created or provided HTMLElement with the specified attributes, text, html, children, and event listeners
 */
dom('div', {
    attr: {
      id: 'my-div',
      class: 'is-div',
    },
    html: 'This <strong>is html</strong>',
    text: 'This is text',
    on: {
      click() {
        console.log('Click !');
      },
    },
  },
  [
    dom('div'),
    dom('div'),
  ],
  (element) => {
    console.log('Element created !')
  },
);
```

### Children examples

#### Basic

```javascript
dom('div', undefined, dom('div'));
dom('div', undefined, [dom('div'), dom('div')]);
dom('div', undefined, document.querySelectorAll('.children'));
```

#### Move children

```html
<div class="parent">
  <div class="child-1">child 1</div>
  <div class="child-2">child 2</div>
</div>
```

```javascript
var parent = document.querySelector('.parent');
var child1 = document.querySelector('.child-1');
var child2 = document.querySelector('.child-2');

dom(parent, {
    attr: {
      class: 'have-muted',
    },
  },
  [
    child2, // move top
    child1, // move bottom
  ]
);
```

#### Async children

```javascript
dom('ul', undefined, undefined, async (element) => {
  const myApi = await fetch('https://cat-fact.herokuapp.com/facts');
  const data = await myApi.json();

  dom(element, undefined, data.map(item => {
    return dom('li', {
      text: item.text,
    })
  }));
});
```

### Options

#### `attr` : `object` sets customs attributes

```javascript
dom('div', {
  attr: {
    'class': 'is-div',
    'style': 'display: none;',
    'aria-hidden': true,
  },
});
```

#### `html` : `string` set the HTML syntax describing the string

```javascript
dom('div', {
  html: 'This <strong>is html</strong>',
});
```

#### `text` : `string` set text

```javascript
dom('div', {
  text: 'This is text',
});
```

#### `on` : `object` allows the assignment of event handlers on element

```javascript
dom('div', {
  text: 'click me',
  on: {
    click() {
      console.log('Click !');
    },
  },
});
```