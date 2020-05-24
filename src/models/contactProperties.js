const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
var nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const CONFIG = require(path.join(HOMEDIR, "config", "default"));

const smtpTransport = nodemailer.createTransport({
  host: CONFIG.CONTACT.SMPTP.HOST,
  port: CONFIG.CONTACT.SMPTP.PORT,
  secure: CONFIG.CONTACT.SMPTP.SECURE,
  auth: {
    type: "OAuth2",
    user: CONFIG.CONTACT.SMPTP.AUTH.USER,
    serviceClient: CONFIG.CONTACT.SMPTP.CLIENT.ID,
    privateKey: CONFIG.CONTACT.SMPTP.CLIENT.SECRET
  }
});
module.exports = smtpTransport;
