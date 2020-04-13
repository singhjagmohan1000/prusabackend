const prusaTeam = require("./prusaTeam");
const schedule = require("./schedule");
const contact = require("./contact");
const prusaPoll = require("./prusaPoll");
const images = require("./images");
const usnews = require("./usNews");

module.exports = router => {
  prusaPoll(router);
  prusaTeam(router);
  contact(router);
  schedule(router);
  usnews(router);
  images(router);
};
