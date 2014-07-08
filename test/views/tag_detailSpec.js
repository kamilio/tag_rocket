define(['views/tag_detail_view'], function(TagDetailView) {
    describe('TagView', function() {
        beforeEach(function(){
            this.view = new TagDetailView();
        });

        it('should create a span element', function(){
            expect(this.view.el.nodeName).toEqual("DIV");
        });

        describe("Rendering", function() {
            beforeEach(function(){
                this.view.model = tagFactory();
                this.view.render();
            });

            it('should render the view', function() {
                expect(this.view.$el.html()).toContain("Berlin");
            })

            it('should have total sentiment', function() {
                expect(this.view.$el.html()).toContain("162");
            })
        })
    });
});