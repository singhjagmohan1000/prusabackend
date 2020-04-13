const teamcontroller = require("../controllers/prusaTeam.ctrl");
module.exports = router => {
  router.route("/team").get(teamcontroller.teamMembers);
};
