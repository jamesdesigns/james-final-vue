import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);


/*
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});
*/

// ADD NEW STATE MANAGEMENT
export default new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      passwords: ''
    }
  },
  getters: {
    userName(state){
      return state.user.name
    },
  },
  mutations: {
    storeUser(state, user){
      state.user = user
    }
  },
  actions: {
    userLoggedIn({commit}, user){
      commit('storeUser', user)
      router.replace('/')
    }
  }
});