// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

// all your routes here

router.get("/create", (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      res.render("movies/new-movie", { celebrities });
    })
    .catch((err) => console.log(err));
});

router.post("/create", (req, res) => {
  const { title, genre, plot, cast } = req.body;

  Movie.create(req.body)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      res.render("movies/new-movie");
    });
});

router.get("/", (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      res.render("movies/movies", { movies });
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res, next) => {
  const movieId = req.params.id;
  Movie.findById(movieId)
    .populate("cast")
    .then((movie) => {
      res.render("movies/movie-details",{ movie});
    })
    .catch((err) => console.log(err));
});

module.exports = router;
