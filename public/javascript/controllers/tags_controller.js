define(function(require) {
    var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');

    var TagCloud = require('collections/tag_cloud');
    var TagCloudView = require('views/tag_cloud_view');

    var errorHandler = function(collection, response, options) {
        alert("Sorry, something went wrong... :( Please check your internet connection.");
    };

    var renderTagCloud = function(collection) {
        var tagCloudView = new TagCloudView({collection: collection, el: $("#app")});
        tagCloudView.render();
    };

    var fetchTags = function(success_callback) {
        var tagCloud = new TagCloud();
        tagCloud.fetch({
            success: success_callback,
            error: errorHandler
        });
        return tagCloud;
    };

    return {
        index: function() {
            fetchTags(function(collection) {
                renderTagCloud(collection);
                $("#detail").empty();
            });
        },

        show: function(label) {
            fetchTags(function(collection) {
                renderTagCloud(collection);

                var tag = collection.findWhere({label: label});
                if (tag === undefined) { return errorHandler(); }
                var TagDetailView = require('views/tag_detail_view');
                var tagDetailView = new TagDetailView({model: tag, el: $("#detail")});
                tagDetailView.render();
            })
        }
    }
});