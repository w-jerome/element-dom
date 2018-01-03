# Create DOM element  —  1ko

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

## Installation

`<script src="https://raw.githubusercontent.com/w-jerome/create-dom-element/master/create-dom-element.js"></script>`

## Usage

```javascript
var el = CreateDOM('div', {
  attr: {
    id: 'my-div',
    class: 'is-div',
  },
  html: 'This <strong>is html</strong>',
  childrens: [document.querySelector('.my-element')],
  events: {
    click: function() {
        console.log('clicked !!');
    }
  }
});

document.body.appendChild(el);
```

## Options

`tag` : `string|element` if `string` the function create new element, if `element` the function update element

- `attr` : `object` set custom attributes
- `html` : `string` set the HTML syntax describing the string
- `childrens` : `element|array` set childrens to element
- `events` : `object` allows the assignment of event handlers on element

## License

MIT, see [LICENSE](https://github.com/w-jerome/create-dom-element/blob/master/LICENSE) for details.