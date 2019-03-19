

# Create DOM element  —  1ko

## Installation

`npm install --save element-dom`

or

`<script src="https://github.com/w-jerome/element-dom/blob/master/dist/element-dom.min.js"></script>`

## Usage

```javascript
import dom from 'element-dom';

var el = dom('div');

document.body.appendChild(el);
```

## Advanced usage

The function accepts parameter which can be used to customize your element.

### Full options example

```javascript
/**
 * @tag {string|element} set tag string or document element
 * @options {object|array|dom} set options, but if array or dom element set childrens
 * @childrens {object|dom} set childrens
 */

dom('div', {
  attr: {
    id: 'my-div',
    class: 'is-div',
  },
  html: 'This <strong>is html</strong>',
  text: 'This is text',
  on: {
    click: function() {
        console.log('clicked !!');
    },
  },
}, [dom('div'), dom('div')]);
```

- `tag` : `string|element` if is `string`the function create new element, if is `element` the function update dom element directly.
- `options` : `object|array|dom` if is `object` set options, but if `array` or `dom` set childrens.
- `childrens` : `object|dom` set childrens.

### Basic example

```javascript
var $el1 = dom('div');

document.body.appendChild($el1);
```

### Childrens examples

```javascript
var $el = dom('div', dom('div'));

document.body.appendChild($el);
```
```javascript
var $el = dom('div', [dom('div'), dom('div')]);

document.body.appendChild($el);
```
You can manipulate the dom
```html
<div class="parent">
  <div class="child-1">child 1</div>
  <div class="child-2">child 2</div>
</div>
```
```javascript
var $parent = document.querySelector('.parent');
var $child1 = document.querySelector('.child-1');
var $child2 = document.querySelector('.child-2');

dom($parent, [
  $child2,
  $child1,
]);
```
and add class
```javascript
var $parent = document.querySelector('.parent');
var $child1 = document.querySelector('.child-1');
var $child2 = document.querySelector('.child-2');

dom($parent, {
	attr: {
		class: 'have-muted',
	},
},[
  $child2,
  $child1,
]);
```

### Options

#### `attr` : `object` set custom attributes

```javascript
dom('div', {
  attr: {
    'class': 'is-div',
    'style': 'display: none;',
    'aria-hidden': false,
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
dom($parent, {
  on: {
    click: function() {
        console.log('clicked !!');
    },
  },
});
```

## License

MIT, see [LICENSE](https://github.com/w-jerome/element-dom/blob/master/LICENSE) for details.
