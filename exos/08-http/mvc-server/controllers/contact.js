const Nodemailer = require('nodemailer');
const EventHandler = require(`${process.cwd()}/helpers/event-handler`);
const ViewBuilder = require(`${process.cwd()}/helpers/view-builder`);

module.exports = (req,res) => {

  if(req.method === 'GET')
  {
    ViewBuilder(req, res, 200);
  }
  else if(req.method === 'POST')
  {
    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', async () => {

      if(!process.argv[2] || process.argv[2] !== '--demo')
      {
        let values = []
      
        await data.split('&').forEach( (item) => {
          values.push(item.split('='));
        });

        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        Nodemailer.createTestAccount((err, account) => {
          
          // create reusable transporter object using the default SMTP transport
          let transporter = Nodemailer.createTransport({
              host: 'smtp.ethereal.email',
              port: 587,
              secure: false, // true for 465, false for other ports
              auth: {
                  user: account.user, // generated ethereal user
                  pass: account.pass // generated ethereal password
              }
          });

          // setup email data with unicode symbols
          let mailOptions = {
              from: '"' + decodeURIComponent(values[0][1]) + ' 👻" <' + decodeURIComponent(values[1][1]) + '>', // sender address
              to: 'steve.lebleu1979@gmail.com', // list of receivers
              subject: 'Contact request', // Subject line
              text: values[2][1], // plain text body
              html: values[2][1] // html body
          };

          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
              if (error) 
              {
                  return console.log(error);
              }
              else 
              {
                EventHandler.emit('log', `Mail sent to ${decodeURIComponent(values[1][1])} at ${new Date()}\n`);
                ViewBuilder(req, res, 200);
              }
              console.log('Message sent: %s', info.messageId);
              console.log('Preview URL: %s', Nodemailer.getTestMessageUrl(info));
          });
        });
      }
      else 
      {
        ViewBuilder(req, res, 200);
      }
    });
  }
};







