module.exports = Ham.Controller("index", {
    indexAction: function () {
       $A.debug("你好user/index2！");
       this.callSuper("你好user/index2！");
    },
    extendsAction: function () {
        this.echo("继承");
    }
});