require('dotenv').config()
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');

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
// console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// handle post requests for contact/message requests
router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "tkuang5176@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
      console.log("Error sending message");
    } else {
      res.json({ code: 200, status: "Message Sent" });
      console.log("Message sent!");
    }
  });
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