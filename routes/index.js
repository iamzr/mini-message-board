var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hey guys!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* GET new form page */
router.get("/new", function (req, res, next) {
  res.render("form");
});

/* POST data from new form page */
router.post("/new", function (req, res, next) {
  const text = req.body.text;
  const user = req.body.user;

  messages.push({ text: text, user: user, added: new Date() });

  res.redirect("/");
});

module.exports = router;
