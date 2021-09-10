
const { isLoggedIn, requireLogin } = require("../middleware/auth");
const passport = require('passport');
const router = require("express").Router();

router.post("/auth", requireLogin ,isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});
router.get("/auth/auth/error", (req, res) => res.send("Unknown Error"));

router.get("/auth/auth/spotify", requireLogin, passport.authenticate("spotify"));

router.get("/auth/auth/spotify/callback", requireLogin,
  passport.authenticate("spotify", { failureRedirect: "/auth/auth/error" }),
  function (req, res) {
    res.redirect("/auth");
  }
);

router.get("/auth/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/auth");
});

module.exports = router;