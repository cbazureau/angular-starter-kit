/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict'

let gulp = require('gulp')
let wrench = require('wrench')
let chalk = require('chalk')

console.log(chalk.green('---------------------------------------'))
console.log(chalk.green('  ____  _             _                '))
console.log(chalk.green(' / ___|| |_ __ _ _ __| |_ ___ _ __     '))
console.log(chalk.green(" \\___ \\| __/ _` | '__| __/ _ \\ '__| "))
console.log(chalk.green('  ___) | || (_| | |  | ||  __/ |       '))
console.log(chalk.green(' |____/ \\__\\__,_|_|   \\__\\___|_|   '))
console.log(chalk.green('                                       '))
console.log(chalk.green('---------------------------------------'))

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp')
  .filter(file => (/\.(js|coffee)$/i).test(file))
  .map(file => {
    require('./gulp/' + file);})

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], () => {
  gulp.start('build')
})
