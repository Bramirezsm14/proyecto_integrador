var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res) {
  res.render('home',{ title: 'Unlimited Sport' });
  
});

router.get('/login',function(req,res){
  res.render('form')
});

router.get('/check',function(req,res){
  res.render('checkOut')
});

router.get('/product',function(req,res){
  res.render('detalleProducto')
});
 

module.exports = router;
