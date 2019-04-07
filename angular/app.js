import 'jquery'
import angular from 'angular'
import 'angular-resource'
import 'angular-ui-router'
import 'angular-sanitize'

import '@/angular/directives/directives'
import '@/angular/services/services'
import '@/angular/components/todos/todos.component'

import mainRoutes from '@/angular/components/main/main.routes'

// Legacy-to-Vue: Wrap angular module creation in function
export default dockElement => {
  angular
    .module('angularjs-todo-list-components', [
      'ngResource',
      'ui.router',
      'services',
      'directives',
      'ngSanitize',
      'todos'
    ])
    .config(mainRoutes)
  const uiView = document.createElement('ui-view')
  dockElement.append(uiView)
  angular.bootstrap(dockElement, ['angularjs-todo-list-components'])
}
