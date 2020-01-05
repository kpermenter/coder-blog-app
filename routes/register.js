const express = require('express');
const router = express.Router();
const user = require('../models').user;

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

// http://localhost:3000/login/register

/* GET register */
router.get('/', function(req, res) {
res.render('register');
});

/* POST register */
router.post('/', (req, res) => {
  user.create(req.body);
  res.send('user created')
  });


// router.get('/login', (req, res) => {
//   // render new view, empty article Object
//     res.render("register");
//   });

// router.post('/login', function(req, res) {
// user.register(new user({username: req.body.username, password: req.body.password}), function(){
//       passport.authenticate("local")(req, res, function() {
//         res.redirect("/articles/");
//       });
//     })
//   })
  
/* create user */
// router.post('/', (req, res) => {
// user.create(req.body);
// res.redirect("/articles/");
// });


module.exports = router;