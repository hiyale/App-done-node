var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var LocalStrategy = require('passport-local');
var passport = require('passport');
var flash = require('connect-flash');
var mongo = require('mongodb');
var morgan = require('morgan');

mongoose.connect('mongodb://localhost/appdone');
var db = mongoose.connection;


// routers ---------------------   //
var auth = require('./router/auth');
var index = require('./router/index');
var content = require('./router/content');
var page = require('./router/page');
var json = require('./router/json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.use(cookieParser());

app.use(session({
    secret: 'yimeng1901',
    saveUninitialized: true,
    resave: true
}));

app.use(morgan('dev'));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(flash());
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.use('/', index);
app.use('/auth',auth);
app.use('/api/pages',page);
app.use('/api/contents',content);
app.use('/json',json);

app.set('port',(process.env.PORT || 3000));

app.listen(app.get('port'), function(){
    console.log('Running on port ' + app.get('port'));
})
