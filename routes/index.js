var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Fake Institute of Technology' });
  // console.log(req)
  // res.json({name:"RITIK KUMAR"})
});

router.post('/add', function (req, res, next) {
  console.log("Adding two number");
  console.log(req.body);
  var num1 = Number(req.body.a);
  var num2 = Number(req.body.b);
  var result = num1 + num2;
  console.log(result);
  // res.json(result);
  res.render('index', { total: result });
})

router.post('/sub', function (req, res, next) {
  console.log(req.body);
  var num1 = Number(req.body.a);
  var num2 = Number(req.body.b);
  var result = num1 - num2;
  console.log(result);
  res.render('index', { total: result });
})

router.post('/mul', function (req, res, next) {
  console.log(req.body);
  var num1 = Number(req.body.a);
  var num2 = Number(req.body.b);
  var result = num1 * num2;
  console.log(result);
  res.render('index', { total: result });
})

router.post('/signup', (req, res) => {
  var em = req.body.emailInput;
  res.render('index', { email: em, name: req.body.nameInput, title: "Product Based Company" });
});

module.exports = router;
