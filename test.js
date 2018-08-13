// 1. --- Callback

const iPlayWithACallback = function(string, callback)
{
  callback(string.split('').reverse().join(''));
};

iPlayWithACallback('Hello World', function(reversed) {
  console.log(reversed);
});

// 2. --- Promise

const IPlayWithAPromiseAndIMultiplyAndILoveItButNotTooMuch = function(parameter)
{
  return new Promise( (resolve, reject) => {
    if(isNaN(parseInt(parameter)))
    {
      reject('Bad Parameter');
    }
    else 
    {
      resolve(parseInt(parameter) * 10);
    }
  });
}

IPlayWithAPromiseAndIMultiplyAndILoveItButNotTooMuch(5)
  .catch( error => { console.log(error) })
  .then( result => { console.log(result) });