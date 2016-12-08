var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('', function(req, res){
    User.getAllUsers(function(err, users){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(users);
    })
}),

router.get('/login', function(req, res){
    res.end('please login');
});

router.post('/', function(req, res){
    var user = req.body;
    User.addUser(user, function(err, user){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(user);
    })
});

module.exports = router;