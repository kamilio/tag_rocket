var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

    paths: {
        "jquery": "public/libs/jquery/jquery",
        "underscore": "public/libs/underscore/underscore",
        "backbone": "public/libs/backbone/backbone",
        "text": "public/libs/requirejs-text/text",

        "models": "public/javascript/models",
        "collections": "public/javascript/collections",
        "views": "public/javascript/views",
        "controllers": "public/javascript/controllers",
        "templates": "public/javascript/templates"
    },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});

var tagFactory = function(){
    var Tag = require('models/tag');
    return new Tag({"id":"1751295897__Berlin","label":"Berlin","volume":165,"type":"topic","sentiment":{"neutral":133,"positive":29},"sentimentScore":65,"burst":13,"days":[{"date":"2014-06-06T00:00:00.000+0000","volume":22},{"date":"2014-06-04T00:00:00.000+0000","volume":43},{"date":"2014-06-09T00:00:00.000+0000","volume":0},{"date":"2014-06-07T00:00:00.000+0000","volume":12},{"date":"2014-06-08T00:00:00.000+0000","volume":11},{"date":"2014-06-03T00:00:00.000+0000","volume":39},{"date":"2014-06-05T00:00:00.000+0000","volume":38}],"pageType":{"blog":17,"facebook":56,"forum":22,"general":5,"image":0,"news":26,"review":1,"twitter":35,"video":3},"queries":[{"id":1751295897,"name":"Berghain","volume":165}]});
};