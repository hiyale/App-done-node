var express = require('express');
var router = express.Router();
var Content = require('../models/content');

router.get('/:page', function(req, res){
    Content.getContentsByPage(req.params.page, function(err, contents){
        if(err){
            throw err;
        }
        res.json(contents);
    })
});

router.post('/', function(req, res){
    var content = req.body;
    Content.addContent(content, function(err, content){
        if(err){
            throw err;
        }
        res.json(content);
    })
});

router.put('/:_id', function(req, res){
    var id = req.params._id
    var content = req.body;
    Content.updateContent(id, content, {}, function(err, content){
        if(err){
            throw err;
        }
        res.json(content);
    })
});

router.delete('/:_id', function(req, res){
    var id = req.params._id
    Content.deleteContent(id, function(err, content){
        if(err){
            throw err;
        }
        res.json(content);
    })
})

module.exports = router;