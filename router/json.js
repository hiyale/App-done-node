var express = require('express');
var router = express.Router();

router.get('/parse_json/:username/:projectname', function(req, res){
    var username = req.params.username;
    var projectname = req.params.projectname;
    if (username != "" && projectname != "") {
        var dir  = __dirname + '/userdata/' + username;
        if (fs.existsSync(dir)){
            var filepath = dir + "/" + projectname + ".json";
            console.log(filepath);
            fs.access(filepath, fs.F_OK, function(err) {
                if (!err) {
                    fs.readFile(filepath, (err, data) => {
                        if (err) throw err;
                        res.send(JSON.parse(data));
                    });
                } else {
                    res.send("no file error");
                }
            });
        }else{
            res.send("no folder error");
        }
    }
});

router.post('/write_json/:username/:projectname', function(req, res){
    var username = req.params.username;
    var projectname = req.params.projectname;
    var jsoncontent = req.body
    if (username != "" && projectname != "") {
        var dir = __dirname + '/userdata/' + username;
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        var filepath = dir + "/" + projectname + ".json";
        fs.writeFile(filepath, JSON.stringify(jsoncontent), 'utf8', function(err){
            if(err) throw err;
        })
    }
    res.json(jsoncontent);
});

module.exports = router;