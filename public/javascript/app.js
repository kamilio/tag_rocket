define(function (require) {
    var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');
    return Backbone.View.extend({
        initialize: function () {
            var AppRouter = require('router');
            var appRouter = new AppRouter();
            Backbone.history.start({pushState: true});
        },
        events: {
            'click a': function(e){
                e.preventDefault();
                Backbone.history.navigate(e.target.pathname, {trigger: true});
            }
        },
    });
});