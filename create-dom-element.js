/*=====================================================
 *   Made with <3 by Jérôme Wohlschlegel
 =====================================================*/

function CreateDOM(opt) {
  this.opt = opt || {};

  if (typeof this.opt.tag !== 'string') {
    return false;
  }
  
  // Create element
  var el = document.createElement(this.opt.tag);
  
  // Set attributes
  if (typeof this.opt.attr === 'object') {

    for (var key in this.opt.attr) {
      el.setAttribute(key, this.opt.attr[key]);
    }
  }

  // Set html
  if (typeof this.opt.html !== 'undefined') {
    el.innerHTML = this.opt.html;
  }

  // Set childrens
  if (typeof this.opt.childrens === 'object' && !Array.isArray(this.opt.childrens)) {
    this.opt.childrens = [this.opt.childrens];
  }

  if (typeof this.opt.childrens === 'object' && Array.isArray(this.opt.childrens)) {

    for (var i in this.opt.childrens) {
      
      if (this.opt.childrens[i] && typeof this.opt.childrens[i].nodeName === 'string') {
        el.appendChild(this.opt.childrens[i]);
      }
    }
  }

  // Set events
  if (typeof this.opt.events === 'object') {

    for (var key in this.opt.events) {
      el.addEventListener(key, this.opt.events[key], false); 
    }
  }
  
  return el;
}
