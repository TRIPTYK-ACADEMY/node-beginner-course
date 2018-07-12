const fs = require('fs');
const GarbageCollector = require(`${process.cwd()}/modules/garbage-collector`);

/**
 * Get the text path of a resource
 * 
 * @param {String} path 
 * @returns {String} as path of the directory
 */
const getDirectoryPath = function(path) {
  let array = path.split('/');
  return array.splice(0, array.length -1).join('/');
};

/**
 * Say if a directory contains files
 * 
 * @param {String} path  
 * @returns {Boolean}
 */
const hasChildrens = function(path) {
  return fs.readdirSync(path).length > 0;
};

/**
 * Remove empty files/directories
 * 
 * @param {String} path 
 */
const garbageCollector = function(path) {

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
        !hasChildrens( current ) ? fs.rmdirSync( current ) : garbageCollector(current + '/');

      }
      else if( stats.isFile() && item !== 'index.js') {
        
        // If empty file, we delete it
        stats.size === 0 && fs.unlinkSync(current);

        let directory = getDirectoryPath(current);

        // If the parent directory of the file is empty, we delete it
        if( !hasChildrens( directory ) ) {
          fs.rmdirSync( directory );
        }
              
      }
    });
  });
}


GarbageCollector('./');