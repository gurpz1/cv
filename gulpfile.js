var gulp=require('gulp');
var plugins=require('gulp-load-plugins')();
var bowerFiles =require('main-bower-files');
var path = require('path');

var paths = {
	src: {
		dir: __dirname + '/src',
		js: __dirname + '/src/**/*.js',
		html: [__dirname + '/src/**/*.html', '!' + __dirname + '/src/index.html'],
		index: __dirname + '/src/index.html',
		vendor : [],
		styles: __dirname + '/src/**/*.less',
		assets: __dirname + '/src/assets/**/*',
	},
	dist: {
		dir: __dirname + '/dist',
		styles: __dirname + '/dist/styles',
		js: __dirname + '/dist/js',
		templates: __dirname + '/dist/js/app-templates.js',
		assets: __dirname + '/dist/assets/'
	}
};

var shared = {
	injectBower: function () {
		var files = gulp.src(bowerFiles(), {read:false});
		var options = {name:'bower', relative:true};
	
		return plugins.inject(files, options);
	},

	angularFileSort: function(path) {
		return gulp.src(path).pipe(plugins.angularFilesort());
	}
};

/**
 * Static server
 */
gulp.task('connect', function() {
  plugins.connect.server({
    root: '.',
    port: '3000',
    livereload: true
  });
});

/**
 * Lint JS
 */
gulp.task('lint-js', function() {
	return gulp.src([paths.src.js, __dirname + './*.js'])
	.pipe(plugins.jshint())
	.pipe(plugins.jshint.reporter('jshint-stylish'));
});

/**
 * Lint HTML
 */
gulp.task('lint-html', function() {
	return gulp.src(paths.src.html)
	.pipe(plugins.htmlhint())
	.pipe(plugins.htmlhint.reporter("htmlhint-stylish"));
});

/**
 * Compile less
 */
gulp.task('compile-less', function() {
	return gulp.src(paths.src.styles)
	.pipe(plugins.less())
	.pipe(gulp.dest(paths.dist.styles));
});

/**
 * Compile templates
 */
gulp.task('html2js-dev', function() {
	return gulp.src(paths.src.html)
	.pipe(plugins.ngHtml2js({
		moduleName: "templates"
	}))
	.pipe(plugins.concat(path.basename(paths.dist.templates)))
	.pipe(gulp.dest(paths.dist.js));
});

/**
 * Copy assets
 */
gulp.task("copy-assets", function() {
	return gulp.src(paths.src.assets)
		.pipe(gulp.dest(paths.dist.assets));
});

/**
 * Inject for development                                                                                        [description]
 */
gulp.task('inject-dev',['html2js-dev'] ,function() {

	return gulp.src(paths.src.index)
	.pipe(gulp.dest(paths.dist.dir))
	// Inject bower
	.pipe(shared.injectBower())
	// Inject styles
	.pipe(
		plugins.inject(gulp.src(paths.dist.styles + '/**/*.css', {read:false}), {name: 'app', relative:true})
	)
	// Inject sorted app files
	.pipe(
		plugins.inject(shared.angularFileSort([paths.src.js, paths.dist.templates]),
			{name: 'app', relative:true})
	)
	.pipe(gulp.dest(paths.dist.dir))
	.pipe(plugins.connect.reload());
});

/**
 * Watch task
 */
gulp.task('watch', function() {
	gulp.watch(paths.src.js, ['lint-js', 'inject-dev']);
	gulp.watch(paths.src.styles, ['compile-less', 'inject-dev']);
	gulp.watch(paths.src.html, ['lint-html', 'html2js-dev', 'inject-dev']);
	gulp.watch(paths.src.index, ['inject-dev']);
	gulp.watch(paths.src.assets, ['copy-assets']);
});

/** DEV BUILD **/
gulp.task('build-dev', ['lint-js', 'lint-html','copy-assets', 'html2js-dev', 'compile-less', 'inject-dev']);

gulp.task('default',['build-dev', 'connect', 'watch']);


