var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        username:{ type:String, required:true, index: true},
        password: {type:String, required:true},
        email:{ type:String, required:true, unique: true},
        name: {
            firstname:String,
            lastname:String
        },
        avator: String,
        usergroup: String,
        invitcode:{ type:String, unique:true },
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