const imageController = require("../controllers/news.ctrl");
module.exports = router => {
  router.route("/getUSNews").get(imageController.getNews);
};
