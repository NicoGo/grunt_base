module.exports = function(grunt)
{

	grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  concat: {
	    options: {
	      stripBanners: true,
	      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
	        '<%= grunt.template.today("yyyy-mm-dd") %> */',
	    },
	    dist: {
	      src: ['js/*.js'],
	      dest: 'dist/built.js',
	    },
	  },
	  // On peux faire un watch pour le js / un pour le css etc
	  watch: {
	  	dist: {
	  		files: ['js/*.js'],
	  		tasks: ['default'],
	  		options: { livereload: true, spawn: false }
	  	}
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['concat']);
	grunt.loadNpmTasks('grunt-contrib-watch');
}