<template lang="html">
<div id="recipes" class="home">
<div class="columns">

<!-- <div id="recipe-card" class="column col-6"> -->
<!-- <button @click="getRecipes"> getRecipes</button> -->

<div v-for="recipe in recipes" id="recipe-card" class="column col-6">
  <div class="card">
    <router-link :to="{ name: 'showRecipe', params:{ id: recipe.id } }">
      <div class="card-image">
          <img :src='recipe.titleImgScr' class="img-responsive">
      </div>
      <div class="card-header">
        <div class="card-title h5">
          {{ recipe.title }}
        </div>
        <div class="card-subtitle text-gray">
          {{recipe.description}}
        </div>
      </div>
    </router-link>
  </div>
</div>


</div>
</div>
</template>

<script>

export default {
  data() {
    return {
      recipes: []
    }
  },
  methods:{
    getRecipes () {
      // Todo
      // この方法だと全て読み込むまで待つので，表示が遅くなる
      // 画像だけはあとで読み込めるようにしたい．
      // つかいちいちapi呼んでるのありえん
      var recipeTitleImgRef = this.$firebase.storage().ref().child('img/recipeTitleImg')
      var recipeRef = this.$firebase.firestore().collection('recipes').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // console.log(`${doc.id} => ${doc.data().title}`);
              var recipe = {};
              var recipes = this.recipes
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
          })
      console.log('getrecipes called');
    }
  },
  created (){
    this.getRecipes()
  },
}
</script>

<style lang="css">
.home {
  /*background-color: red;*/
}

#recipe-card {
  padding: 2px;
}
</style>
