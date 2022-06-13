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


router.get('/', function (req, res, next) {
  res.render('teacher', { sponser: "Dream Big Dream11" });


  console.log("Ritik");
  con.connect(function (err) {
    console.log("Aniket")
    if (err)
      console.log("err");
    console.log("Connected!");
  });
  console.log("Raghav Jhunjhunwala")
  
});


router.post('/signin', function (req, res, next) {
  getLoginPost(req, res, next);

});

module.exports = router;