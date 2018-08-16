const fs = require('fs');

/**
 * Get the text path of a resource
 * 
 * @param {String} path 
 * @returns {String} as path of the directory
 */
exports.getDirectoryPath = (path) => {
  let array = path.split('/');
  return array.splice(0, array.length -1).join('/');
};

/**
 * Say if a directory contains files
 * 
 * @param {String} path  
 * @returns {Boolean}
 */
exports.hasChildrens = (path) => {
  return fs.readdirSync(path).length > 0;
};