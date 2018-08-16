const Model = require(`${process.cwd()}/models/contact`);

const Events = require('events');
const EventsHandler = new Events.EventEmitter();
const Colors = require('colors');
const Controller = require(`${process.cwd()}/controllers/`);
const IsValid = require(`${process.cwd()}/helpers/isValid`);
const Util = require('util');

EventsHandler.on('error', (message) => {
  console.log(message.red);
});

EventsHandler.on('end', (message) => {
  console.log(message.blue);
});

async function display()
{
  return new Promise ( (resolve, reject) => {

    if(!Model)
    {
      reject(false);
    }

    Model.contacts.forEach( async (contact, index) => {

      if(!contact.email)
      {
        EventsHandler.emit('error', `${contact.name} has not email address`);
      }
      else 
      {
        let isWellFormated = await IsValid.email(contact.email).catch( (e) =>  { console.log(e)});
        process.stdout.write(`${contact.name} - ${Util.format("%d", contact.age)} years - ${contact.isActive ? "Is active" : "Is not active"} - ${contact.email} - ${isWellFormated}\n` )
      }   

      if(index === ( Model.contacts.length - 1) )
      {
        resolve(true);
      }
    });

    
    
  });
  
}

/*
display().then( (status) => {
  if(status === true)
  {
    EventsHandler.emit('end', 'The list has been displayed');
  }
});*/

async function displayMore()
{
  await display();
  EventsHandler.emit('end', 'List has been displayed');

}

displayMore();

/*
Model.contacts.forEach( async (contact) => {

  if(!contact.email)
  {
    EventsHandler.emit('error', `${contact.name} has not email address`);
  }
  else 
  {
    let isWellFormated = await IsValid.email(contact.email).catch( (e) =>  { console.log(e)});
    process.stdout.write(`${contact.name} - ${Util.format("%d", contact.age)} years - ${contact.isActive ? "Is active" : "Is not active"} - ${contact.email} - ${isWellFormated}\n` )
  }   
});*/

//EventsHandler.emit('end', 'List has been displayed');


