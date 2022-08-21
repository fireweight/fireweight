/*

    Fire Weight

    A small, lightweight, open source jQuery alternative. 🔥⚡
    
    Confused on where to start? 😵‍💫
    Visit https://docs.fireweight.repl.co/ for more info

    ----------------------------------------------------------------

    Written by Infinity on replit.
    https://repl.it/@Infinity-On-High
*/

function $fireweight(selector) {
  let element;
  if (typeof selector === 'string' || selector instanceof String) {
    element = document.querySelector(selector);
  } else {
    element = selector;
  }
  const self = {
    html: () => element,
    on: (event, callback) => {
      element.addEventListener(event, callback)
    },
    hide: () => {
      element.style.display = 'none';
    },
    show: () => {
      element.style.display = 'block';
    },
    attr: (name, value) => {
      if (value === null) {
        return element.getAttribute(name);
      } else {
        return element.setAttribute(name, value);
      }
    },
    ready: (callback) => {
      element.addEventListener('ready', callback)
    }
  };

  return self;
}
