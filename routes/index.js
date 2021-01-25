var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).send('todo bien desde el back')
});

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  // res.render('index', { title: 'Express' });
  return res.status(200).send(req.body)

});

module.exports = router;
