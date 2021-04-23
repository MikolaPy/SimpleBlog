import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store( {
  state: {
	  backendUrl: "https://reqres.in/api"
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getServerUrl: state => {
      return state.backendUrl
    }	
  }
})


export default store
