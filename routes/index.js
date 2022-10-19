var express = require('express');
var router = express.Router();
const sql = require('../data/dbUserInfo/db_tbuserInfo');

/* GET home page. */
router.get('/', function(req, res, next) {
  sql.getUser().then(result =>{
    res.render('layouts/linkcustom', { user: result[0] });
  });
});

module.exports = router;
