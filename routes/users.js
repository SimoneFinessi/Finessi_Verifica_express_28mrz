var express = require('express');
var router = express.Router();
const people = require('../persone.json');
/* GET users listing. */
router.get('/users', function(req, res, next) {
  
  res.send(people);
});
router.get('/users/:email', function(req, res, next) {
  const persona = people.find(P => P.email === req.params.email);
  res.send(persona);

});
module.exports = router;
