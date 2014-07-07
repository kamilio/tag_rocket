define(['jquery', 'underscore', 'backbone','text!templates/tag_detail.html'], function($, _, Backbone, showTemplate){
    return Backbone.View.extend({
        template: _.template(showTemplate),
        render: function() {
            this.$el.html(this.template({tag: this.model}));
            return this;
        }
    });
});