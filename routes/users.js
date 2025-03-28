var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  const people = require('../persone.json');
  res.send(people);
});

module.exports = router;
