const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: "cb4e46622559403d9acdba7144bf4831",
      clientSecret: "cd315e345f264902bd1406a642bb2830",
      callbackURL: "http://localhost:3000/auth/spotify/callback",
    },
    () => (accessToken, refreshToken, profile, done) => {
        console.log("from passport.js" + done, profile, accessToken, refreshToken);
        return done(null, profile);
    }
  )
);
