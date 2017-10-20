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
import Firebase from '@/api/firebase/index'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      recipes: []
    }
  },
  computed:{
    // recipes (){
    //   var recipes = this.getRecipes()
    //   console.log("recipes from home" + recipes);
    // }
  },
  methods:{
    getRecipes () {
      var vm = this
      Firebase.getRecipes().then(function(recipes){
        vm.recipes = recipes
      })
    }
    //
    // },

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
