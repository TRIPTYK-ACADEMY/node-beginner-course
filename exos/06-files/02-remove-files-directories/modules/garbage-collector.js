const fs = require('fs');
const helper = require(`${process.cwd()}/helpers/directory-helper`);

/**
 * Remove empty files/directories
 * 
 * @param {String} path 
 */
garbageCollector = function(path) {

  // Parse current path
  let items = fs.readdirSync(path);

  // Retrieve elements of current path
  items.forEach( (item) => {
  
    // Define full path
    let current = path + item;

    // Extract stats
    fs.stat(current, function(error, stats) {

      if(error) throw error;

      if( stats.isDirectory() ) {

        // If the current directory of the file is empty, we delete it
        !helper.hasChildrens( current ) ? fs.rmdirSync( current ) : garbageCollector(current + '/');

      }
      else if( stats.isFile() && item !== 'index.js') {
        
        // If empty file, we delete it
        stats.size === 0 && fs.unlinkSync(current);

        let directory = helper.getDirectoryPath(current);

        // If the parent directory of the file is empty, we delete it
        if( !helper.hasChildrens( directory ) ) {
          fs.rmdirSync( directory );
        }
              
      }
    });
  });
}

module.exports = garbageCollector;