define(['models/tag'], function(Tag) {
    describe('Tag', function() {
        beforeEach(function(){
            this.tag = tagFactory()
        });

        it('should have right property label', function() {
            expect(this.tag.get("label")).toEqual("Berlin");
        });

        describe('sentiment', function(){
            it('should calculate positive sentiment for a score 65', function() {
                expect(this.tag.sentiment()).toEqual("positive");
            });
            it('should calculate negative sentiment for a score 28', function() {
                this.tag.set("sentimentScore", 28);
                expect(this.tag.sentiment()).toEqual("negative");
            });
            it("should calculate neutral sentiment for a score 40", function() {
                this.tag.set("sentimentScore", 40);
                expect(this.tag.sentiment()).toEqual("neutral");
            });

            it("should return correct class for a positive sentiment", function(){
                expect(this.tag.sentimentClass()).toEqual("sentiment-positive");
            })
        });

        describe('volume', function(){
            it('should have a volume attribute', function() {
                expect(this.tag.volume()).toEqual(165)
            });

            it('should calculate a relative volume without any values', function() {
                expect(this.tag.relativeVolume()).toEqual(0);
            });

            it('should have a correct relative volume class', function() {
                expect(this.tag.relativeVolumeClass()).toEqual("volume-0");
            });
        });

        describe('relative volume calculation', function() {
            beforeEach(function(){
                this.tag.set('volumeMin', 1);
                this.tag.set('volumeMax', 60);
            });

            it('volume-0 edge case low', function() {
                this.tag.set('volume', 1);
                expect(this.tag.relativeVolume()).toEqual(0)
            });

            it('volume-0 edge case border', function() {
                this.tag.set('volume', 10);
                expect(this.tag.relativeVolume()).toEqual(0)
            });

            it('volume-1 edge case border', function() {
                this.tag.set('volume', 11);
                expect(this.tag.relativeVolume()).toEqual(1)
            });

            it('volume-5 edge case top top', function() {
                this.tag.set('volume', 59);
                expect(this.tag.relativeVolume()).toEqual(5)
            });

            it('volume-5 edge case top top', function() {
                this.tag.set('volume', 60);
                expect(this.tag.relativeVolume()).toEqual(5)
            });

            it('zero division case (one item)', function() {
                this.tag.set('volumeMin', 60);
                this.tag.set('volumeMax', 60);
                this.tag.set('volume', 60);
                expect(this.tag.relativeVolume()).toEqual(0)
            })
        });

        describe('sentiment attributes', function() {
            it('should have negative sentiment set to 0', function() {
                expect(this.tag.negativeSentiment()).toEqual(0);
            });

            it("should have positive sentiment 29", function() {
                expect(this.tag.positiveSentiment()).toEqual(29);
            });

            it("should have neutral sentiment 133", function() {
                expect(this.tag.neutralSentiment()).toEqual(133);
            });

            it("should have sum of sentiments equal to ", function() {
                expect(this.tag.totalSentiments()).toEqual(162);
            })
        })
    });
});