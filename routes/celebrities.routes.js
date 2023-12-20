const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

// all your routes here

router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create(req.body)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      res.render("celebrities/new-celebrity");
    });
});

router.get("/", (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      res.render("celebrities/celebrities", { celebrities });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
