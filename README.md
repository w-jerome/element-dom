
# Create DOM element  —  1ko

## Installation

`npm install --save element-dom`

## Usage

```javascript
import dom from 'element-dom';

var el = dom('div');

document.body.appendChild(el);
```

## Advanced usage

The function accepts a second parameter which can be used to customize your element.

### Example

```javascript
/**
 * @tag {string|element} set tag string or document element
 * @options {object} set options
 */
dom('div', {
  attr: {
    id: 'my-div',
    class: 'is-div',
  },
  html: 'This <strong>is html</strong>',
  text: 'This is text',
  childrens: [dom('div'), dom('div')],
  on: {
    click: function() {
        console.log('clicked !!');
    },
  },
});
```

- `tag` : `string|element` if is `string`the function create new element, if is `element` the function update dom element directly
- `options` : `object` set options

### Options

#### `attr` : `object` set custom attributes

```javascript
dom('div', {
  attr: {
    class: 'is-div',
    style: 'display: none;',
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

#### `childrens` : `element|array` set childrens to element

```javascript
dom('div', {
  childrens: [dom('div'), dom('div')],
});
```

or you can manipulate element from dom.

```html
<div class="parent">
	<div class="child-1"></div>
	<div class="child-2"></div>
</div>
```

```javascript
var $parent = document.querySelector('.parent');
var $child1 = document.querySelector('.child-1');
var $child2 = document.querySelector('.child-2');

dom($parent, {
  childrens: [$child2, $child1],
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
