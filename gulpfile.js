var gulp = require("gulp");
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");
var sass = require("gulp-sass");
var rename = require("gulp-rename");

gulp.task("compileCSS", function() {
  return gulp.src("assets/css/main.scss") //usually do "assets/**/*.css" not to look inside node folders
  .pipe(sass()) //translating scss into css
  .pipe(rename("min.style.css")) //renaming file to min, which will be linked to html
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest("./dist")) //location to put the newly created file

});