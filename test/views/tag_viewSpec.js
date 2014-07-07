define(['views/tag_view'], function(TagView) {
    describe('TagView', function() {
        beforeEach(function(){
            this.view = new TagView();
        });
        it('should create a span element', function(){
            expect(this.view.el.nodeName).toEqual("SPAN");
        });

        describe("Rendering", function() {
            beforeEach(function(){
                this.view.model = tagFactory();
                this.view.render();
            });

            it('should render the view', function() {
                expect(this.view.$el.html()).toContain("Berlin");
            })
        })
    });
});