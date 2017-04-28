var gulp = require("gulp");
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
// var watch = require("gulp-watch");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;


var src = {
  scss: 'assets/**/*.scss',
  css: 'dist/*.css',
  html: '*.html'
};


gulp.task("compileCSS", function() {
  return gulp.src("assets/css/main.scss") //usually do "assets/**/*.css" not to look inside node folders
      .pipe(sass()) //translating scss into css
      .pipe(rename("min.style.css")) //renaming file to min, which will be linked to html
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest("dist")) //location to put the newly created file

  }); 

gulp.task("watch", function() {
  gulp.watch(src.scss, ["compileCSS"]);
  // gulp.watch(src.css).on('change', reload);
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: "./",
    files: "**/*",
    directory: true
  });
});

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         files: "**/*",
//         server: {
//             baseDir: "./"
//         }
//     });
// });   

/*gulp.task("watch", function() {
  gulp.watch("assets/css/*", ['compileCSS','']);
});*/

gulp.task("run", ["compileCSS", "watch", "browser-sync"]);

