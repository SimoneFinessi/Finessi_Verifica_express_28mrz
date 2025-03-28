var express = require('express');
var router = express.Router();
const fs = require('fs');

const people = require('../persone.json');

router.get('/people/:email', function(req, res, next) {
    const persona = people.find(P => P.email === req.params.email);
    res.render('people', {  persona });

});

module.exports = router;