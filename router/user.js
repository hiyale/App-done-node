var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res){
    User.getAllUsers(function(err, users){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(users);
    })
}),

router.get('/:_id', function(req, res){
    var id = req.params._id;
    User.getUser(id, function(err, user){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(user);
    });
}),

router.put('/:_id', function(req, res){
    var id = req.params._id;
    var user = req.body;
    User.updateUser(id, user, {}, function(err, user){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(user);
    })
})

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

router.delete('/:_id', function(req, res){
    var id = req.params._id;
    User.deleteUser(id, function(err, user){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(user);
    })
});

module.exports = router;