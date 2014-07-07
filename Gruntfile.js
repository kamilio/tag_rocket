module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            options: {
                script: 'server.js'
            },
            dev: {
                options: {
                    background: false
                }
            }
        },
        bower: {
            install: {}
        },

        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            dev: {
                browsers: ['PhantomJS'],
                reporters: 'dots',
                autoWatch: true
            },
            ci: {
                singleRun: true,
                browsers: ['PhantomJS']
            }

        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-karma');
};