var nodemailer = require("nodemailer");
const path = require("path");
const HOMEDIR = path.join(__dirname, "..", "..");
const CONFIG = require(path.join(HOMEDIR, "config", "default"));
const MODELS = path.join(__dirname, "..");
const smtpTransport = require(path.join(MODELS, "models", "contactProperties"));
const { check, validationResult } = require("express-validator/check");

exports.validate = method => {
  return [
    check("yourname")
      .isLength({ min: 1 })
      .trim()
      .withMessage(CONFIG.CONTACT.VALIDATION.NAME_REQUIRD)
      .isAlpha()
      .withMessage(CONFIG.CONTACT.VALIDATION.INVALID_NAME)
      .escape(),
    check("youremail")
      .isLength({ min: 5 })
      .trim()
      .withMessage(CONFIG.CONTACT.VALIDATION.EMAIL_REQUIRD)
      .isEmail()
      .withMessage(CONFIG.CONTACT.VALIDATION.INVALID_EMAIL)
      .normalizeEmail(),
    check("yoursubject")
      .isLength({ min: 1 })
      .trim()
      .withMessage(CONFIG.CONTACT.VALIDATION.SUBJECT_REQUIRD)
      .isAlpha()
      .withMessage(CONFIG.CONTACT.VALIDATION.INVALID_SUBJECT)
      .escape(),
    check("message")
      .isLength({ min: 1 })
      .trim()
      .withMessage(CONFIG.CONTACT.VALIDATION.MESSAGE_REQUIRD)
      .isAlphanumeric()
      .withMessage(CONFIG.CONTACT.VALIDATION.INVALID_MESSAGE)
      .escape()
  ];
};

replyMessage = function(senderName, senderEmail, senderSubject) {
  var mailOptions = {
    from:
      "<" + CONFIG.CONTACT.MAIL.APP_NAME + "> " + CONFIG.CONTACT.MAIL.APP_EMAIL,
    to: senderEmail,
    replyTo: CONFIG.CONTACT.MAIL.APP_EMAIL,
    subject: "RE: " + senderSubject,
    html: CONFIG.CONTACT.MAIL.APP_REPLY
  };
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent is: " + JSON.stringify(response));
    }
  });
};
exports.sendMessage = function(req, res) {
  console.log(req.body);
  const errors = validationResult(req.body);
  if (!errors.isEmpty()) {
    res.status(422).send(errors.array());
  } else {console.log(req.body.data);
    var senderName = req.body.data.yourname;
    var senderEmail = req.body.data.youremail;
    var senderSubject = req.body.data.yoursubject;
    var senderMessage = req.body.data.message;
    if (req.body.data.advertise) {
      var INQUIRY = "[Advertise Inquiry] ";
    } else {
      var INQUIRY = "[Web Inquiry] ";
    }

    replyMessage(senderName, senderEmail, senderSubject);
    var mailOptions = {
      from: "<" + senderName + "> " + CONFIG.CONTACT.MAIL.APP_EMAIL,
      to: CONFIG.CONTACT.MAIL.APP_EMAIL,
      replyTo: senderEmail,
      subject: INQUIRY + senderSubject,
      html: senderMessage
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response) {
      if (error) {
        console.log(error);
        res.status(400).send("Something Went Wrong!!!");
      } else {
        console.log("Message sent: " + JSON.stringify(response));
        res.status(200).send("Message Sent");
      }
    });
  }
};
