export class BreadcrumbController {
  constructor () {
    'ngInject'
  }
  calcDone (stepId) {
    let stepDonePass = false
    let done = true
    this.navigation.forEach(step => {
      if (step.id === stepId && stepDonePass) {
        done = false
      } else if (step.active) {
        stepDonePass = true
      }
    })
    return done
  }
}
export default BreadcrumbController
