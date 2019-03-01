const scheduleController = require("../controllers/schedule.ctrl");
module.exports = router => {
  router.route("/currentShow").get(scheduleController.currentShow);

  router.route("/scheduleMonday").get(scheduleController.scheduleMonday);

  router.route("/scheduleTuesday").get(scheduleController.scheduleTuesday);

  router.route("/scheduleWednesday").get(scheduleController.scheduleWednesday);

  router.route("/scheduleThursday").get(scheduleController.scheduleThursday);

  router.route("/scheduleFriday").get(scheduleController.scheduleFriday);

  router.route("/scheduleSaturday").get(scheduleController.scheduleSaturday);

  router.route("/scheduleSunday").get(scheduleController.scheduleSunday);
};
