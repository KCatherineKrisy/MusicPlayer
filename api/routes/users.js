var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'library'
});

connection.connect();
// /* GET users listing. */
// var spool = require ('./../mysql/spool');
// spool = new spool;

router.get('/', function(req, res, next) {
  // spool.search(sql, req, res);

  connection.query('SELECT * from new', function(err, result) {
    console.log('The solution is: ', result);
    if (err) console.log("[err]"+ err.message);
    console.log('The solution is: ', result);
  });
  res.send('respond with a resource');
  connection.end();
});

module.exports = router;
