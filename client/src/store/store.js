import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    logState: false,
  },
  getters: {
    getLogState(state){
      return state.logState;
    },
    getUserEmail(state){
      if (state.user)
        return state.user.email
      else
        return null;
        
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.token = user.token;
      state.logState= true;
    },
    logOut(state){
      state.user = null;
      state.token=null;
      state.logState= false;
    },
  },
  actions: {
    logUserIn(context, payload){
      context.commit('setUser', payload.user);
    },
    logUserOut(context){
      context.commit('logOut')
    },
  },
  modules: {

  }
})