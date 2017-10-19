import firebase from 'firebase'
import FirebaseConfig from './FirebaseConfig'



export default class FirebaseCustom {
}

export function getDatabase() {
  console.log(firebase.firestore());
}

export function getRecipes(){
}
// Object.definePrototype(Vue.prototype, $firebase,  { value: firebase })
