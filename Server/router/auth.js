var express = require('express');
var router = express.Router();

router.get('/register', function(req, res){
    res.render('index', { title: 'Hey', message: 'Hello there!' });
})

module.exports = router;