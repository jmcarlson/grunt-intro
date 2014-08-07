// Export grunt file for use in terminal
module.exports = function(grunt) {

	// Init the config
	grunt.initConfig({
		//setup the uglify tasks
		uglify: {
			// define the 'dev' subtask
			dev: {
				// specify files using
				// files-object format
				files: {
					// target(minified), source files(array)
					'main.min.js': ['main.js', 'main2.js']
				}
			}
		}, // uglify

		// setup css min tasks
		cssmin: {
			dev: {
				files: [{
					expand: true,
					// source directory
					cwd: './',
					src: ['*.css'],
					// target directory
					dest: './',
					// specify extension
					ext: '.min.css'
				}]
			},
			options: {
				sourceMap: true
			}
		}, // cssmin

		// automagically watch for file updates and run tasks
		watch: {
			scripts: {
				files: ['main.js', 'main2.js'],
				tasks: ['uglify:dev']
			}
		}
	});

	grunt.registerTask (
		'dev', ['uglify', 'cssmin', 'watch']
	);

	grunt.loadNpmTasks(
		'grunt-contrib-uglify'
	);

	grunt.loadNpmTasks(
		'grunt-contrib-cssmin'
	);

	grunt.loadNpmTasks(
		'grunt-contrib-watch'
	);

}