const imageController = require("../controllers/images.ctrl");
module.exports = router => {
  router.route("/allImages").get(imageController.getImages);
};
