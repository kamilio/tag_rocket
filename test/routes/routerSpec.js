define(['public/javascript/router'], function(AppRouter) {
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
        })
    });
});