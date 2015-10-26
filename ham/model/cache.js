var maxAge=1000*60*60;
var cache = Ham.cache.create(200);
cache.setDefaultTime(maxAge);
module.exports=cache;