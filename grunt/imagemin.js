// Image optimization
module.exports = {
    dist: {
        options: {
            optimizationLevel: 8,
            progressive: true,
            interlaced: true
        },
        files: [{
            expand: true,
            cwd: '<%= config.root %><%= config.img %>',
            src: ['**/*.{png,jpg,gif}'],
            dest: '<%= config.build %><%= package.name %>/<%= config.img %>'
        }]
    }
};
