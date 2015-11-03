var jserror = require("../model/jserror");
module.exports = Ham.Controller({
    reportAction: function () {
        console.log(this.get());
        jserror.log(this.get());
        this.end();
    }
});