define(function(require) {
    var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');
    var Tag = require('models/tag');
    return Backbone.Collection.extend({
        model: Tag,

        url: "/topics.json",

        // Handle slightly different format of incoming json then expected by default
        parse: function(response) {
            return response.topics
        },

        // Resolves maximum volume from all members
        volumeMax: function() {
            return _.max(this.volumes());
        },

        // Resolves minimum volume from all members
        volumeMin: function() {
            return _.min(this.volumes());
        },

        // Escalates the maximum and minimum to its members
        setVolumes: function() {
            var max = this.volumeMax();
            var min = this.volumeMin();
            this.each(function(tag) {
                tag.set('volumeMax', max);
                tag.set('volumeMin', min);
            })
        },

        volumes: function() {
            return this.map(function(tag) { return tag.volume() })
        },

        initialize: function() {
            this.on('add remove reset', this.setVolumes)
        }
    });
});