var mongoose = require('mongoose');

var pageSchema = mongoose.Schema(
    {
        type:{ type:String, required:true },
        id:{ type:String, required:true },
        year:{ type:String, required:true },
        owner:{ type:String, required:true },
        dealer:{ type:String, required:true },
        distance:{ type:String, required:true },
        create_date:{ type: Date, default: Date.now},
        update_date:{ type: Date, default: Date.now}
    }
);

var Page = module.exports = mongoose.model('Page', pageSchema);

module.exports.getAllPages = function(callback, limit){
    Page.find(callback).limit(limit);
}

module.exports.getPagesByDealer = function(dealer, callback, limit){
    Page.where('dealer',dealer).find(callback).limit(limit);
}

module.exports.addPage = function(page, callback){
    Page.count({'id': page.id}, function(err, c) {
           if (c>0) {
               console.log("page duplicated removed");
               Page.remove({'id': page.id}).exec();
           }
           Page.create(page,callback);
    });
}

module.exports.updatePage = function(id, page, options, callback){
    var query = {'_id':id};
    var update = {
        'type':page.type,
        'id':page.id,
        'year':page.year,
        'owner':page.owner,
        'dealer':page.dealer,
        'distance':page.distance
    }
    Page.findOneAndUpdate(query, update, options, callback);
}

module.exports.deletePage = function(id, callback){
    var query = {'_id':id};
    Page.remove(query, callback).exec();
}