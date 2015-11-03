requirejs.config({
    baseUrl:"/js"
});

define(["duoshuo","jquery.lazyloadWebp","prism.full.min","baidu.tongji"],function(duoshuo,lazyloadWebp,prism,tongji){
    window.duoshuoQuery = {short_name:"ham"};
    $(function(){
        $("img").lazyloadWebp({
            effect : "fadeIn"
        });
    });
});