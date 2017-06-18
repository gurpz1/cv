var gulp=require("gulp");
var plugins=require("gulp-load-plugins")();
var bowerFiles =require("main-bower-files");
var path = require("path");

var paths = {
    src: {
        dir: __dirname + "/src",
        js: __dirname + "/src/**/*.js",
        html: [__dirname + "/src/**/*.html", "!" + __dirname + "/src/index.html"],
        index: __dirname + "/src/index.html",
        styles: __dirname + "/src/styles/**/*.less",
        assets: [__dirname + "/src/assets/**/!(*.jpg|*.jpeg|*.png|*.gif)"],
        images: [__dirname + "/src/assets/**/*.{jpg,jpeg,png,gif}"]
    },
    dist: {
        dir: __dirname + "/dist",
        styles: __dirname + "/dist/styles",
        js: __dirname + "/dist/js",
        templates: __dirname + "/dist/js/app-templates.js",
        assets: __dirname + "/dist/assets",
        vendor: __dirname + "/dist/vendor"
    }
};

var shared = {

    angularFileSort: function(path) {
        return gulp.src(path).pipe(plugins.angularFilesort());
    },
    html2js: function() {
        return gulp.src(paths.src.html)
            .pipe(plugins.ngHtml2js({
                moduleName: "app-templates"
            }))
            .pipe(plugins.concat(path.basename(paths.dist.templates)));
    }
};

/**
 * Static server
 */
gulp.task("connect", function() {
  plugins.connect.server({
    root: ".",
    port: "3000",
    livereload: true
  });
});

/**
 * Lint JS
 */
gulp.task("lint-js", function() {
    return gulp.src([paths.src.js, __dirname + "./*.js"])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter("jshint-stylish"));
});

/**
 * Lint HTML
 */
gulp.task("lint-html", function() {
    return gulp.src(paths.src.html)
    .pipe(plugins.htmlhint())
    .pipe(plugins.htmlhint.reporter("htmlhint-stylish"));
});

/**
 * Compile less
 */
gulp.task("compile-less", function() {
    return gulp.src(paths.src.styles)
    .pipe(plugins.less())
    .pipe(gulp.dest(paths.dist.styles));
});

/**
 * Compile templates
 */
gulp.task("html2js-dev", function() {
    return shared.html2js()
    .pipe(gulp.dest(paths.dist.js));
});
gulp.task("html2js", function() {
    return shared.html2js()
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.dist.js));
});

/**
 * Copy assets
 */
gulp.task("copy-assets-dev", function() {
    return gulp.src(paths.src.assets.concat(paths.src.images))
        .pipe(gulp.dest(paths.dist.assets));
});
gulp.task("copy-assets", function() {
    return gulp.src(paths.src.assets)
        .pipe(gulp.dest(paths.dist.assets));
});

/**
 * Compress images
 */
gulp.task("imagemin", function() {
    return gulp.src(paths.src.images)
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(paths.dist.assets));
});

/**
 * Inject for development                                                                                        [description]
 */
gulp.task("inject-dev",["html2js-dev"] ,function() {

    return gulp.src(paths.src.index)
    .pipe(gulp.dest(paths.dist.dir))
    // Inject bower
    .pipe(
        plugins.inject(gulp.src(bowerFiles(), {read:false}), {name: "vendor", relative:true})
    )
    // Inject styles
    .pipe(
        plugins.inject(gulp.src(paths.dist.styles + "/**/*.css", {read:false}), {name: "app", relative:true})
    )
    // Inject sorted app files
    .pipe(
        plugins.inject(shared.angularFileSort([paths.src.js, paths.dist.templates]),
            {name: "app", relative:true})
    )
    .pipe(gulp.dest(paths.dist.dir))
    .pipe(plugins.connect.reload());
});

/**
 * Inject for development                                                                                        [description]
 */
gulp.task("inject-prod",["html2js", "minify", "compile-less", "copy-bower-files",] ,function() {

    return gulp.src(paths.src.index)
    .pipe(gulp.dest(paths.dist.dir))
    //inject bower
    .pipe(
        plugins.inject(shared.angularFileSort([paths.dist.vendor + "/**/*.js"]), 
            {name: "vendor", relative: true})
    )
    .pipe(
        plugins.inject(gulp.src([paths.dist.vendor + "/**/*.css"], {read: false}), 
            {name: "vendor", relative: true})
    )
    // Inject styles
    .pipe(
        plugins.inject(gulp.src(paths.dist.styles + "/**/*.css", {read:false}), {name: "app", relative:true})
    )
    // Inject sorted app files
    .pipe(
        plugins.inject(shared.angularFileSort([paths.dist.js + "/**/*.js"]),
            {name: "app", relative:true})
    )
    .pipe(gulp.dest(paths.dist.dir));
});


/**
 * Watch task
 */
gulp.task("watch", function() {
    gulp.watch(paths.src.js, ["lint-js", "inject-dev"]);
    gulp.watch(paths.src.styles, ["compile-less", "inject-dev"]);
    gulp.watch(paths.src.html, ["lint-html", "html2js-dev", "inject-dev"]);
    gulp.watch(paths.src.index, ["inject-dev"]);
    gulp.watch(paths.src.assets, ["copy-assets-dev"]);
});


/**
 * Prep bower files
 */

gulp.task("copy-bower-files", function () {
    return gulp.src(bowerFiles())
    .pipe(gulp.dest(paths.dist.vendor));
});

/**
 * Prep angular files
 */
gulp.task("minify", function () {
    return shared.angularFileSort(paths.src.js)
        .pipe(plugins.concat("app.js"))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(paths.dist.js));
});

gulp.task("build-prod",[
        "lint-js",
        "lint-html",
        "copy-assets",
        "imagemin",
        "inject-prod"
    ]
);
gulp.task("deploy", ["build-prod"], function () {
    return gulp.src(paths.dist.dir + "/**/*")
        .pipe(plugins.ghPages());
});

/** DEV BUILD **/
gulp.task("build-dev", [
        "lint-js",
        "lint-html",
        "copy-assets-dev",
        "compile-less",
        "inject-dev"
    ]
);

gulp.task("default",["build-dev", "connect", "watch"]);