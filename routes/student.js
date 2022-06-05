var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req)
  res.json({ name: "KCC Tier-3 College" })
});

router.post('/signup', (req, res) => {
  var em = req.body.emailInput;
  res.render('student', { email: em });
});

router.get('/:da-:ta-:ch', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.params.da)
  // res.json({name:req.params.da + " and " + req.params.ta + " are bestfriends"})
  res.render('student', { name: req.params.da, verb: req.params.ta, name1: req.params.ch })
});

router.get('/:da-:ta', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.params.da)
  // res.json({name:req.params.da + " and " + req.params.ta + " are bestfriends"})
  res.render('student', { name: req.params.da, name1: req.params.ta })
});

router.get('/:da', function (req, res, next) {
  console.log(req.params.da)
  // res.json({name:req.params.da})
  res.render('student', { name: req.params.da });
});

module.exports = router;