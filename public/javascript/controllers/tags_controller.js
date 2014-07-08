define(function(require) {
    var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');

    var errorHandler = function(collection, response, options) {
        alert("Sorry, something went wrong... :( Please check your internet connection.");
    };

    var renderTagCloud = function(collection) {
        var TagCloudView = require('views/tag_cloud_view');
        var tagCloudView = new TagCloudView({collection: collection, el: $("#app")});
        tagCloudView.render();
    };

    var fetchTags = function(success_callback) {
        var TagCloud = require('collections/tag_cloud');
        var tagCloud = new TagCloud();
        tagCloud.fetch({
            success: success_callback,
            error: errorHandler
        });
        return tagCloud;
    };

    return {
        // Renders only tag cloud
        index: function() {
            fetchTags(function(collection) {
                renderTagCloud(collection);
                $("#detail").empty();
            });
        },

        // Renders tag cloud and additionally also detail for given tag
        show: function(label) {
            fetchTags(function(collection) {
                renderTagCloud(collection);

                var tag = collection.findWhere({label: decodeURIComponent(label)});
                if (tag === undefined) { return errorHandler(); }
                var TagDetailView = require('views/tag_detail_view');
                var tagDetailView = new TagDetailView({model: tag, el: $("#detail")});
                tagDetailView.render();
            })
        }
    }
});