define(function () {
    'use strict';
    var win = window,
        hmt = [],
        hm = document.createElement("script"),
        s = document.getElementsByTagName("script")[0];
    hm.src = "//hm.baidu.com/hm.js?a0a31ef9026d5f6c098769b9ed7ecb93";
    s.parentNode.insertBefore(hm, s);
    win._hmt = hmt;
    win.onerror = function (message, file, line, column) {
        var category = "jserror",
            action = message,
            label = file + "#L" + line;
        if (hmt && typeof hmt.push === "function") {
            hmt.push(['_trackEvent', category, action, label]);
        }
        return false;
    };
});