//  SERVER/ROUTES/index.js  //

const { isLoggedIn } = require("../middleware/auth");
const router = require("express").Router();


router.use("/auth/users", require("./users"));


module.exports = router;
