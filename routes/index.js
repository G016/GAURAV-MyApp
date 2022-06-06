var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fake Institute of Technology' });
  // console.log(req)
  // res.json({name:"RITIK KUMAR"})
});

router.post('/signup', (req, res) => {
  var em = req.body.emailInput;
  res.render('index', { email: em , title:"Product Based Company"});
});

module.exports = router;
