requirejs.config({
    baseUrl:"/js"
});

define(["duoshuo","jquery.lazyloadWebp","prism.full.min","sai-tongji"],function(duoshuo,lazyloadWebp,prism,sai){
    window.duoshuoQuery = {short_name:"ham"};
    $(function(){
        $("img").lazyloadWebp({
            effect : "fadeIn"
        });
    });
});