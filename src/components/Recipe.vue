<template>
  <div id="recipe">
    recipe id from params is id: {{ $route.params.id }}
  {{ recipe.title }}
  {{ recipe.description }}
  {{ recipe.imgurl }}
  {{ recipe.procedure }}
  {{ recipe.ingredients }}


  </div>
</template>

<script>
export default {
  data () {
    return {
      recipe: {
        title: '',
        description:'',
        imgurl:'',
        procedure:'',
        ingredients:'',
      }
    }
  },
  methods:{
    getRecipe(id){
      var vm = this
      var docRef = this.$firebase.firestore().collection('recipes').doc(id);
      docRef.get().then(function (doc){
        var data = doc.data()
        vm.recipe.title = data.title
        vm.recipe.description = data.description
        vm.recipe.imgurl = data.imgurl
        vm.recipe.procedure = data.procedure
        vm.recipe.ingredients = data.ingredients

        console.log('recipe title '+ vm.recipe.title);
      })
      // this.
      // console.log('recipe title '+ this.recipe.title);



    }
  },
  created () {
    this.getRecipe(this.$route.params.id)
    // console.log('recipe title '+ this.recipe.title);

  }
}
</script>

<style lang="css">
</style>
