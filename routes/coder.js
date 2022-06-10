var express = require('express');
const func = require('../model/coder');
// const details = require('../model/coder');
// const a = require('../model/coder');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // console.log(req);
    // a("mittal sir");
    // console.log(details.name, details.contact);
    // res.json(details.contact);
    func.xyz("Coding");
    res.render('coder');
});

module.exports = router;