require('dotenv').config()
const express = require("express");
const router = express.Router();
const cors = require("cors");
// const nodemailer = require("nodemailer");
const path = require('path');
// const { google } = require('googleapis');
const sgMail = require('@sendgrid/mail');

// Visitor Counter 
let visitCount = 0;
let gitCount = 0;

// server used to send emails
const app = express();
const buildPath = path.resolve(__dirname, './build');
console.log(`Serving static files from ${buildPath}`);
app.use(express.static(buildPath));
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log(`listening to send emails to ${process.env.EMAIL_USER}...`);

// set sendgrid api key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY ? 'Present' : 'Missing')
console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY);
console.log('SENDGRID_API_KEY length:', process.env.SENDGRID_API_KEY?.length);

// handle post requests for contact/message requests
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const msg = {
    to: 'tkuang5176@gmail.com',
    from: 'kuangty5@gmail.com',
    subject: `Contact Form Submission from ${firstName} ${lastName}`,
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Message sent!');
      res.json({ code: 200, status: "Message Sent" });
    })
    .catch((error) => {
      console.log("Error occurred while sending email:")
      console.error(error);
      res.json(error);
    })
});

// handle post requests for visitor tracking
router.post('/api/track-visit', (req, res) => {
  const { path } = req.body;
  // console.log('received post request at track visit route, path: ' + path);

  if (path === '/') {
    visitCount += 1;
    console.log(`New visitor! Number of visitors since last deployment: ${visitCount}`)
  }
  else if (path === '/github') {
    gitCount += 1;
    console.log(`Visitor viewed Github! Number of github visitors since last deployment: ${gitCount}`)
  }

  res.sendStatus(200);
});

app.get('*', (req, res) => {
  const indexPath = path.resolve(__dirname, './build', 'index.html');
  // console.log(`Serving index.html from ${indexPath}`);
  res.sendFile(indexPath);
});