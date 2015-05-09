// Compile Sass files
module.exports = {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= config.root %><%= config.css %>source',
        src: ['*.scss'],
        dest: '<%= config.root %><%= config.css %>',
        ext: '.css'
      }]
    }
	// dist: {
 //        options: {
 //            style: 'expanded',
 //        },
 //        files: {
 //            '<%= config.root %><%= config.css %>main.css': '<%= config.root %><%= config.css %>source/*.scss'
 //        }
 //    }
};
