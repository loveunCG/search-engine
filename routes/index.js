var express = require('express');
var router = express.Router();
let search = require('../controllers/search')

/* GET home page. */


router.get('/', search.home);
router.get('/search', search.search);


module.exports = router;
