import Vuex from 'vuex'
import Vue from 'vue'
import Firebase from './../api/firebase/index'
Vue.use(Vuex)

// const state = {}
// const actions = {}
const getters = {}
const mutations = {}

const state = {
  recipes: {}
}

const actions = {
  signInAnonymously(){
    Firebase.signInAnonymously()
  },
  signOut(){
    Firebase.signOut()
  },
  // getRecipes(){
  //   Firebase.getRecipes()
  // }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
