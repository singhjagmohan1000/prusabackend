const newsController = require("../controllers/news.ctrl");
module.exports = router => {
  router.route("/news").get(newsController.getNews);
};
