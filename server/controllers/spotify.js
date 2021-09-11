
// const passport = require("../OAuth/passport");

// const index = async (req, res) => {
// res.send(`Hello world ${req.user.displayName}`);
// };

// const error = async (req, res) => {
//  res.send("Unknown Error");
// };

// const spotAuth = async (req, res) => {
//   passport.authenticate("spotify");
// };

// const redirect = async (req, res) => {
//   passport.authenticate("spotify", { failureRedirect: "/auth/error" }),
//     function (req, res) {
//       res.redirect("/");
//     };
// };

// module.exports = {
//     redirect,
//     spotAuth,
//     error,
//     index,
// }