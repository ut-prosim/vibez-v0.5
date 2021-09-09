const { isLoggedIn } = require("../middleware/auth");
const router = require("express").Router();

router.use("/spotify", require('./spotify'));
router.use("/users", require("./users"));

module.exports = router;
