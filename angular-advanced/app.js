import 'jquery'
import angular from 'angular'
import 'angular-resource'
import 'angular-ui-router'
import 'angular-sanitize'

import '@/angular-advanced/directives/directives'
import '@/angular-advanced/services/services'
import '@/angular-advanced/components/todos/todos.component'

import mainRoutes from '@/angular-advanced/components/main/main.routes'

// Legacy-to-Vue: Wrap angular module creation in function
export default dockElement => {
  angular
    .module('advanced-angularjs-todo-list-components', [
      'ngResource',
      'ui.router',
      'advanced-services',
      'directives',
      'ngSanitize',
      'advanced-todos'
    ])
    .config(mainRoutes)

  const uiView = document.createElement('ui-view')
  dockElement.append(uiView)
  angular.bootstrap(dockElement, ['advanced-angularjs-todo-list-components'])
}
