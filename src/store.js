import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

// ADD NEW STATE MANAGEMENT
export default new Vuex.Store({
  state: {
    user: {
      username: 'Online Player',
      email: '',
      password: '',
      select: '',
      number: ''
    }
  },
  getters: {
    userName(state){
      return state.user.username
    },
    level(state){
      return state.user.select
    },
    playersNeeded(state){
      return state.user.number
    }
  },
  mutations: {
    storeUser(state, user){
      state.user = user
    }
  },
  actions: {
    userLoggedIn({commit}, user) {
      commit('storeUser', user)
       router.replace('/')
      }
    }
  });