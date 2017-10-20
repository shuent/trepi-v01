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
  },


  getRecipes () {
    return new Promise((resolve, reject) => {
      var recipes = []
      var recipeTitleImgRef = firebase.storage().ref().child('img/recipeTitleImg')
      var recipeRef = firebase.firestore().collection('recipes').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data().title}`);
            var recipe = {};
            recipe.id = doc.id;
            recipe.title = doc.data().title
            recipeTitleImgRef.child(doc.data().imgname).getDownloadURL()
              .then(function(url){
                recipe.titleImgScr = url
                console.log(recipe.titleImgScr);
              }).then(function(){
                recipes.push(recipe)
              })
            })
          }).then(function(){
            resolve(recipes)
          }).catch((error) =>{console.log(error)})
    })
  },

  // vm => resolve
  getRecipe(id){
    return new Promise((resolve, reject) =>{
      var docRef = firebase.firestore().collection('recipes').doc(id);
      var recipe = {}
      docRef.get().then(function (doc){
        var data = doc.data()
        recipe.title = data.title
        recipe.description = data.description
        recipe.imgurl = data.imgurl
        recipe.procedure = data.procedure
        recipe.ingredients = data.ingredients
      }).then(()=>{
        resolve(recipe)
      })
    })
  }

}
