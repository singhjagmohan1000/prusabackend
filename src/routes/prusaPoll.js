const pollController = require("../controllers/poll.ctrl");
module.exports = router => {
  router.route("/poll").get(pollController.getPollQuestion);
  router.route("/poll/option/:option").put(pollController.updatePollResults);
};
