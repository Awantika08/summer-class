var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.json({
  name : 'profession name',
  college : 'Islington college',
  tech :['JavaScript' , 'Express' , 'React']
 })
});
module.exports = router;
