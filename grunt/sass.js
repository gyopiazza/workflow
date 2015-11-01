// Compile Sass files
module.exports = {
    dev: {
      options: {
        style: 'expanded',
        sourcemap: 'auto',
        trace: true
      },
      files: [{
        expand: true,
        cwd: '<%= config.root %><%= config.css %>source',
        src: ['*.scss'],
        dest: '<%= config.root %><%= config.css %>',
        ext: '.css'
      }]
    },
    build: {
      options: {
        style: 'expanded',
        sourcemap: 'none',
        trace: false
      },
      files: [{
        expand: true,
        cwd: '<%= config.root %><%= config.css %>source',
        src: ['*.scss'],
        dest: '<%= config.root %><%= config.css %>',
        ext: '.css'
      }]
    }
};
