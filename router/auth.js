var express = require('express');
var router = express.Router();

router.get('/register', function(req, res){
    res.render('index', { title: 'Hey', message: 'Hello there!' });
}),

router.get('/login', function(req, res){
    res.end('please login');
});

module.exports = router;