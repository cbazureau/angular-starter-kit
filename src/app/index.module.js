/* global moment:false */

import './polyfill/polyfill.loader';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// Modules
import './commons/commons.module';
import './subscription/subscription.module';
import './twitter/twitter.module';

// Routes

angular.module('starter',
  [
    'ngtweet',
    'ui.router',
    'starter.twitter',
    'starter.subscription',
    'starter.commons'
  ])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock);
