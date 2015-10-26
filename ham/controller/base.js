var options=require("../model/options");
var Tags=require("../model/tags");
var Category=require("../model/category");
var Contents=require("../model/contents");
module.exports = Ham.Controller({
    options:{},
    tagList:[],
    categorys:[],
    latestPosts:[],
    init:function (req, res) {
        var self=this;
        self.callSuper(req, res);
        var promiseList=[];
        promiseList.push(options.get().then(function(data){
            self.options=data;
            self.assign("options",self.options);
        }));
         promiseList.push(Tags.get().then(function(data){
            self.tagList=data;
            self.assign("tagList",self.tagList);
        }));
         promiseList.push(Category.get().then(function(data){
            self.categorys=data;
            self.assign("categorys",self.categorys);
        }));
         promiseList.push(Contents.latestPosts().then(function(data){
            self.latestPosts=data;
            self.assign("latestPosts",self.latestPosts);
        }));
        return Promise.all(promiseList);
    }
});