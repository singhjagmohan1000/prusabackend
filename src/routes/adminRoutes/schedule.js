const scheduleController = require("../../admincontrollers/schedule.ctrl");
module.exports = router => {

  router.route("/scheduleMonday").post(scheduleController.scheduleMonday);

  router.route("/scheduleTuesday").post(scheduleController.scheduleTuesday);

  router.route("/scheduleWednesday").post(scheduleController.scheduleWednesday);

  router.route("/scheduleThursday").post(scheduleController.scheduleThursday);

  router.route("/scheduleFriday").post(scheduleController.scheduleFriday);

  router.route("/scheduleSaturday").post(scheduleController.scheduleSaturday);

  router.route("/scheduleSunday").post(scheduleController.scheduleSunday);
};
