var marked = require("marked");
module.exports = Ham.Controller("base",{
    indexAction: function () {
        this.display();
    },
    /**
     * [关于我们]
     */
    aboutAction: function () {
        this.display();
    },
    /**
     * [博客]
     */
    blogAction: function (page) {
        page=page||1;
        var self=this;
        Promise.all([ Ham.model.table("tags_contents").where({"type":"post","status":"publish","metas_type":"category"})
            .page(page,self.options.postsListSize).order(["modified","Z"]).cache().select().then(function(data){
            data.forEach(function(item) {
                item.text = marked(item.text);
                item.text = get_summary(item.text,300);
            });
            self.assign("contents",data);
        }),Ham.model.table("tags_contents").where({"type":"post","status":"publish","metas_type":"category"}).cache().count('cid').then(function(data){
            self.assign("now_page",page);
            var pageNum=Math.ceil(data/self.options.postsListSize);
            var pages=[];
            for(var i=1;i<pageNum+1;i++){
                pages.push(i);
            }
            self.assign("pages",pages);
        })]).then(function(){
            self.display();
        });
    },
    /**
     * [联系我们]
     */
    contactAction: function () {
        this.display();
    },
    detailsAction: function () {
        this.display();
    },
    ssAction:function(){
        if(!this.session['user']){
            this.session['user']="黄龙";
            this.echo("没有session信息");
        }else{
            this.echo("这是"+this.session['user']);
        }
    },
    postAction:function(){
        //this.echo(this.req.postFields);
        this.echo(this.sqlValidPost('userName'));
    },
    /**
     * [数据库测试Action]
     */
    dbAction: function () {
        var self = this;
        var echoSelectFilm = function (data) {
            self.echo(JSON.stringify(data));
        };
        var errFunc = function (err) {
            self.echo(err);
        };
        var selectFilm = function () {
            Ham.model.table("film").field(['title','year','starring']).limit(20).order("year").find().then(echoSelectFilm, errFunc);
        }
        var insertFilm = function () {
            return Ham.model.table("film").add({
                title: 'model2',
                starring: 'boxing'
            });
        }
        var deleteFilm = function () {
            return Ham.model.table("film").where({
                title: "huanglong"
            }).delete();
        }

        var updateFilm = function () {
            Ham.model.table("film").where({
                starring:"boxing"
            }).update({
                year: 2014
            }).then(selectFilm);
        }
        
        var addAllFilm=function(){
             return Ham.model.table("film").addAll([{
                title: 'huanglong1',
                starring: 'boxing'
            },{
                title: 'huanglong2',
                starring: 'boxing'
            }]);
        }
        
        var countFilm=function(){
            Ham.model.table("film").count('mid').then(function(data){
                self.echo(data);
            });
        }
        //addAllFilm().then(selectFilm);
        //insertFilm().then(selectFilm);
        //updateFilm().then(selectFilm);
        //selectFilm();
        countFilm();
    }
});