var express = require('express');
var router = express.Router();
var Page = require('../models/page');

router.get('/', function(req, res){
    Page.getAllPages(function(err, pages){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(pages);
    })
});

router.post('/', function(req, res){
    var page = req.body;
    Page.addPage(page, function(err, page){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(page);
    })
});

router.put('/:_id', function(req, res){
    var id = req.params._id
    var page = req.body;
    Page.updatePage(id, page,{}, function(err, page){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(page);
    })
});

router.delete('/:_id', function(req, res){
    var id = req.params._id;
    Page.deletePage(id, function(err, page){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(page);
    })
});

module.exports = router;