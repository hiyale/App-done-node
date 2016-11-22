var mongoose = require('mongoose');

var contentSchema = mongoose.Schema(
    {
        name:{ type:String, required:true },
        id:{ type:String, required:true },
        create_date:{ type: Date, default: Date.now }
    }
);

var Content = module.exports = mongoose.model('Content', contentSchema);

module.exports.getAllContents = function(callback, limit){
    Content.find(callback).limit(limit);
}

module.exports.addContent = function(content, callback){
    Content.count({'id': content.id}, function(err, c) {
           if (c>0) {
               console.log("content duplicated removed");
               Content.remove({'id': content.id}).exec();
           }
           Content.create(content,callback);
    });
}

module.exports.updateContent = function(id, content, options, callback){
    var query = {'_id':id};
    var update = {
        'name':content.name,
        'id':content.id
    }
    Content.findOneAndUpdate(query, update, options, callback);
}

module.exports.deleteContent = function(id, callback){
    var query = {'_id':id};
    Content.remove(query, callback).exec();
}
