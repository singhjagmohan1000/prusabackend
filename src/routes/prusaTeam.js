const teamcontroller = require("../controllers/prusaTeam.ctrl");
module.exports = router => {
  router.route("/getTeam").get(teamcontroller.getTeamMembers);
};
