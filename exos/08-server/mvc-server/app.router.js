const Path = require('path');
const Fs = require('fs');

const routes = [
    { url : '/', controller : 'index' },
    { url : '/destinations.html', controller : 'destinations' },
    { url : '/about.html', controller : 'about' },
    { url : '/contact.html', controller : 'contact' }
]

module.exports = ( req, res ) => {

    let index = routes.findIndex( ( item ) => item.url === req.url )

    if(index !== -1)
    {
        require(process.cwd() + '/controllers/' + routes[index].controller)(req, res);
    }
    else if( req.url.match(/.css$/) )
    {
        let path_css = Path.join(__dirname, 'public', 'css', req.url);
        let stream_css = Fs.createReadStream(path_css, 'UTF-8');

        res.writeHead(200, {'Content-type' : 'text/css'} );
        stream_css.pipe(res);
    }
    else if( req.url.match(/.html$/) )
    {
        require(process.cwd() + '/controllers/error.js')(req, res);
    }
    else
    {
        res.end();
    }
}