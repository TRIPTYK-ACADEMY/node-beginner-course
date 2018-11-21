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

      console.log(current);
      
      if(stats.isDirectory())
      {
        garbageCollector(current + '/')
      }
      
    });
  });
}

module.exports = garbageCollector;