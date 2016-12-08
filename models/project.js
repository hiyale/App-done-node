var mongoose = require('mongoose');

var projectSchema = new Schema(
    {
        name:{ type:String, required:true, index: true},
        userid: {type:String, required:true},
        create_date:{ type: Date, default: Date.now},
        update_date:{ type: Date, default: Date.now}
    }
);