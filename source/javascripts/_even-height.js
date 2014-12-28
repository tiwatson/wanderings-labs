
function sameHeights(selector) {
  selector = selector || '[data-equal-height]';
  query = document.querySelectorAll(selector);
  elements = query.length;
  max = 0;

  if (elements) {
    while (elements--) {
      var element = query[elements];
      // element.clientHeight);
      // clientHeight didn't give me correct height. offsetHeight did
      if (element.offsetHeight > max) {
        max = element.offsetHeight;
      }
    }
    elements = query.length;
    while (elements--) {
      var _element = query[elements];
      _element.style.height = max + 'px';
    }
  }
}
