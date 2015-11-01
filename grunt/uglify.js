// Uglify to concat, minify, and make source maps
module.exports = function(grunt, options) {

    var fs = require('fs'), path = require('path');

    function getFiles(srcpath) {
      return fs.readdirSync(srcpath).filter(function(file) {
        if (file.substring(0, 1) != '.' && file.substring(0, 1) != '_' && file.match(".js"+"$")==".js") {
            return fs.statSync(path.join(srcpath, file)).isFile();
        }
      });
    }

    function getDirectories(srcpath) {
      return fs.readdirSync(srcpath).filter(function(file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
      });
    }

    var files = getFiles(options.config.root+options.config.js+'source');
    var folders = getDirectories(options.config.root+options.config.js+'source');
    var autoload_files = {};

    // Add the single files under js/source/*.js
    // for (var i = 0, len = files.length; i < len; i++){
    //     autoload_files['<%= config.root %><%= config.js %>/'+files[i]+'.min.js'] = [
    //         '<%= config.root %><%= config.js %>/source/'+files[i]
    //     ];
    // }


    // Add the directories under js/source/**/*.js
    for (var i = 0, len = folders.length; i < len; i++){
        // console.log(folders[i]);

        if (folders[i].substring(0, 1) != '_') {

            // files.push({
                // expand: true,
            //     src: '<%= config.root %><%= config.js %>source/'+folders[i]+'/**/*.js',
            //     dest: '<%= config.root %><%= config.js %>'+folders[i]+'.min.js'
            // });

            // files.push({
            //     expand: true,     // Enable dynamic expansion.
            //     cwd: '<%= config.root %><%= config.js %>source/'+folders[i]+'/',      // Src matches are relative to this path.
            //     src: ['**/*.js'], // Actual pattern(s) to match.
            //     dest: '<%= config.root %><%= config.js %>',   // Destination path prefix.
            //     ext: '.min.js',   // Dest filepaths will have this extension.
            //     // extDot: 'first'   // Extensions in filenames begin after the first dot
            // });

            autoload_files['<%= config.root %><%= config.js %>/'+folders[i]+'.min.js'] = [
                '<%= config.root %><%= config.js %>/source/'+folders[i]+'/**/*.js'
            ];
        }
    }

    var dev_options = {
        // sourceMap: '<%= config.root %><%= config.js %>main.js.map',
        sourceMap: function(name){ return name; },
        sourceMapIncludeSources: true,
        // sourceMappingURL: 'main.js.map',
        sourceMapPrefix: 2
    };


    return {

        // All the files in assets/js/source are minified separately to assets/js
        dev1: {
            options: dev_options,
            expand: true,
            cwd: '<%= config.root %><%= config.js %>source/',
            src: '*.js',
            ext: '.min.js',
            dest: '<%= config.root %><%= config.js %>',
            flatten: true,
            filter: 'isFile',
        },

        // All the folders in assets/js/source are minified separately to assets/js
        dev2: {
            options: dev_options,
            files: autoload_files,
        },

        ///

        main: {
            options: {
                sourceMap: '<%= config.root %><%= config.js %>main.js.map',
                sourceMapIncludeSources: true,
                sourceMappingURL: 'main.js.map',
                sourceMapPrefix: 2
            },
            src: '<%= config.root %><%= config.js %>source/**/*.js',
            dest: '<%= config.root %><%= config.js %>main.js'
            // files: {
            //     '<%= config.js %>/main.min.js': [
            //         '<%= config.js %>/source/main.js'
            //     ]
            // }
        },
        main_build: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                sourceMap: false
            },
            src: '<%= config.root %><%= config.js %>source/**/*.js',
            dest: '<%= config.root %><%= config.js %>main.js'
        },
        plugins: {
            options: {
                sourceMap: '<%= config.root %><%= config.js %>plugins.js.map',
                sourceMapIncludeSources: true,
                sourceMappingURL: 'plugins.js.map',
                sourceMapPrefix: 2
            },
            src: '<%= config.root %><%= config.js %>vendor/autoload/**/*.js',
            dest: '<%= config.root %><%= config.js %>plugins.js'
            // files: {
            //     '<%= config.js %>plugins.min.js': [
            //         config.js+'vendor/fastclick.js'
            //     ]
            // }
        },
        plugins_build: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                sourceMap: false
            },
            src: '<%= config.root %><%= config.js %>vendor/autoload/**/*.js',
            dest: '<%= config.root %><%= config.js %>plugins.js'
        }
    };
};
