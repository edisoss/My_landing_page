const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

let transporter = nodemailer.createTransport({
  pool: true,
  host: "business69.web-hosting.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "info@ossit.lv",
    pass: "Langusts1#"
  }
});
// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

/* exports.sendEmail = functions.https.onRequest((request, response) => {
  const email_from = request.query.email_from;
  const message = request.query.message;

  const mailOptions = {
    from: 'Travel Treasury <1manstartup@gmail.com>',
    to: '1manstartup@gmail.com',
    subject: 'Travel Treasury Contact Form Submission',
    html: `${message} <br><br> From ${email_from}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(`ERROR: (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`);
      response.send(error.toString());
    }
    response.send('You message was submitted successfully!');
  });

}) *//

