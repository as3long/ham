requirejs.config({
    baseUrl:"/js"
});

define(["duoshuo","jquery.lazyloadWebp"],function(duoshuo,lazyloadWebp,tongji){
    window.duoshuoQuery = {short_name:"ham"};
    $(function(){
        $("img").lazyloadWebp({
            effect : "fadeIn"
        });
    });
});