var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// Contact page route.
router.get("#contact", function(req, res) {
  res.render("/contact", { title: "Contact" });
});
//Footer page route
router.get("#footer", function(req, res) {
  res.render("/footer", { title: "Footer" });
});

module.exports = router;
