var express = require('express');
var router = express.Router();
const {createForm, readForms} = require('../modules/mongodb');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const resultForm = await readForms();
  res.send(resultForm);
});

router.post('/', async function(req,res){
  const resultCreateForm = await createForm(req.body);
  res.send(resultCreateForm)
})







module.exports = router;
