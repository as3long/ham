// 基于window.onerror 收集前端错误信息
window.onerror = function (message, url, line, columnNumber, errorObj) {
    if (!url) {
        return;
    }

    var msg = {};

    // 记录客户端环境
    msg.ua = window.navigator.userAgent;

    // 只记录message里的message属性就好了，
    // 错误信息可能会比较晦涩，有些信息完全无用，应酌情过滤
    msg.message = message.message;
    msg.url = url;
    msg.line = line;
    msg.column = columnNumber;
    msg.page = window.location.href;
    msg.strack = errorObj ? errorObj.stack.toString() : '';
    var s = [];

    // 将错误信息转换成字符串
    for (var key in msg) {
        s.push(key + '=' + encodeURIComponent(msg[key]));
    }

    s = s.join('&');

    // 这里是用增加标签的方法调用日志收集接口，优点是比较简洁。
    new Image().src = '/jserror/report?' + s + '&t=' + (new Date()).getTime();
};
