export const state = () => ({
  todos: []
})
export const getters = {
  getTodos: state => [...state.todos].map(t => ({ ...t }))
}
export const actions = {
  setTodos({ commit }, todos) {
    commit('SET_TODOS', todos)
  },
  addTodo({ commit, state }, todo) {
    const todos = [...state.todos, { ...todo }]
    commit('SET_TODOS', todos)
  },
  updateTodo({ commit, state }, todo) {
    const todos = state.todos.map(
      t => (t.id === todo.id ? { ...todo } : { ...t })
    )
    commit('SET_TODOS', todos)
  }
}
export const mutations = {
  SET_TODOS: (state, todos) => {
    state.todos = todos
  }
}
