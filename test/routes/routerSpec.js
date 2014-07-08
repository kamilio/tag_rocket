define(['public/javascript/router', "controllers/tags_controller"], function(AppRouter, tagsController) {
    describe("AppRouter", function(){
        beforeEach(function() {
            this.router = new AppRouter;
            this.tagsController = require('controllers/tags_controller');
        });

        it('has a "index" route', function () {
            expect(this.router.routes['']).toEqual(this.tagsController.index);
        });

        it('has a "detail" route', function() {
            expect(this.router.routes['tag/:label']).toEqual(this.tagsController.show)
        });

        it('calls the index action of controller', function() {
            sinon.mock(tagsController).expects("index").once();
            this.router.navigate("/")
        });

        it('calls the show action of controller', function() {
            sinon.mock(tagsController).expects("show").once().withExactArgs("Hello");
            this.router.navigate("/tag/Hello")
        })
    });
});