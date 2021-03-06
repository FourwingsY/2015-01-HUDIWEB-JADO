module.exports = function(grunt) {
// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: {
				src: ['webapps/css/jado_con.css', 'webapps/css/jado.css',
				'webapps/js/jado_lib_con.js', 'webapps/js/jado_lib.js',
				'webapps/js/jado_con.js', 'webapps/js/jado.js']
			}
		},
		//concat 설정
		concat:{
			basic_and_extras: {
				files: {
					'webapps/js/jado_lib_con.js': ['webapps/js/lib/*.js'],
					'webapps/js/jado_con.js': ['webapps/js/jadoJS/*.js'],
					'webapps/css/jado_con.css': ['webapps/css/lib/reset.css', 'webapps/css/lib/grid.css', 'webapps/css/jadoCSS/*.css']
					//concat 결과 파일: concat 타겟 설정(앞에서부터 순서대로 합쳐진다.)
				}
			}
		},
		//uglify 설정
		uglify: {
			options: {
			},
			my_target: {
				files: {
					'webapps/js/jado_lib.js': ['webapps/js/jado_lib_con.js'],
					'webapps/js/jado.js': ['webapps/js/jado_con.js']
				}
			}
		},
		//css uglify 설정
		cssmin: {
   			dist: {
   			    src: 'webapps/css/jado_con.css',
      			dest: 'webapps/css/jado.css'
		    }
		},
		watch: {
		  scripts: {
		    files: ['webapps/js/lib/*.js', 'webapps/js/jadoJS/*.js',
		    		'webapps/css/lib/*.css', 'webapps/css/jadoCSS/*.css'],
		    tasks: ['clean', 'concat', 'uglify', 'cssmin'],
		    options: {
		      spawn: false,
		    },
		  },
		}
	});

// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-yui-compressor');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
// Default task(s).
	grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']); //grunt 명령어로 실행할 작업
};
