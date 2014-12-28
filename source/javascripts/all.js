//= require_tree .

(function() {

  if ('addEventListener' in window) {
    window.addEventListener('resize', function(){
      sameHeights('.project-box-content');
    });
    window.addEventListener('load', function(){
      sameHeights('.project-box-content');
    });
  }

})();
