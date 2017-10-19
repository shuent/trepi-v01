<template>
  <div id="menu-navi">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="btn btn-link" :to="{ name: 'Welcome'}">Welcome</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-link" :to="{ name: 'Home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-link" :to="{ name: 'Login'}">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-link" :to="{ name: 'AddRecipe'}">Add Recipe</router-link>
        </li>
      </ul>

  </div>
</template>

<script>
export default {
}
</script>

<style>
#menu-navi{
  z-index: 2;
}

</style>
