/*=====================================================
 *   Made with <3 by Jérôme Wohlschlegel
 =====================================================*/

function dom(tag, opt, child) {
  this.tag = tag || null;
  this.opt = opt || {};
  this.child = child || [];
  this.el = null;

  // Create element
  if (typeof this.tag === 'string') {
    this.el = document.createElement(this.tag);
  } else if (typeof this.tag === 'object' && typeof this.tag.nodeName === 'string') {
    this.el = this.tag;
  }

  if (!this.el) {
    return this.el;
  }

  // Set attributes
  if (typeof this.opt.attr === 'object' && this.opt.attr !== null) {

    for (var key in this.opt.attr) {
      this.el.setAttribute(key, this.opt.attr[key]);
    }
  }

  // Set html
  if (typeof this.opt.html === 'string') {
    this.el.innerHTML = this.opt.html;
  }

  // Set text
  if (typeof this.opt.text === 'string') {
    this.el.textContent = this.opt.text;
  }

  // Set events
  if (typeof this.opt.on === 'object' && this.opt.on !== null) {

    for (var key in this.opt.on) {
      this.el.addEventListener(key, this.opt.on[key], false);
    }
  }

  // Set child
  if (typeof this.child === 'object' && typeof this.child.nodeName === 'string') {
    this.child = [this.child];
  }

  if (Array.isArray(this.child)) {

    for (var i in this.child) {
      if (this.child[i] && typeof this.child[i].nodeName === 'string') {
        this.el.appendChild(this.child[i]);
      }
    }
  }

  return this.el;
};

module.exports = dom;
