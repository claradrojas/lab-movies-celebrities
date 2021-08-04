// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
//Add const Celebrity = require
const Movie = require("../models/Movie.model");

router.get('/movies/create', (req, res) => res.render("movies/new-movie"));

router.post('/movies/create', (req, res) => {
    const { title, genre, plot, cast } = req.body;

          Movie.create({ title, genre, plot, cast })

          .then(addMovie => {
            res.redirect('/movies')
          })

          .catch(error =>{
            res.redirect('movies/new-movie', error)
            next(error)
          })
        
})


module.exports = router;
