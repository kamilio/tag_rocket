define(function(require){
    var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');

    return Backbone.View.extend({
        initialize: function() {
            this.collection.on('add', this.addOne, this);
        },

        addOne: function(tag) {
            var TagView = require('views/tag_view');
            var tagView = new TagView({model: tag});
            this.$el.append(tagView.render().el);
        },

        addAll: function(){
            this.$el.empty();
            this.collection.forEach(this.addOne, this);
        },

        render: function() {
            this.addAll();
            return this;
        }
    });
});