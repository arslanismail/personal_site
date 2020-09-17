var express = require("express");
var router = express.Router();

// middleware that is specific to this router

// define the home page route
router.get("/", function (req, res) {
  res.render("pages/index");
});
router.get("/experience", function (req, res) {
  res.render("pages/experience");
});
router.get("/education", function (req, res) {
  res.render("pages/education");
});
// define the about route
router.get("/about", function (req, res) {
  res.send("About birds");
});

module.exports = router;
