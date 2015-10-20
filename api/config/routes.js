var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser');

var mainController = require('../controllers/mainController')

router.route('/news/:year/:category')
  .get(mainController.getNews)

module.exports = router;