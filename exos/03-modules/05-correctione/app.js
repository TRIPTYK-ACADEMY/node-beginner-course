const Model = require(`${process.cwd()}/models/contact`);
const Util = require('util');
const IsValid = require(`${process.cwd()}/helpers/isValid`);

Model.contacts.forEach( async (contact) => {

  let isWellFormated = await IsValid.email(contact.email).catch( (e) =>  { console.log(e)});
  
  // Sans await traitement asynchrone
  /*
  console.log('BEFORE');
  isWellFormated.then( (res) => {
    process.stdout.write(`${contact.name} - ${Util.format("%d", contact.age)} years - ${contact.isActive ? "Is active" : "Is not active"} - ${contact.email} - ${res}\n` )
  });
  console.log('AFTER');
  */

  process.stdout.write(`${contact.name} - ${Util.format("%d", contact.age)} years - ${contact.isActive ? "Is active" : "Is not active"} - ${contact.email} - ${isWellFormated}\n` )
});