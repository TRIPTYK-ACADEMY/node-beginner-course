(function(window, document) {

  var element = document.getElementById('trigger-confirm');

  var listen = function(element) {
  
    if(!element)
      return;
  
    element.addEventListener('click', function() {
      if(confirm('Will you visit our products ?'))
        window.location.href = '/products.html';
      else 
      {
        var output = document.getElementById('output');
        output.innerHTML = '<p>You have declined our products.</p>';
      }
    }, true);
  };
  
  listen(element);

})(window, document);

