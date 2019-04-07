const imageController = require("../controllers/caraousel.ctrl");
module.exports = router => {
    router.route("/prusaCaraousel").get(imageController.getImages);
};
