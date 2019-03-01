const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
var nodemailer = require("nodemailer");

const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const smtpTransport = nodemailer.createTransport({
  host: CONFIG.CONTACT.SMPTP.HOST,
  port: CONFIG.CONTACT.SMPTP.PORT,
  secure: CONFIG.CONTACT.SMPTP.SECURE,
  auth: {
    user: CONFIG.CONTACT.SMPTP.AUTH.USER,
    pass: CONFIG.CONTACT.SMPTP.AUTH.PASS
  }
});
module.exports = smtpTransport;
