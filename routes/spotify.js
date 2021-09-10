
const { isLoggedIn, requireLogin } = require("../middleware/auth");
const router = require("express").Router();
const passport = require('../client/src/pages/Oauth/passport')

router.post("/", requireLogin ,isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});
router.get("/error", (req, res) => res.send("Unknown Error"));

router.get("/spotify", requireLogin, passport.authenticate("spotify"));

router.get("/spotify/callback", requireLogin,
  passport.authenticate("spotify", { failureRedirect: "/auth/error" }),
  function (req, res) {
    res.redirect("/");
  }
);

router.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

module.exports = router;