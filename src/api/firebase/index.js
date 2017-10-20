import firebase from 'firebase'
import config from './config'
require("firebase/firestore");

firebase.initializeApp(config)
let auth = firebase.auth()
let db = firebase.firestore()

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
      var recipeRef = db.collection('recipes').get()
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

  // TODO
  // imgurl to imgname
  getRecipe(id){
    return new Promise((resolve, reject) => {
      var docRef = db.collection('recipes').doc(id);
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
  },

  pushRecipe(recipe){
    return new Promise((resolve, reject) => {
      db.collection('recipes').add({
        title: recipe.title,
        description: recipe.description,
        imgname: recipe.imgname,
        procedure: recipe.procedure,
        ingredients: recipe.ingredients,
      }).then(function(docRef) {
        resolve(docRef)
      }).catch(function(error){
        console.error('Error adding recipe: ', error)
      })
    })
  }


}
