define(function(require){
    var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');
    var showTemplate = require('text!templates/tag.html');
    return Backbone.View.extend({
        events: {
            "click a": function(e) {
                e.preventDefault();
                Backbone.history.navigate('/tag/'+encodeURIComponent(this.model.get('label')), {trigger: false});
                this.renderDetail();
            }
        },
        template: _.template(showTemplate),
        tagName: "span",
        render: function() {
            this.$el.html(this.template({tag: this.model}));
            return this;
        },

        renderDetail: function() {
            var TagDetailView = require('views/tag_detail_view');
            var tagDetailView = new TagDetailView({model: this.model, el: $("#detail")});
            tagDetailView.render();
        }
    });
})