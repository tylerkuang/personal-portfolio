require('dotenv').config()
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');
const { google } = require('googleapis');

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

let contactEmail;

const setupTransport = async () => {
  const OAuth2 = google.auth.OAuth2;

  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );
  console.log("Email:", process.env.EMAIL_USER ? 'Present' : 'Missing')
  console.log("CLIENT_ID:", process.env.CLIENT_ID ? 'Present' : 'Missing');
  console.log("CLIENT_SECRET:", process.env.CLIENT_SECRET ? 'Present' : 'Missing');
  console.log("REFRESH_TOKEN:", process.env.REFRESH_TOKEN ? 'Present' : 'Missing');

  // set the refresh token
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });
  console.log("Credentials properly set.")

  // generate access token
  let accessToken;
  try {
    accessToken = await oauth2Client.getAccessToken();
  } catch (error) {
    console.error("Access Token Error:", error.response?.data || error.message);
  }
  
  // configure nodemailer
  contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken.token,
    },
  });

  console.log("Email service initialized.");
};

setupTransport().catch((error) => console.error("Error setting up email service:", error));


// Middleware to ensure contactEmail is initialized
const ensureEmailServiceReady = (req, res, next) => {
  if (!contactEmail) {
    console.log("Email service is not ready yet");
    return res.status(500).json({ error: "Email service is not initialized yet. Please try again later." });
  }
  next();
};

// handle post requests for contact/message requests
router.post("/contact", ensureEmailServiceReady, (req, res) => {
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