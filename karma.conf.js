'use strict'

let path = require('path')
let conf = require('./gulp/conf')

let _ = require('lodash')
let wiredep = require('wiredep')

let pathSrcHtml = [
  path.join(conf.paths.src, '/**/*.html')
]

function listFiles () {
  let wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  })

  let patterns = wiredep(wiredepOptions).js
    .concat([
      path.join(conf.paths.tmp, '/serve/app/index.module.js')
    ])
    .concat(pathSrcHtml)

  let files = patterns.map(pattern => ({pattern: pattern}))

  files.push({
    pattern: path.join(conf.paths.src, '/assets/**/*'),
    included: false,
    served: true,
    watched: false
  })
  files.push({
    pattern: 'bower_components/lodash-custom/*',
    included: true
  })
  return files
}

module.exports = function (config) {
  let configuration = {
    files: listFiles(),

    singleRun: true,

    autoWatch: false,

    ngHtml2JsPreprocessor: {
      stripPrefix: conf.paths.src + '/',
      moduleName: 'starter'
    },

    logLevel: 'WARN',

    frameworks: ['phantomjs-shim', 'jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-phantomjs-shim',
      'karma-coverage',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-mocha-reporter'
    ],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    reporters: ['mocha'],

    proxies: {
      '/assets/': path.join('/base/', conf.paths.src, '/assets/')
    }
  }

  // This is the default preprocessors configuration for a usage with Karma cli
  // The coverage preprocessor is added in gulp/unit-test.js only for single tests
  // It was not possible to do it there because karma doesn't let us now if we are
  // running a single test or not
  configuration.preprocessors = {}
  pathSrcHtml.forEach(path => {
    configuration.preprocessors[path] = ['ng-html2js']
  })

  // This block is needed to execute Chrome on Travis
  // If you ever plan to use Chrome and Travis, you can keep it
  // If not, you can safely remove it
  // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
  if (configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
    configuration.browsers = ['chrome-travis-ci']
  }

  config.set(configuration)
}
