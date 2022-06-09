var express = require('express');
var router = express.Router();
var modelDetails =  require("../model/coder");

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log(req);
    modelDetails.a(modelDetails.details.contact)
    res.render('coder');
});

module.exports = router;