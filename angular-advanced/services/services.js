import angular from 'angular'
import AdvancedTodoListService from './todo-list.service'

angular
  .module('advanced-services', [])
  .service(AdvancedTodoListService.name, AdvancedTodoListService)
