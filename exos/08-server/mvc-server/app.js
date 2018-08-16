const router = require('./app.router')
const http = require('http')

http.createServer( router ).listen('8000', ( error ) => {
    if(error) throw error
    console.log('Server is running')
} )

