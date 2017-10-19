import firebase from 'firebase'
import config from './config'
require("firebase/firestore");

firebase.initializeApp(config)
var auth = firebase.auth()

export default {
  initFirebase(){
    // Initiates Firebase auth and listen to auth state changes.
    auth.onAuthStateChanged(function user(){
      global._App
    })
  },
  signInAnonymously() {
    var res = auth.signInAnonymously()
    console.log(res);
  },
  signOut(){
    var res = auth.signOut()
    console.log(res);
  }

}
