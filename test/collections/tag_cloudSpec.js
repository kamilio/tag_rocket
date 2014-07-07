define(['collections/tag_cloud'], function(TagCloud) {
    describe('TagCloud', function(){
        beforeEach(function(){
            this.tagCloud = new TagCloud([{"id":"1751295897__Berlin","label":"Berlin","volume":165,"type":"topic","sentiment":{"negative":3,"neutral":133,"positive":29},"sentimentScore":65,"burst":13,"days":[{"date":"2014-06-06T00:00:00.000+0000","volume":22},{"date":"2014-06-04T00:00:00.000+0000","volume":43},{"date":"2014-06-09T00:00:00.000+0000","volume":0},{"date":"2014-06-07T00:00:00.000+0000","volume":12},{"date":"2014-06-08T00:00:00.000+0000","volume":11},{"date":"2014-06-03T00:00:00.000+0000","volume":39},{"date":"2014-06-05T00:00:00.000+0000","volume":38}],"pageType":{"blog":17,"facebook":56,"forum":22,"general":5,"image":0,"news":26,"review":1,"twitter":35,"video":3},"queries":[{"id":1751295897,"name":"Berghain","volume":165}]}])
        });
        it("should be able to create instance of a model", function(){
            expect(this.tagCloud.size()).toEqual(1)
        });

        it("should have a right model", function() {
            expect(this.tagCloud.first().get("label")).toEqual("Berlin")
        });

        it("should save the volume minimum internally", function() {
            expect(this.tagCloud.volumeMin()).toEqual(165);
        });

        it("should save the volume maximum internally", function() {
            expect(this.tagCloud.volumeMax()).toEqual(165);
        });

        it("instantiates models with maximum value of collection", function() {
            this.tagCloud.setVolumes();
            expect(this.tagCloud.first().get('volumeMin')).toEqual(165);
        });

        it("instantiates models with maximum value of collection", function() {
            this.tagCloud.setVolumes();
            expect(this.tagCloud.first().get('volumeMax')).toEqual(165);
        });
    });
});