define(['views/tag_cloud_view'], function(TagCloudView) {
    describe('TagView', function() {
        beforeEach(function(){
            this.model = tagFactory();
            this.view = new TagCloudView({collection: new Backbone.Collection([this.model])});
            this.view.render();
        });

        it('should create a div element', function(){
            expect(this.view.el.nodeName).toEqual("DIV");
        });

        it('should render the view', function() {
            expect(this.view.$el.html()).toContain("Berlin");
        });
    })
});