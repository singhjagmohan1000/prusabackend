
const schedule = require("./schedule");
const prusaTeam = require("./prusaTeam");
const prusaPoll = require("./prusaPoll");
module.exports = router => {
  schedule(router);
  prusaTeam(router);
  prusaPoll(router);
};
