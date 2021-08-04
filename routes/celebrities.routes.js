// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");

//GET route

router.get('/celebrities/create', (req, res) => res.render("celebrities/new-celebrity"));

/////-----------------------------------
//POST route

router.post('/celebrities/create', (req, res) => {
    const { name, occupation, catchPhrase } = req.body;

          Celebrity.create({ name, occupation, catchPhrase })

          .then(addCelebrity => {
            res.redirect('/celebrities')
          })

          .catch(error =>{
            res.redirect('celebrities/new-celebrity', error)
            next(error)
          })
        
})

//////-----------

router.get('/celebrities', (res,req, next) => {
    Celebrity.find() //display all
    .then(allCelebritiesFromDB => {
        res.render('celebrities/celebrities',{celebrities: allCelebritiesFromDB} )
    })
    .catch(error =>{
        console.log('There was an error', error)
    })

})

module.exports = router;
