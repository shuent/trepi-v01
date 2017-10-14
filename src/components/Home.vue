<template lang="html">
<div id="recipes" class="home">
<div class="columns">

<!-- <div id="recipe-card" class="column col-6"> -->


<div v-for="i in 10" id="recipe-card" class="column col-6">
  <div class="card">
    <router-link :to="{ name: 'Show', params: { recipe_title } }">
      <div class="card-image">
          <img src="../assets/img/003.jpg" class="img-responsive">
      </div>
      <div class="card-header">
        <div class="card-title h5">
          {{ recipe_title }}
        </div>
        <div class="card-subtitle text-gray">description</div>
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
      recipe_title: "Recipe title A"
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
