<template>
  <div class="hello">
    <img id="logo_img" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>{{ description }}</p>
    <router-link :to="{ name: 'Home', params: {} }">See Recipes</router-link>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Trepi',
      description: 'This is a training recipe app. See high protains and healthey foods'
    }
  },
  created() {
    //do something after creating vue instance
    console.log('page');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#logo_img {
  max-width: 300px;
  height: auto;
}
</style>
