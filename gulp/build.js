'use strict'

let path = require('path')
let gulp = require('gulp')
let conf = require('./conf')

let $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
})

gulp.task('partials', () =>
// Simple copy des html
gulp.src([path.join(conf.paths.src, '/app/**/*.html')]).pipe($.copy(path.join(conf.paths.dist, '/'), {prefix: 1}))
// Si on prefere utiliser un gros fichier partial (attention au poids)
// On pourra se limiter à certaines templates (commons) ou incorporer
// le html des composants importants dans le component

// return gulp.src([
//   path.join(conf.paths.src, '/app/**/*.html'),
//   path.join(conf.paths.tmp, '/serve/app/**/*.html')
// ])
//   .pipe($.htmlmin({
//     removeEmptyAttributes: true,
//     removeAttributeQuotes: true,
//     collapseBooleanAttributes: true,
//     collapseWhitespace: true
//   }))
//   .pipe($.angularTemplatecache('templateCacheHtml.js', {
//     module: 'starter',
//     root: 'app'
//   }))
//   .pipe(gulp.dest(conf.paths.tmp + '/partials/'))
)

gulp.task('html', ['inject', 'partials'], () => {
  let partialsInjectFile = gulp.src(path.join(conf.paths.tmp, '/partials/templateCacheHtml.js'), { read: false })
  let partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: path.join(conf.paths.tmp, '/partials'),
    addRootSlash: false
  }

  let htmlFilter = $.filter('*.html', { restore: true })
  let jsFilter = $.filter('**/*.js', { restore: true })
  let cssFilter = $.filter('**/*.css', { restore: true })

  return gulp.src(path.join(conf.paths.tmp, '/serve/*.html'))
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe($.useref())
    .pipe(jsFilter)
    .pipe($.sourcemaps.init())
    .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', conf.errorHandler('Uglify'))
    .pipe($.rev())
    .pipe($.sourcemaps.write('maps'))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    // .pipe($.sourcemaps.init())
    .pipe($.cssnano())
    .pipe($.rev())
    // .pipe($.sourcemaps.write('maps'))
    .pipe(cssFilter.restore)
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.htmlmin({
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true
    }))
    .pipe(htmlFilter.restore)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }))
})

// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
gulp.task('fonts', () => gulp.src($.mainBowerFiles())
  .pipe($.filter('**/*.{eot,otf,svg,ttf,woff,woff2}'))
  .pipe($.flatten())
  .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')))
)

gulp.task('other', () => {
  let fileFilter = $.filter(file => file.stat.isFile())

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
})

gulp.task('clean', () => $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]))

gulp.task('build', ['html', 'fonts', 'other'])
