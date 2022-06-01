var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/amazon', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  console.log(req)
  res.json({name:"KCC Tier-3 College"})
});

router.get('/:da-:ta', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    console.log(req.params.da)
    res.json({name:req.params.da + " " + req.params.ta + " are bestfriends"})
  });
  
  router.get('/:da', function(req, res, next) {
    console.log(req.params.da)
    // res.json({name:req.params.da})
    res.render('student', {title: req.params.da});
  });

module.exports = router;