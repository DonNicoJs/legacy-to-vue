import template from '@/angular/components/main/main.html'
import '@/angular/components/main/main.scss'
import controller from '@/angular/components/main/main-controller'

export default /* @ngInject */ function(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('main', {
    url: '/angular-page',
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
