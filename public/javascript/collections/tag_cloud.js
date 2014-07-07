define(function(require) {
    var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');
    var Tag = require('models/tag');
    return Backbone.Collection.extend({
        model: Tag,
        url: "/topics.json",
        parse: function(response) {
            return response.topics
        },
        volumes: function() {
            return this.map(function(tag) { return tag.volume() })
        },
        volumeMax: function() {
            return _.max(this.volumes());
        },
        volumeMin: function() {
            return _.min(this.volumes());
        },

        setVolumes: function() {
            var max = this.volumeMax();
            var min = this.volumeMin();
            this.each(function(tag) {
                tag.set('volumeMax', max);
                tag.set('volumeMin', min);
            })
        },

        initialize: function() {
            this.on('add remove reset', this.setVolumes)
        }
    });
});