const Router = require('./app.router');
const Http = require('http');

Http.createServer( Router ).listen(8001, ( error ) => {
    if(error) throw error;
    console.log('Server is running on port 8001');
} );

