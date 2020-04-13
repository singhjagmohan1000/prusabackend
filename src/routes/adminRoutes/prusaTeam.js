const teamcontroller = require("../../admincontrollers/prusaTeam.ctrl");
module.exports = router => {
  router.route("/team").post(teamcontroller.addTeam);
};
