module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/public/scripts/*',
        dest: 'build/public/scripts/sample.min.js'
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
        server: {
            files: [{
                expand: true,
                cwd: 'src/public/styles',
                src: ['*.*'],
                dest: 'src/public/styles/css',
                ext: '.css'
            }]
        },
        dist: {
            files: [{
                expand: true,
                cwd: 'src/public/styles',
                src: ['*.{scss,sass}', '{,**/}*.{scss,sass}'],
                dest: 'src/public/styles/css',
                ext: '.css'
            }]
        }
    },

    // Empties folders to start fresh
    clean: {
        dist: {
            files: [{
                dot: true,
                src: [
                    'build/public/styles/*.css',
                ]
            }]
        },
        client: {
            files: [{
                dot: true,
                src: [
                    'build/public/styles/css/'
                ]
            }]
        },
        css: {
            files: [{
                dot: true,
                src: [
                    //'src/public/styles/*.scss',
                    'src/public/styles/css/*.css'
                ]
            }]
        },
        server: {
            files: [{
                dot: true,
                src: [
                    'src/public/styles/css/*'
                ]
            }]
        }
    },

    watch: {
        scripts: {
            files: ['src/public/styles/*.scss', 'src/public/styles/*.css', 'src/public/scripts/*.js'],
            tasks: ['clean:css' ,'jshint','clean:client','sass:server'],
            options: {
                spawn: false
            },
        },
    },

    jshint: {
        all: {
            src: ['src/public/scripts/custom.js'],
        },
    }
  });

  // Load the plugin that provides the "uglify" task.
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('serve', ['clean:client','uglify', 'sass', 'jshint', 'clean:client', 'watch' ]);

};