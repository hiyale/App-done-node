var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        username:{ type:String, required:true, index: true},
        password: {type:String, required:true},
        email:{ type:String, unique: true},
        name: {
            firstname:String,
            lastname:String
        },
        mobile: { type:String, unique: true },
        avator: String,
        usergroup: String,
        isAuthed: Boolean,
        invitecode:{ type:String, unique:true },
        create_date:{ type: Date, default: Date.now},
        update_date:{ type: Date, default: Date.now}
    }
);

userSchema.pre('save', function(next){
    var user = this;
    if(this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err, hash){
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            })
        })
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function(passw, cb) {
    bcrypt.compare(passw, this.password, function(err, isMatch) {
        if(err){
            return cb(err);
        }
        cb(null, isMatch);
    })
}

var User = module.exports = mongoose.model('User', userSchema);

module.exports.getAllUsers = function(callback, limit){
    User.find(callback).limit(limit);
}

module.exports.getUser = function(userid, callback){
    User.where('_id',userid).find(callback);
}

module.exports.addUser = function(user, callback){
    console.log(user);
    User.count({'email': user.email}, function(err, c) {
           if (c>0) {
               console.log("相同邮箱用户已注册");
               return;
           }
    });

    User.count({'mobile': user.mobile}, function(err, c) {
           if (c>0) {
               console.log("相同手机号码用户已注册");
               return;
           }
    });

    User.create(user,callback);
}

module.exports.updateUser = function(id, user, options, callback){
    var query = {'_id':id};
    var update = {
        'username':user.username,
        'password': user.password,
        'email': user.email,
        'name': {
            firstname: user.name.firstname,
            lastname: user.name.lastname
        },
        'avator': user.avator,
        'usergroup': user.usergroup,
        'invitecode': user.invitecode
    }
    Page.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteUser = function(id, callback){
    var query = {'_id':id};
    User.remove(query, callback).exec();
}