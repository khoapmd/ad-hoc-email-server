/* eslint no-console: 0 */

'use strict';
const nodemailer = require('nodemailer');
const fs = require('fs');

// read properties
const properties = JSON.parse(fs.readFileSync('properties.json'));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  // Create a SMTP transporter object
  let transporter = nodemailer.createTransport(
    {
      host: properties.host || 'localhost',
      port: properties.smtpPort,
      logger: false,
      debug: false // include SMTP traffic in the logs
    },
    {
      // default message fields

      // sender info
      from: 'DTES Test main! <no-reply@temp.ootech.vn>',
      headers: {
      }
    }
  );

  // Message object
  let email = process.argv[2] || 'test@' + properties.allowedDomains[0]
console.log( email);
  let recipientAddress = process.argv[2] || '<'+ 'test@' + properties.allowedDomains[0] + '>';


let message = {
    // Comma separated list of recipients
    to: recipientAddress,

    // Subject of the message
    subject: 'Welcome to DTES! ✔',

    // plaintext body
    text: 'Hello to myself!',

    // HTML body
    html:
    '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
    '<p><br/><img src="cid:dtes-tester@mydomain.com"/></p>',

    // An array of attachments
    attachments: [
      // String attachment
      {
        filename: 'notes.txt',
        content: 'Some notes about this e-mail',
      },

      // Binary Buffer attachment
      {
        filename: 'image.png',
        content: Buffer.from(
          'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
          '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
          'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
          'base64'
        ),

        cid: 'note@example.com' // should be as unique as possible
      },

      // File Stream attachment
      {
        filename: 'dtes-happy.png',
        path: __dirname + '/client/assets/images/dtes-fumbled.png',
        cid: 'dtes-tester@mydomain.com' // should be as unique as possible
      }
    ]
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('Error occurred');
      console.log(error.message);
      return process.exit(1);
    }

    console.log('Message sent successfully!');

    // only needed when using pooled connections
    transporter.close();
  });

