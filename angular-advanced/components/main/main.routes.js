import template from '@/angular-advanced/components/main/main.html'
import '@/angular-advanced/components/main/main.scss'
import controller from '@/angular-advanced/components/main/main-controller'

export default /* @ngInject */ function(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('advanced', {
    url: '/angular-advanced-page',
    views: {
      '@': {
        template,
        controller,
        controllerAs: 'mainCtrl'
      }
    }
  })
  $locationProvider.html5Mode(true)
}
