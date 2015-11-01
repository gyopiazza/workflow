// Uglify to concat, minify, and make source maps
module.exports = function(grunt, options) {

    var fs = require('fs'),
        path = require('path');

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

    // console.log(files);


    return {
        dev1: {
            options: {
                sourceMap: '<%= config.root %><%= config.js %>main.js.map',
                sourceMapIncludeSources: true,
                // sourceMappingURL: 'main.js.map',
                sourceMapPrefix: 2
            },
            expand: true,
            cwd: '<%= config.root %><%= config.js %>source/',
            src: '*.js',
            ext: '.min.js',
            dest: '<%= config.root %><%= config.js %>',
            flatten: true,
            filter: 'isFile',
        },
        dev2: {
            // options: {
                // sourceMap: '<%= config.root %><%= config.js %>main.js.map',
                // sourceMappingURL: 'main.js.map',
                // sourceMapPrefix: 2
            // },
            // src: '<%= config.root %><%= config.js %>source/**/*.js',
            // dest: '<%= config.root %><%= config.js %>main.js',
            // files: {
            //     '<%= config.js %>/main.min.js': [
            //         '<%= config.js %>/source/main.js'
            //     ]
            // },

            // files: grunt.file.expandMapping(['<%= config.root %><%= config.js %>source/autoload1/*.js', '<%= config.root %><%= config.js %>source/autoload2/*.js'], '<%= config.root %><%= config.js %>', {
            //     rename: function(destBase, destPath) {
            //         return destBase+destPath.replace('.js', '.min.js');
            //     }
            // }),

            files: autoload_files,

            // files: {
            //     '<%= config.root %><%= config.js %>/autoload1.js': [
            //         '<%= config.root %><%= config.js %>/source/autoload1/*.js',
            //         // '<%= config.root %><%= config.js %>/source/autoload1/1.js',
            //         // '<%= config.root %><%= config.js %>/source/autoload1/2.js'
            //     ]
            // }

            // files: grunt.file.expandMapping('**/*.js', '<%= config.root %><%= config.js %>', {
            //   cwd: '<%= config.root %><%= config.js %>source',
            //   rename: function(destBase, destPath) {
            //     console.log('destBase: '+destBase);
            //     grunt.log.writeln('destBase: '+destBase);
            //     return destBase + destPath.replace(/\.js$/, '.min.js');
            //   }
            // })

            // files: grunt.file.expandMapping(['<%= config.root %><%= config.js %>source/**/*.js'], '<%= config.root %><%= config.js %>/', {
            //     expand: true,
            //     flatten: false,
            //     rename: function(destBase, destPath) {
            //         grunt.log.writeln('destBase: '+destBase);
            //         grunt.log.writeln('destPath: '+destPath);
            //         return destBase+destPath.replace('.js', '.min.js');
            //     }
            // })
        },

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
