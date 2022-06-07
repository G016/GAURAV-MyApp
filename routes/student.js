var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req);
  res.json({ name: "KCC Tier-3 College" });
});

router.get('/login', function (req, res, next) {
  console.log(req.query)
  // res.send({"name":"Ritik"});
  res.render('student');
  // res.json({ "Name": "Naam me kya rakha hai" });
});

router.post('/login', function (req, res, next) {
  console.log(req.body)
  // res.send({"name":"Coder Ritik"});
  // res.render('student');
  res.json({ "Name": req.body });
});

router.get('/:da-:ta-:ch', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req.params.da)
  // res.json({name:req.params.da + " and " + req.params.ta + " are bestfriends"})
  res.render('student', { name: req.params.da, verb: req.params.ta, name1: req.params.ch, title: "INDIA" })
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