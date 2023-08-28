import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:
    [
      { id:'1', text:'recolectar las piedras del infinito', completed: false },
      { id:'2', text:'piedra del alma', completed: true },
      { id:'3', text:'piedra depoder', completed: true },
      { id:'4', text:'piedra de realidad', completed: false },
      { id:'5', text:'Conseguir nuevos secuaces competentes', completed: false },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
