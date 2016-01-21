 //Gruntfile
    module.exports = function(grunt) {

    //Initializing the configuration object
      grunt.initConfig({

        // Task configuration
        concat: {
          options: {
            separator: ';',
          },
          js_frontend: {
            src: [
              './bower_components/jquery/jquery.js',
              './bower_components/bootstrap/dist/js/bootstrap.js',
              './app/assets/javascript/frontend.js'
            ],
            dest: './public/assets/javascript/frontend.js',
          },
          js_backend: {
            src: [
              './bower_components/jquery/jquery.js',
              './bower_components/bootstrap/dist/js/bootstrap.js',
              './app/assets/javascript/backend.js'
            ],
            dest: './public/assets/javascript/backend.js',
          },
        },
        less{
          //...
        },
        uglify{
          //...
        },
        watch{
          //...
        }
      });

    // Plugin loading

    // Task definition

  };
