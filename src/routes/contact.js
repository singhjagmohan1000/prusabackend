const contactController = require("../controllers/contactForm.ctrl");
module.exports = router => {
  router
    .route("/contact")
    .post(
      contactController.validate("sendMessage"),
      contactController.sendMessage
    );
};
