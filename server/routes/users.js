//  SERVER/ROUTES/users.js  //

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { requireLogin } = require("../middleware/auth");

//find  all users
router.get("/users", requireLogin, async (req, res) => {
  const user = await User.find(req.params).select("-password").select("-email");
  try {
    if (user) {
      return res.status(200).json(user);
    }
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/users/:id", requireLogin, async (req, res) => {
  const user = await User.findById({ _id: req.params.id })
  .select("-password")
  .select("-email");
  try {
    if (user) {
      return res.status(200).json(user);
    }
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err.message);
  }
});
//register user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashed_password = await bcrypt.hash(password, 10);
    user = new User({
      name,
      email,
      password: hashed_password,
    });
    await user.save();
    return res.status(201).json({ message: "User successfully created" });
  } catch (err) {
    console.log(err.message);
  }
});

// login user

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "User not found" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1hr",
    });

    return res.status(200).json(token);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/", requireLogin, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;
