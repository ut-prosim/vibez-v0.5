require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
const cookieSession = require("cookie-session");
const app = express();
const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;

app.use(
  cookieSession({
    name: "spotify-auth-session",
    keys: ["key1", "key2"],
  })
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
let url = "http://localhost:5000/auth/spotify/callback";

const client_id = "cb4e46622559403d9acdba7144bf4831";
const client_secret = "cd315e345f264902bd1406a642bb2830";

passport.use(
  new SpotifyStrategy(
    {
      clientID: client_id,
      clientSecret: client_secret,
      callbackURL: "http://localhost:3000/auth",
    },
    function (accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
//   console.log(req.url);
//   // is there an auth header
//   console.log("AUTH HEADER: ", req.headers.authorization);
//   if (req.body) {
//     console.log("BODY BEING SENT: ", req.body);
//   }
//   next();
// });

app.use("/auth", require("./routes/users"));

//Serve build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/auth", (req, res) => {
  res.send("Hello world");
});

app.get("/auth/auth/error", (req, res) => res.send("Unknown Error"));
app.get("/auth/auth/spotify", passport.authenticate("spotify"));
app.get(
  "/auth/auth/spotify/callback",
  passport.authenticate("spotify", {
    failureRedirect: "/auth/auth/login",
    scope: ["user-read-email", "user-read-private"],
  }),
  function (req, res) {
    res.redirect("/auth");
  }
);

app.listen(PORT, () => console.log("Server is running"));
