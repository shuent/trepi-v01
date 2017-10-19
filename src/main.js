// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// use spectre, css framework
import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-exp.css'
import 'spectre.css/dist/spectre-icons.css'

// semantic ui vue
import 'semantic-ui-css/semantic.min.css';
import SuiVue from 'semantic-ui-vue';
Vue.use(SuiVue)

// firebase/ に移し替える
// import fbconfig from '@/lib/firebase/config'
import Firebase from './api/firebase'
// require("firebase/firestore");

Firebase.initFirebase()

// Vue.prototype.$firebase = firebase.initializeApp(fbconfig)

// vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import store from './vuex/store'

// vuex-router
import { sync } from 'vuex-router-sync'


Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
global._App = app
