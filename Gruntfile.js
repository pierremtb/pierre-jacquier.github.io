var path = require('path');

module.exports = function (grunt) {
  var project = {
    src: 'src',
    dist: 'dist',
    locales: 'locales',
    assets: 'assets',
  }

  grunt.initConfig({
    i18n: {
      dist: {
        options: {
          baseDir: project.src,
          outputDir: project.dist,
        }
      },
      options: {
        fileFormat: 'json',
        exclude: [],
        locales: ['en', 'fr'],
        locale: 'en',
        localesPath: path.join(project.src, project.locales),
      },
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [path.join(project.src, project.assets, '*')],
            dest: path.join(project.dist, project.assets),
            filter: 'isFile',
          },
        ],
      },
    },
    clean: [project.dist],
    watch: {
			options: { livereload:true },
			files: [path.join(project.src, '**')],
			tasks: ['i18n', 'copy'],
		},
  		express:{
  			all:{
  				options:{
  					port: 3000,
  					hostname: 'localhost',
  					bases: [project.dist],
  					livereload: true	
  				}
  			}
  		}
  });

  grunt.loadNpmTasks('grunt-i18n-static');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');
  

  grunt.registerTask('default', ['clean', 'i18n', 'copy']);
  grunt.registerTask('build-serve', ['clean', 'i18n', 'copy']);
  grunt.registerTask('server',['express','watch']);
};