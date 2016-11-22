var mongoose = require('mongoose');

var actionSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        id:{
            type:String,
            required:true
        },
        create_date:{
            type: Date,
            default: Date.now
        }
    }
);