(function(window, document) {

  var element = document.getElementById('trigger-fetch');

  var listen = function(element) {
  
    if(!element)
      return;
  
    element.addEventListener('click', function() {

      var headers = new Headers();

      var init = {  method: 'GET',
                    headers: headers,
                    mode: 'cors',
                    cache: 'default' 
                  };

      fetch('/list.json', init)
        .then( (response) => {
          console.log(response);
          return response.json().then(function(json) {
            var list = '';
            json.forEach( (item) => {
              list += '<li>' + item.name + '</li>\n'
            });
            var container = document.getElementById('list-members');
            container.innerHTML = list;
          });
        });

    }, true);
  };
  
  listen(element);

})(window, document);

