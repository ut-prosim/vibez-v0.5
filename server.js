require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");
const routes = require("./routes")
const PORT = process.env.PORT || 8000;

const app = express();

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
  
  app.use((req, res, next) => {
    console.log(req.url);
    // is there an auth header
    console.log("AUTH HEADER: ", req.headers.authorization);
    if (req.body) {
      console.log("BODY BEING SENT: ", req.body);
    }
    next();
  });
  
  app.use(
    cookieSession({
      name: "spotify-auth-session",
      keys: ["key1", "key2"],
    })
  );

app.use('/auth', require('./routes/spotify'))
app.use("/auth", require("./routes/users"));

//Serve build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("Server is running"));
