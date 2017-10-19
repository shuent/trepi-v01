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


Vue.config.productionTip = false

// firebase
import * as FirebaseCustom from '@/lib/firebase/FirebaseCustom'
import FirebaseConfig from '@/lib/firebase/FirebaseConfig'
import firebase from 'firebase'
require("firebase/firestore");

Vue.prototype.$firebase = firebase.initializeApp(FirebaseConfig)

let app
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
})
