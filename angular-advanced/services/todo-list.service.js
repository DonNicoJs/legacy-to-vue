export default class AdvancedTodoListService {
  /* @ngInject */
  constructor($log, $q) {
    this._console = $log
    // used to simulate http promise
    this._q = $q
  }

  store(todo) {
    this._console.log('Storing' + JSON.stringify(todo))
    window.$nuxt.$store.dispatch('todos/addTodo', todo)
    return this._q.resolve(todo)
  }

  getAll() {
    const todos = window.$nuxt.$store.getters['todos/getTodos']
    return this._q.resolve(todos)
  }

  update(todo) {
    this._console.log('Update ' + todo.id)
    window.$nuxt.$store.dispatch('todos/updateTodo', todo)
    return this._q.resolve(todo)
  }
}
