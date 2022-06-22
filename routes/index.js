var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Fake Institute of Technology' });
  // console.log(req)
  // res.json({name:"RITIK KUMAR"})
});

router.all('/add', function (req, res, next) {
  console.log("Adding two number");
  console.log(req.body);
  var num1 = parseFloat(req.body.a);
  var num2 = parseFloat(req.body.b);
  console.log(num1);
  console.log(num2);
  var result = num1 + num2;
  console.log(result);
  res.json(result);
})

router.all('/sub', function (req, res, next) {
  console.log(req.body);
  var num1 = parseFloat(req.body.a);
  var num2 = parseFloat(req.body.b);
  var result = num1 - num2;
  console.log(result);
  res.json(result);
})

router.all('/mul', function (req, res, next) {
  console.log(req.body);
  var num1 = parseFloat(req.body.a);
  var num2 = parseFloat(req.body.b);
  var result = num1 * num2;
  console.log(result);
  res.json(result);
})

router.post('/signup', (req, res) => {
  var em = req.body.emailInput;
  res.render('index', { email: em, name: req.body.nameInput, title: "Product Based Company" });
});

module.exports = router;
