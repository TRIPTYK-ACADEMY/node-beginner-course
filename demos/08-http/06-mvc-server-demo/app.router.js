const routes = [
  { url : '/', controller : 'index' },
  { url : '/about.html', controller : 'about' }
];

module.exports = ( req, res ) => {

  let index = routes.findIndex( (item) => item.url === req.url );
  
  if(index !== -1)
  {
    console.log('Route match');
    require(`${process.cwd()}/controllers/${routes[index].controller}`)(req, res);
  }
  else 
  {
    require(`${process.cwd()}/controllers/error.js`)(req, res);
  }
};