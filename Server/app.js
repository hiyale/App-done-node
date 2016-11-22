var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');


// routers ---------------------   //
var auth = require('./router/auth');
var index = require('./router/index');
var content = require('./router/content');
var page = require('./router/page');
var json = require('./router/json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/appdone');
var db = mongoose.connection;


app.use('/', index);
app.use('/auth',auth);
app.use('/api/pages',page);
app.use('/api/contents',content);
app.use('/json',json);

app.set('port',(process.env.PORT || 3456));

app.listen(app.get('port'), function(){
    console.log('Running on port ' + app.get('port'));
})
