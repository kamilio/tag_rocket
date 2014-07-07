define(function(require) {
    var $ = require('jquery'), _ = require('underscore'), Backbone = require('backbone');
    return Backbone.Model.extend({
        negativeSentimentThreshold: 40,
        positiveSentimentThreshold: 60,

        sentiment: function() {
            var score = this.get('sentimentScore');
            if (score > this.positiveSentimentThreshold) {
                return "positive";
            } else if (score < this.negativeSentimentThreshold) {
                return "negative";
            } else {
                return "neutral";
            }
        },

        sentimentClass: function() {
          return "sentiment-"+this.sentiment();
        },

        volume: function() {
           return this.get('volume');
        },

        relativeVolume: function() {
            var min = this.get('volumeMin');
            var max = this.get('volumeMax');

            if (min === undefined || max === undefined) {
                return 0
            }

            if (max - min === 0) {
                return 0
            }

            max = max + 1; // non inclusive interval

            var result = ((this.volume() - min) / (max - min)) * 6;
            return Math.floor(result);
        },

        relativeVolumeClass: function() {
            return "volume-" + this.relativeVolume().toString();
        },

        sentimentValues: function() {
            return this.get('sentiment') || {}
        },

        positiveSentiment: function() {
             return this.sentimentValues().positive || 0
        },

        negativeSentiment: function() {
            return this.sentimentValues().negative || 0
        },

        neutralSentiment: function() {
            return this.sentimentValues().neutral || 0
        },

        totalSentiments: function() {
            return this.neutralSentiment() + this.positiveSentiment() + this.negativeSentiment();
        },

        label: function() {
            return this.get('label')
        }
    });
});