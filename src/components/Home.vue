<template lang="html">
<div id="recipes" class="home">
<div class="columns">

<!-- <div id="recipe-card" class="column col-6"> -->


<div v-for="recipe in recipes" id="recipe-card" class="column col-6">
  <div class="card">
    <router-link :to="{ name: 'Show', params:{} }">
      <div class="card-image">
          <img src="../assets/img/003.jpg" class="img-responsive">
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


// mock Recipe class
// this to Firestore
class Recipe {
  constructor(title, description, imgurl) {
    this.title = title;
    this.description = description;
    this.imgurl = imgurl;
  }
}

let recipe1 = new Recipe('Egg recipe', 'this is Egg Recipe', '003')
let recipe2 = new Recipe('Apple recipe', 'this is Apple Recipe', 'B')
let recipe3 = new Recipe('Chiken recipe', 'this is Chiken Recipe', 'buses')
//mock end


export default {
  data() {
    return {
      recipes: [
        recipe1,recipe2,recipe3
        // { recipe: recipe1 },
        // { recipe: recipe2 },
        // { recipe: recipe3 },
      ]
    }
  },
  methods: {
    imgsrc(url) {
      return "../assets/img/" + url
    }
  }
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
