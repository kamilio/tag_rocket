require.config({
    paths: {
        "jquery": "../libs/jquery/dist/jquery",
        "underscore": "../libs/underscore/underscore",
        "backbone": "../libs/backbone/backbone",
        "bootstrap": "../libs/bootstrap/dist/js/bootstrap",
        "text": "../libs/requirejs-text/text"
    }
});

requirejs(['app'], function(App){
    "use strict";
    new App(({el: document.body}));
});