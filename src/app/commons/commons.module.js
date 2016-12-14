// Constants
import { ErrorConstants } from './constants/error.constants'
import { ConfigConstants } from './constants/config.constants'

// Commons Pages
import { DemoComponent } from './pages/demo/demo.component'
import { ErrorComponent } from './pages/error/error.component'

// Commons Components
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'
import { CreditCardComponent } from './components/credit-card/credit-card.component'
import { HeaderLightComponent } from './components/header-light/header-light.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { OffersComponent } from './components/offers/offers.component'
import { LoadingComponent } from './components/loading/loading.component'

// Commons Services
import { ErrorService } from './services/error/error.service'

// Routes
import { commonsRoute } from './commons.route'

let CommonsModule = angular.module('starter.commons', [])

  // Constantes
  .constant('ERROR', ErrorConstants)
  .constant('CONFIG', ConfigConstants)

  // Services communs
  .service('ErrorService', ErrorService)

  // Pages communes
  .component('demo', DemoComponent)
  .component('error', ErrorComponent)

  // Components communs
  .component('headerLight', HeaderLightComponent)
  .component('navbar', NavbarComponent)
  .component('breadcrumb', BreadcrumbComponent)
  .component('creditCard', CreditCardComponent)
  .component('offers', OffersComponent)
  .component('loading', LoadingComponent)
  .value('EventEmitter', payload => ({ $event: payload }))

  // Routes
  .config(commonsRoute)

export default CommonsModule
