define(['jquery', 'underscore', 'backbone','text!templates/tag_detail.html'], function($, _, Backbone, showTemplate){
    return Backbone.View.extend({
        template: _.template(showTemplate),
        events: {
            "click a.close": "hide"
        },

        render: function() {
            this.$el.html(this.template({tag: this.model}));
            return this;
        },

        hide: function(e) {
            e.preventDefault();
            Backbone.history.navigate(e.target.pathname);
            this.$el.empty();
        }
    });
});