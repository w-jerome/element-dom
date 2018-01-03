/*=====================================================
 *   Made with <3 by Jérôme Wohlschlegel
 =====================================================*/

function CreateDOM(tag, opt) {
  this.tag = tag || null;
  this.opt = opt || {};
  this.el = false;

  // Create element
  if (typeof this.tag === 'string') {
    this.el = document.createElement(this.tag);
  } else if (typeof this.tag === 'object' && typeof this.tag.nodeName === 'string') {
    this.el = this.tag;
  } else {
    return this.el;
  }
  
  // Set attributes
  if (typeof this.opt.attr === 'object') {

    for (var key in this.opt.attr) {
      this.el.setAttribute(key, this.opt.attr[key]);
    }
  }

  // Set html
  if (typeof this.opt.html !== 'undefined') {
    this.el.innerHTML = this.opt.html;
  }

  // Set childrens
  if (typeof this.opt.childrens === 'object' && !Array.isArray(this.opt.childrens)) {
    this.opt.childrens = [this.opt.childrens];
  }

  if (typeof this.opt.childrens === 'object' && Array.isArray(this.opt.childrens)) {

    for (var i in this.opt.childrens) {
      
      if (this.opt.childrens[i] && typeof this.opt.childrens[i].nodeName === 'string') {
        this.el.appendChild(this.opt.childrens[i]);
      }
    }
  }

  // Set events
  if (typeof this.opt.events === 'object') {

    for (var key in this.opt.events) {
      this.el.addEventListener(key, this.opt.events[key], false); 
    }
  }
  
  return this.el;
}
