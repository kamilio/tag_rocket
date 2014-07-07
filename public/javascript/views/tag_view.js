define(['jquery', 'underscore', 'backbone','text!templates/tag.html'], function($, _, Backbone, showTemplate){
    return Backbone.View.extend({
        events: {
            "click a": function(e) {
                e.preventDefault();
                Backbone.history.navigate('/tag/'+this.model.get('label'), {trigger: true})
            }
        },
        template: _.template(showTemplate),
        tagName: "span",
        render: function() {
            this.$el.html(this.template({tag: this.model}));
            return this;
        }
    });
})