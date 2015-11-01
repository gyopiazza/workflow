// Watch for changes
module.exports = {
	sass: {
        files: ['<%= config.root %><%= config.css %>source/**/*.{scss,sass}', '!<%= config.root %><%= config.css %>vendor/'],
        tasks: ['sass:dev', 'autoprefixer', 'combine_mq', 'cssmin', 'notify:watch']
    },
    js: {
        files: '<%= jshint.all %>',
        tasks: ['jshint', 'uglify:main', 'notify:main_js']
    },
    js_plugins: {
        files: '<%= config.root %><%= config.js %>vendor/**/*.js',
        tasks: ['uglify:plugins', 'notify:plugins_js']
    }
};
