var marked = require("marked");
module.exports = Ham.Controller("base", {
    indexAction: function () {
        this.display();
    },
    _404Action: function () {
        var self = this,
            action = this.req.action;
        Ham.model.table("contents").where({
            type: "page",
            status: "publish",
            slug: action
        }).find().then(function (data) {
            data = data[0];
            if (data) {
                data.text = marked(data.text);
                self.assign("content", data);
                self.display("/archives/blog");
            } else {
                Ham._404Action(self.req, self.res);
            }
        })
    }
});