/*=====================================================
 *   Made with <3 by Jérôme Wohlschlegel
 =====================================================*/

function dom(element, options, children, onAfterAppend) {
  if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
    throw new Error('The \'element\' parameter must be a \'string\' or an \'HTMLElement\'');
  }

  // Set settings
  element = typeof element === 'string' ? document.createElement(element) : element;
  const attr = options && typeof options.attr === 'object' && !Array.isArray(options.attr) ? options.attr : undefined;

  // Add attributes
  if (attr) {
    for (var key in attr) {
      if (typeof attr[key] === 'boolean') {
        attr[key] ? element.setAttribute(key, '') : element.removeAttribute(key);
        continue;
      }
      if (typeof attr[key] === 'string') {
        element.setAttribute(key, attr[key]);
        continue;
      }
      throw new Error('The \'attr\' parameter must be a \'string\' or a \'boolean\'');
    }
  }

  // Set text
  if (options && options.text) {
    element.textContent = options.text;
    // If the functionality is misused, we use the native Javascript error (for traceability)
  }

  // Set html
  if (options && options.html) {
    element.innerHTML = options.html;
    // If the functionality is misused, we use the native Javascript error (for traceability)
  }

  // Add events
  if (options && typeof options.on === 'object' && options.on !== null) {
    for (var key in options.on) {
      element.addEventListener(key, options.on[key], false);
      // If the functionality is misused, we use the native Javascript error (for traceability)
    }
  }

  // Set children
  if (children instanceof HTMLElement) {
    children = [children];
  }
  if (children) {
    if (!Array.isArray(children) && children.constructor.name !== 'NodeList') {
      throw new Error('Children must be an \'HTMLElement\', an \'Array\' or a \'NodeList\'');
    }
    var fragment = document.createDocumentFragment();
    for (var index in children) {
      if (children[index] instanceof HTMLElement) {
        fragment.appendChild(children[index]);
      }
    }
    element.appendChild(fragment);
  }

  // Get onAfterAppend callback
  if (onAfterAppend) {
    if (typeof onAfterAppend !== 'function') {
      throw new Error('The \'onAfterAppend\' parameter must be a function or a \'callable\'');
    }
    onAfterAppend(element);
  }

  return element;
};
