var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

Page = require('./models/page');
Content = require('./models/content');

mongoose.connect('mongodb://localhost/appdone');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/contents or /api/pages!');
});

app.get('/api/pages', function(req, res){
    Page.getAllPages(function(err, pages){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(pages);
    })
});

app.post('/api/pages', function(req, res){
    var page = req.body;
    Page.addPage(page, function(err, page){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(page);
    })
});

app.put('/api/pages/:_id', function(req, res){
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

app.delete('/api/pages/:_id', function(req, res){
    var id = req.params._id;
    Page.deletePage(id, function(err, page){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(page);
    })
});

app.get('/api/contents/:page', function(req, res){
    Content.getContentsByPage(req.params.page, function(err, contents){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(contents);
    })
});

app.post('/api/contents', function(req, res){
    var content = req.body;
    Content.addContent(content, function(err, content){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(content);
    })
});

app.put('/api/contents/:_id', function(req, res){
    var id = req.params._id
    var content = req.body;
    Content.updateContent(id, content, {}, function(err, content){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(content);
    })
});

app.delete('/api/contents/:_id', function(req, res){
    var id = req.params._id
    Content.deleteContent(id, function(err, content){
        if(err){
            throw err;
        }
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(content);
    })
})

app.get('/parse_json/:username/:projectname', function(req, res){
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

app.post('/write_json/:username/:projectname', function(req, res){
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

app.listen(3456);
console.log('Running on port 3456.....');