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
import Firebase from '@/api/firebase/index'
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
      Firebase.getRecipe(id).then((recipe) => {
        vm.recipe = recipe
      })
    }
  },
  created () {
    this.getRecipe(this.$route.params.id)

  }
}
</script>

<style lang="css">
</style>
