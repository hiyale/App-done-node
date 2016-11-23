var mongoose = require('mongoose');
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
        create_date:{ type: Date, default: Date.now},
        update_date:{ type: Date, default: Date.now}
    }
);