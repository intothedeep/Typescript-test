'use strict';

import gulp from 'gulp';
// import typescript from 'gulp-typescript';
const ts = require('gulp-typescript');
import concat from 'gulp-concat';
import livereload from 'gulp-livereload';
import webserver from 'gulp-webserver';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
const htmlmin = require('gulp-htmlmin');

const src = "src";
const dist = "dist/src";
const index = dist + "/index.html";

const paths = {
  html: src +"/**/*.html",
  ts: src + "/ts/*.ts"
};

gulp.task("ts", () => {
  return gulp.src(paths.ts)
    .pipe(ts({
         noImplicitAny: true,
     }))
     // .pipe(uglify())
    .pipe(gulp.dest(dist + "/js"));
});

gulp.task("html", () => {
  return gulp.src(paths.html)
  // .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(rename({
    basename: "index",
    extname: ".html"
  }))
  .pipe(gulp.dest(dist + "/"));
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch(paths.ts, ['ts']);
	gulp.watch(paths.html, ['html']);
	gulp.watch(dist + '/**').on('change', livereload.changed);
});

// running webserver
gulp.task('server', function () {
  return gulp.src(dist + '/')
  .pipe(webserver({
    host: "localhost",
    port: 80,
    livereload: true,
    fallback: index,
    open: ""
  }));
});

gulp.task("default", [
  "watch",
  "ts",
  "html",
  "server"
]);
