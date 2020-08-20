require('colors');
module.exports = () => {
  if(typeof(process.argv[2]) !== 'undefined'){
    if(process.argv[2] == "--yes"){
      if(typeof(process.argv[3]) != 'undefined'){
        console.log(`Les fichiers vont être renommé avec ${process.argv[3]}. Les fichiers 'test' sont supprimés`.green);
        return true
      } else {
        console.log(`Il n'y a pas de nouveau nom pour les fichiers. Les fichiers 'test' sont uniquement supprimés`.red);
        return false;
      }
    } else {
      console.log(`Le deuxième argument n'est pas '--yes'. Les fichiers 'test' sont uniquement supprimés`.red)
      return false;
    }
  } else {
    console.log(`Le deuxième argument n'est pas présent. Les fichiers 'test' sont uniquement supprimés`.red)
    return false;
  }
}