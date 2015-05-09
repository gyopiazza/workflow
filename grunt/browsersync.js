// Launch browserSync
module.exports = {
    dev: {
        bsFiles: {
            src : ['<%= config.root %>**/*.html', '<%= config.root %>**/*.php', '<%= config.root %><%= config.css %>*.css', '<%= config.root %><%= config.js %>*.js', '<%= config.root %><%= config.img %>**/*.{png,jpg,jpeg,gif,webp,svg}']
        },
        options: {
            // proxy: "localhost",
            // host: "127.0.0.1",
            watchTask: true,
            server: {
                baseDir: "./project/"
            }
        }
    }
};
