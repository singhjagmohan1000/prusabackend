const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
var nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const oauth2Client = new OAuth2(
    CONFIG.CONTACT.SMPTP.CLIENT.ID,
    CONFIG.CONTACT.SMPTP.CLIENT.SECRET,
    CONFIG.CONTACT.SMPTP.CLIENT.REDIRECT_URL
);
oauth2Client.setCredentials({
  refresh_token: CONFIG.CONTACT.SMPTP.CLIENT.REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken()
const smtpTransport = nodemailer.createTransport({
  host: CONFIG.CONTACT.SMPTP.HOST,
  port: CONFIG.CONTACT.SMPTP.PORT,
  secure: CONFIG.CONTACT.SMPTP.SECURE,
  auth: {
    type: "OAuth2",
    user: CONFIG.CONTACT.SMPTP.AUTH.USER,
    serviceClient: CONFIG.CONTACT.SMPTP.CLIENT.ID,
    clientSecret: CONFIG.CONTACT.SMPTP.CLIENT.SECRET,
    refreshToken: CONFIG.CONTACT.SMPTP.CLIENT.REFRESH_TOKEN,
    accessToken: accessToken
  }
});
module.exports = smtpTransport;
