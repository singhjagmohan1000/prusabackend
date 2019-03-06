const pollController = require("../controllers/poll.ctrl");
module.exports = router => {
  router.route("/pollResults").get(pollController.getPollResults);
  router.route("/getPollQuestion").get(pollController.getPollQuestion);
  router.route("/updatePoll").put(pollController.updatePollResults);
};
