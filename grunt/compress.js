// Compress the project folder into a zip package
module.exports = {
    dist: {
        options: {
          archive: '<%= config.build %><%= package.name %>.zip'
        },
        files: [
          {expand: true, cwd: '<%= config.build %><%= package.name %>/', src: ['**'], dest: './<%= package.name %>'}
        ]
    }
};
