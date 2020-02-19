var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const orderclass = class {
  constructor(timestamp, instrument, buysell, lot, customer, sales) {
	this.Timestamp = timestamp;
	this.Instrument = instrument;
	this.BuySell = buysell;
	this.Lot = lot;
	this.Customer = customer;
	this.Sales = sales;
  } }
  
  var result = new Array();
  result.push(new orderclass("a","b","c","d","e","f"))
  result.push(new orderclass("a","b","c","d","e","f"))

  res.render('index', { title: 'Express' , orders:result});
});

module.exports = router;
