module.exports = function(grunt) {

	//grunt.loadNpmTasks('grunt-contrib-cssmin');
	//grunt.loadNpmTasks('css-sprite');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		uglify: {
			development: {
				options: {
					mangle: true,
					sourceMap: true,
					sourceMapName: 'docs/assets/js/sourcemap.map'
				},
				files: {
					"docs/assets/js/app.min.js": [
						'docs/assets/vendors/toastr/toastr.js',
						'docs/assets/vendors/fullpage.js/jquery.fullPage.js',
						'docs/assets/vendors/typed.js/lib/typed.js',
						'docs/assets/vendors/hashgrid/hashgrid.js',
						'docs/assets/js/app.config.js',
						'docs/assets/js/app.form.js',
						'docs/assets/js/app.development.js',
						'docs/assets/js/app.init.js'
					]
				}
			},
			production: {
				options: {
					mangle: true,
					sourceMap: true,
					sourceMapName: 'docs/assets/js/sourcemap.map'
				},
				files: {
					"docs/assets/js/app.min.js": [
						'docs/assets/vendors/toastr/toastr.js',
						'docs/assets/vendors/fullpage.js/jquery.fullPage.js',
						'docs/assets/vendors/typed.js/lib/typed.js',
						'docs/assets/js/app.config.js',
						'docs/assets/js/app.form.js',
						'docs/assets/js/app.init.js'
					]
				}
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			scripts: {
				src: [
                    'docs/assets/vendors/toastr/toastr.js',
                    'docs/assets/vendors/fullpage.js/jquery.fullPage.js',
                    'docs/assets/js/app.config.js',
                    'docs/assets/js/app.form.js',
                    'docs/assets/js/app.init.js'
				],
				dest: 'www/js/app.js'
			}
			/*doImport: {
				options: {
					process: function(src, filepath) {
						return "@import url(https://fonts.googleapis.com/css?family=Nothing+You+Could+Do|Open+Sans|Abel|Roboto+Mono);"+src.replace('@import url(https://fonts.googleapis.com/css?family=Stalemate|Open+Sans|Abel|Roboto+Mono);', '');
					}
				},
				files: {
					'assets/css/main.full.min.css': ['assets/css/main.min.css']
				}
			}*/
		},
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         							// Dictionary of files
                    'docs/assets/css/main.css': 'docs/assets/sass/main.scss'  // 'destination': 'source'
                }
            }
		},
		less: {
			development: {
				options: {
					paths: ['docs/assets/css']
				},
				files: {
					'docs/assets/css/material-cards.css': 'docs/assets/less/_material-cards.less'
				}
			}
		},
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
		css_sprite: {
			options: {
				'cssPath': '../images/cards/',
				'processor': 'css',
				'orientation': 'binary-tree',
				'margin': 5,
				'prefix': 'spr'
			},
			sprite: {
				options: {
					'style': 'assets/less/UI/__sprite_cards.less'
				},
				src: ['assets/images/cards/*'],
				dest: 'assets/images/cards/sprite'
			},
			base64: {
				options: {
					'base64': true
				},
				src: ['assets/images/cards/*'],
				dest: 'assets/css/base64.css'
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'assets/css/main.min.css': [
						'assets/css/animate.min.css',
						'assets/css/animation.css',
						'assets/css/main.css'
					]
				}
			}
		},
		watch: {
            sass: {
                files: ['docs/assets/sass/*.scss', 'docs/assets/vendors/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: {
                        host: 'localhost',
                        port: 35729
                        // you can pass in any other options you'd like to the https server, as listed here: http://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener
                    }
                }
            },
			scripts: {
				files: [
					'docs/assets/js/app.config.js',
					'docs/assets/js/app.form.js',
					'docs/assets/js/app.development.js',
					'docs/assets/js/app.init.js'
				],
				tasks: ['uglify:development']
			}
		}
	});

	grunt.registerTask('default', ['watch:sass']);
};