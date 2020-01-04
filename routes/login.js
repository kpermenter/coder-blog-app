const express = require('express');
const router = express.Router();
const user = require('../models/user');

/* TRY CATCH Handler function to wrap each route. */
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      res.status(500).send(error);
    }
  }
}

/* GET login */
router.get('/', function(req, res) {
    console.log('inside here');
    res.render('login');
})

/* GET register */
router.get('/register', function(req, res) {
    console.log('inside here');
    res.render('register');
})

router.post('/', function(req, res) {
    user.register(new user({username: req.body.username}), req.body.password, function(err, user) {
      if (err) {
        console.log(err);
        return res.render("/");
      }
      passport.authenticate("local")(req, res, function() {
        res.redirect("/");
      });
    })
  })


module.exports = router;