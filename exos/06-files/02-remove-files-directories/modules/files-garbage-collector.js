const fs = require('fs');
const helper = require(`${process.cwd()}/helpers/directory-helper`);

/**
 * Remove empty files/directories
 * 
 * @param {String} path 
 */
garbageCollector = function(path) {

  // Parse current path and store files/directories into array
  let items = fs.readdirSync(path);

  // For each item of the current path
  items.forEach( (item) => {
  
    // 1. We define full path
    let current = path + item;

    // 2. We extract stats
    fs.stat(current, function(error, stats) {

      if(error) throw error;

      // 2.1 We check if the current path is a directory
      if( stats.isDirectory() ) {

        // If the current directory is empty, we delete it, else we recurse on garbageCollector with current path
        !helper.hasChildrens( current ) ? fs.rmdirSync( current ) : garbageCollector(current + '/');

      }
      // 2.2 If current is not a directory, we check if current is a file and if the file is empty
      // If empty file, we delete it, and we check if the current directory is empty after the deleting. If yes, we delete also the directory
      else if( stats.isFile() && stats.size === 0 ) {
        
        // Delete file
        fs.unlinkSync(current);

        // Get Path
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