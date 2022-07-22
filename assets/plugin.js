

require(['gitbook', 'jQuery'], function(gitbook, $) {

    var appId;
    var conf;

    gitbook.events.bind('start', function(e, config) {
        appId = config.changyan.appId || '';
        conf = config.changyan.conf || '';
    });

    gitbook.events.on('page.change', function() {
        var commentBlock = [
            '<div id="SOHUCS" ></div>'
        ].join("");
        $(".page-inner").append(commentBlock)
        window.changyan=undefined;
        window.cyan=undefined;
        $.getScript("https://changyan.sohu.com/upload/changyan.js", function(){
            window.changyan.api.config({appid: appId,conf: conf});
        })
    });

})




