var requireConfig = require('./requireConfig.js');

module.exports = function(grunt) {


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			article: {
				options: {
					baseUrl: requireConfig.baseUrl,
					removeCombined: requireConfig.removeCombined,
					include: ['app/article/main.js'],
					exclude: ['libs/public/bootstrap.js', 'libs/public/jquery-1.11.3.js', 'libs/public/react.js'],
					paths: requireConfig.paths,
					shim: requireConfig.shim,
					out: 'public/release/scripts/article.min.js'
				}	
			},
			detail: {
				options: {
					baseUrl: requireConfig.baseUrl,
					removeCombined: requireConfig.removeCombined,
					include: ['app/article/detail.js'],
					exclude: ['libs/public/bootstrap.js', 'libs/public/jquery-1.11.3.js', 'libs/public/react.js'],
					paths: requireConfig.paths,
					shim: requireConfig.shim,
					out: 'public/release/scripts/detail.min.js'
				}
			},
			home: {
				options: {
					baseUrl: requireConfig.baseUrl,
					removeCombined: requireConfig.removeCombined,
					include: ['app/home/main.js'],
					exclude: ['libs/public/bootstrap.js', 'libs/public/jquery-1.11.3.js', 'libs/public/react.js'],
					paths: requireConfig.paths,
					shim: requireConfig.shim,
					out: 'public/release/scripts/home.min.js'
				}
			},
			note: {
				options: {
					baseUrl: requireConfig.baseUrl,
					removeCombined: requireConfig.removeCombined,
					include: ['app/note/main.js'],
					exclude: ['libs/public/bootstrap.js', 'libs/public/jquery-1.11.3.js', 'libs/public/react.js'],
					paths: requireConfig.paths,
					shim: requireConfig.shim,
					out: 'public/release/scripts/note.min.js'
				}
			},
			photo: {
				options: {
					baseUrl: requireConfig.baseUrl,
					removeCombined: requireConfig.removeCombined,
					include: ['app/photo/main.js'],
					exclude: ['libs/public/bootstrap.js', 'libs/public/jquery-1.11.3.js', 'libs/public/react.js'],
					paths: requireConfig.paths,
					shim: requireConfig.shim,
					out: 'public/release/scripts/photo.min.js'
				}
			},
		},

		cssmin: {
			options: {
    			shorthandCompacting: false,
    			roundingPrecision: -1
  			},
			article: {
				files: {
					'./public/release/styles/article.min.css': ['./public/styles/article.css', './public/styles/site.css']
				}
			},
			detail: {
				files: {
					'./public/release/styles/detail.min.css': ['./public/styles/detail.css', './public/styles/site.css']
				}
			},
			home: {
				files: {
					'./public/release/styles/home.min.css': ['./public/styles/home.css', './public/styles/site.css']
				}
			},
			note: {
				files: {
					'./public/release/styles/note.min.css': ['./public/styles/note.css', './public/styles/site.css']
				}
			},
			photo: {
				files: {
					'./public/release/styles/photo.min.css': ['./public/styles/photo.css', './public/styles/site.css']
				}
			}
		},
		// concat: { //合并文件
		// 	article: {
		// 		src: ['public/scripts/libs/public/react.js','public/scripts/component/private/jquery_layer.js', 'public/scripts/app/article/main.js'],
		// 		dest: 'public/concat/scripts/article.js'
		// 	}
		// },
		// uglify: {
  //     		options: {
  //       		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n'
  //     		},
  //     		article: {
	 //        	src: 'public/scripts/app/article/main.js',
	 //        	dest: 'public/release/scripts/article.min.js'
  //     		},
  //     		home: {
  //     			src: 'public/scripts/app/home/main.js',
	 //        	dest: 'public/release/scripts/home.min.js'
  //     		}
  //   	},*/

    	// jshint: {
    	// 	build: ['Gruntfile.js', 'public/scripts/app/**/*.js'],
    	// 	options: {
    	// 		jshintrc: '.jshintrc'
    	// 	}
    	// },

    	watch: {
    		scripts: {
    			files: 'public/scripts/app/**/*.js',
    			tasks: ['jshint']
    		}
    	}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	/*grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');*/
	/*grunt.loadNpmTasks('grunt-contrib-jshint');*/
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['requirejs', 'cssmin','watch']);
};