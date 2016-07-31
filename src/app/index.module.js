/* global moment:false */

import './polyfill/polyfill.loader';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// Modules
import './commons/commons.module';
import './subscription/subscription.module';

// Routes

angular.module('starter',
  [
    'ui.router',
    'starter.subscription',
    'starter.commons'
  ])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock);
