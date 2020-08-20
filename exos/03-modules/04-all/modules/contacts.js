const Util = require('util');
const IsValid = require('./../helpers/isValid');
const contacts = require('./../models/contact');

const display = async () => {
  contacts.forEach( async (contact) => {
    let isWellFormatedEmail = await IsValid.email(contact.email);
    process.stdout.write(`
      ${contact.name} - ${contact.isActive ? 'Is active' : 'Is not active'} - ${Util.format('%i years' , contact.age)} - ${contact.email} - ${isWellFormatedEmail} \r`);    
  });
};

exports.display = display;