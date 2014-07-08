module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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

        },
        requirejs: {
            compile: {
                options: {
                    appDir: "public",
                    baseUrl: "javascript",
                    mainConfigFile: 'public/javascript/main.js',
                    dir: "public_combined",
                    removeCombined: true,
                    keepBuildDir: false,
                    optimize: "uglify2",
                    modules: [ { name: "main" } ]
                }
            }
        },

        bower: {
            install: {
                options: {
                    targetDir: 'public/libs',
                    layout: 'byType',
                    install: true,
                    verbose: false,
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    bowerOptions: {}
                }
            }
        }
    });

    grunt.registerTask('build', 'Build the app for specific environment', function() {
        if (process.env.NODE_ENV === 'production') {
            grunt.task.run('bower:install', 'requirejs:compile');
        } else { // development
            grunt.task.run('bower:install');
        }

    });

    if (process.env.NODE_ENV !== 'production') {
        grunt.loadNpmTasks('grunt-karma');
        grunt.registerTask('default', ['karma:dev']);
    }

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-bower-task');
};