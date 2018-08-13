const routes = 
[
    { url : '/', controller : 'index' }
]

module.exports = ( request, response ) => {

  let index = routes.findIndex( ( item ) => item.url === request.url )

  if(index !== -1)
  {
    require(process.cwd() + '/controllers/' + routes[index].controller)(request, response)
  }
  else 
  {
    require(process.cwd() + '/controllers/error.js')(request, response)
  }

}