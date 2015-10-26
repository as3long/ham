define(["./duoshuo","./jquery.lazyloadWebp","./prism.full.min"],function(duoshuo,lazyloadWebp,prism){
    window.duoshuoQuery = {short_name:"ham"};
    $(function(){
        $("img").lazyloadWebp({
            effect : "fadeIn"
        });
    });
});