const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
var nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
// const oauth2Client = new OAuth2(
//     CONFIG.CONTACT.SMPTP.CLIENT.ID, // ClientID
//     CONFIG.CONTACT.SMPTP.CLIENT.SECRET, // Client Secret
//     CONFIG.CONTACT.SMPTP.CLIENT.REDIRECT_URL // Redirect URL
// );
// oauth2Client.setCredentials({
//   refresh_token: CONFIG.CONTACT.SMPTP.CLIENT.REFRESH_TOKEN
// });
// const accessToken = oauth2Client.getAccessToken()
const smtpTransport = nodemailer.createTransport({
  host: CONFIG.CONTACT.SMPTP.HOST,
  port: CONFIG.CONTACT.SMPTP.PORT,
  secure: CONFIG.CONTACT.SMPTP.SECURE,
  auth: {
    type: "OAuth2",
    user: CONFIG.CONTACT.SMPTP.AUTH.USER,
    serviceClient: CONFIG.CONTACT.SMPTP.CLIENT.ID,
    privateKey: CONFIG.CONTACT.SMPTP.CLIENT.SECRET,
    accessToken: process.env.ACCESS_TOKEN
  }
});
module.exports = smtpTransport;
