const imageController = require("../controllers/image.ctrl");
module.exports = router => {
  router.route("/images").get(imageController.loadImage);
};
