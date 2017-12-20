# Create DOM element

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

## Usage

`<script src="https://raw.githubusercontent.com/w-jerome/create-dom-element/master/create-dom-element.js"></script>`

```javascript
var el = CreateDOM({
  tag: 'div',
  attr: {
    id: 'my-div',
    class: 'is-div',
  },
  html: '<strong>is html</strong>',
  childrens: [document.querySelector('.my-element')],
  events: {
    click: function() {
        console.log('clicked !!');
    }
  }
});

document.body.appendChild(el);
```
