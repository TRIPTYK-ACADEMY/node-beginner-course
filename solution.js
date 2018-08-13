const IPlayWithACallback = function(string, toto) {
  let str = string.split('').reverse().join('');
  toto(str);
};

const IDisplayInConsole = function(reversed) {
  console.log(reversed);
};

IPlayWithACallback('Hello World', IDisplayInConsole);

const IPlayWithAPromise = function(parameter) 
{
  return new Promise ( (resolve, reject) => {

    if(isNaN(parseInt(parameter)))
    {
      reject('Not a number');
    }

    resolve(parameter * 10);

  });
}


IPlayWithAPromise('test')
  //.catch( (error) => { console.log(error); })
  .then( (response) => { console.log(response)});