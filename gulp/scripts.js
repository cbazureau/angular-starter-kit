'use strict'

let path = require('path')
let gulp = require('gulp')
let conf = require('./conf')

let browserSync = require('browser-sync')
let webpack = require('webpack-stream')

let $ = require('gulp-load-plugins')()

function webpackWrapper (watch, test, callback) {
  let webpackOptions = {
    watch: watch,
    module: {
      preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}],
      loaders: [{ test: /\.js$/, exclude: /node_modules/, loaders: ['ng-annotate', 'babel-loader?presets[]=es2015']}]
    },
    output: { filename: 'index.module.js' }
  }

  if (watch) {
    webpackOptions.devtool = 'inline-source-map'
  }

  let webpackChangeHandler = function (err, stats) {
    if (err) {
      conf.errorHandler('Webpack')(err)
    }
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }))
    browserSync.reload()
    if (watch) {
      watch = false
      callback()
    }
  }

  let sources = [path.join(conf.paths.src, '/app/index.module.js')]
  if (test) {
    sources.push(path.join(conf.paths.src, '/app/**/*.spec.js'))
  }

  return gulp.src(sources)
    .pipe(webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')))
}

gulp.task('scripts', () => webpackWrapper(false, false))
gulp.task('scripts:watch', ['scripts'], callback => webpackWrapper(true, false, callback))
gulp.task('scripts:test', () => webpackWrapper(false, true))
gulp.task('scripts:test-watch', ['scripts'], callback => webpackWrapper(true, true, callback))
