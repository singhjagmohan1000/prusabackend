const pollController = require("../../admincontrollers/poll.ctrl");
module.exports = router => {
  router.route("/poll").post(pollController.createPoll);
};
