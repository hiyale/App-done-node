var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Please use /api/contents or /api/pages!');
});

module.exports = router;