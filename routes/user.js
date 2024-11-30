const express = require("express");
const signupRoutes = require("./userRoutes/signup");
const signInRoutes = require("./userRoutes/signin");
const updateInfoRoutes = require("./userRoutes/updateInfo");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    `||This is a user page||<br>You can go further by going to these URLs:<br>` +
      `<a href="/user/signup">/user/signup</a><br>` +
      `<a href="/user/signin">/user/signin</a><br>` +
      `<a href="/user/updateinfo">/user/updateinfo</a>`
  );
});

router.use("/signup", signupRoutes);
router.use("/signin", signInRoutes);
router.use("/updateinfo", updateInfoRoutes);

module.exports = router;

// {
//   "firstName": "naman",
//   "lastName": "Doe",
//   "email": "aujgjjasddgrdhkkjhdlj",
//   "password": "securePassword123"
// }
