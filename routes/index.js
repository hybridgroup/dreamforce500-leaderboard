var express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', res.data);
});

module.exports = router;
