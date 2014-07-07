define(function (require) {
    var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');
    var tagsController = require('controllers/tags_controller');
    return Backbone.Router.extend({
        routes: {
            "": tagsController.index,
            "tag/:label": tagsController.show
        }
    });
});