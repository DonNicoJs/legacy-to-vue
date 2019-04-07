import angular from 'angular'
import { AdvancedTodoFormComponent } from '../todo-form/todo-form.component'
import { AdvancedTodoListComponent } from '../todo-list/todo-list.component'

const AdvancedTodosComponent = {
  selector: 'advancedTodos',
  template: `
        <div class="row">
    		<h1 class="text-center">{{$ctrl.title}}</h1>
            <advanced-todo-form on-new-element="$ctrl.addNewElement($event)"></advanced-todo-form>
            <hr/>
    		<advanced-todo-list todos="$ctrl.todoList" on-done="$ctrl.markDone($event)" on-undone="$ctrl.markUndone($event)"></advanced-todo-list>
    	</div>
    `,
  controller: class TodosController {
    /* @ngInject */
    constructor($log, AdvancedTodoListService) {
      this._console = $log
      this.title = 'TodoApp'
      this._service = AdvancedTodoListService
    }

    $onInit() {
      this._console.log('Advanced Todos initialized')
      this._service.getAll().then(todos => (this.todoList = todos))

      // Legacy-to-Vue: Store watcher
      this._unsubscribe = window.$nuxt.$store.watch(
        (state, getters) => getters['todos/getTodos'],
        () => {
          this._service.getAll().then(todos => (this.todoList = todos))
        }
      )
    }
    $onDestroy() {
      // Legacy-to-Vue: Cleanup
      if (this._unsubscribe) {
        this._unsubscribe()
      }
    }

    addNewElement(todoLabel) {
      const todo = {
        id: this.todoList.length + 1,
        text: todoLabel,
        done: false
      }
      this._console.log(todo)
      this._service
        .store(todo)
        .then(t => {
          this.todoList.push(t)
        })
        .catch(alert)
    }

    markDone(todo) {
      todo.done = true
      this._service.update(todo)
    }

    markUndone(todo) {
      todo.done = false
      this._service.update(todo)
    }
  }
}

angular
  .module('advanced-todos', [])
  .component(AdvancedTodoFormComponent.selector, AdvancedTodoFormComponent)
  .component(AdvancedTodoListComponent.selector, AdvancedTodoListComponent)
  .component(AdvancedTodosComponent.selector, AdvancedTodosComponent)
