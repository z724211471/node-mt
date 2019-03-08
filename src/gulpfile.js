var gulp = require('gulp');
var ts = require("gulp-typescript");
// 调用 .create() 意味着你得到一个唯一的实例并允许您创建多个服务器或代理。
var browserSync = require('browser-sync').create();
// 这里reload不加括号，只引用不调用
// var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
const babel = require('gulp-babel');
const watch = require('gulp-watch');


gulp.task('watch', () => {
    return gulp.src('./public/js/*.js')
      .pipe(watch('./public/js/*.js', {
        verbose: true
      }))
      .pipe(babel({ "presets": ["es2015"]}))
      .pipe(gulp.dest('lib'));
  });