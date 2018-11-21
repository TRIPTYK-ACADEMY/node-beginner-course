
const IsValid = require(`${process.cwd()}/helpers/isValid`);
const Util = require('util');

module.exports = (Model, EventsHandler) => {

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
  });
};


