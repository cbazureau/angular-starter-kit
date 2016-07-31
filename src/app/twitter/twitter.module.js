import { TwitterComponent } from './twitter.component'

import { twitterRoute } from './twitter.route'

let TwitterModule = angular.module('starter.twitter', [])

  .component('twitter', TwitterComponent)

  // Routes
  .config(twitterRoute)

export default TwitterModule
