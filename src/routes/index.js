const images = require("./images");
const prusaTeam = require("./prusaTeam");
const schedule = require("./schedule");
const contact = require("./contact");
const prusaPoll = require("./prusaPoll");
const usnews = require("./usNews");
module.exports = router => {
  prusaPoll(router);
  images(router);
  prusaTeam(router);
  contact(router);
  schedule(router);
  usnews(router);
};
