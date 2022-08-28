var express = require('express');
const { getLoginPost } = require('../controller/controller');
var mysql = require('mysql');
var router = express.Router();

var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: "kccStudent"
});

con.connect()


router.get('/', function (req, res, next) {
  res.render('teacher', { sponser: "BGMI (KRAFTON)" });


  console.log("Gaurav");
  con.connect(function (err) {
    console.log("Manoj")
    if (err)
      console.log("err");
    console.log("Connected!");
  });
  console.log("Jayantilal")

});

router.get('/getLogin', function (req, res, next) {
  // console.log(req.query)
  // con.connect()
  con.query("select * from form", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.render('teacher', { "data": result })
  });

});

router.post('/updateLogin', function (req, res, next) {
  console.log(req.body)
  res.json({ "Name": "Hello" })
});

router.post('/deleteLogin', function (req, res, next) {
  console.log(req.body.id)
  // res.json({ "Name": "Hello" })
  con.query("DELETE FROM form where id =" + req.body.id, function (err, result) {
    if (err) res.json({ code: 0 });
    console.log(result);
    res.json({ code: 1 })
  });
});


router.post('/signin', function (req, res, next) {
  getLoginPost(req, res, next);

});

module.exports = router;