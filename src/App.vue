<template>
<div id="app">
  <Sidebar />
  <!-- navbar -->
  <header id="navbar" class="navbar">
    <section class="navbar-center">
      <a href="#" class="navbar-brand">Trepi</a>
    </section>
  </header>

  <div id="main">
    <router-view/>
  </div>
</div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-overflow-scrolling: touch;
  color: #2c3e50;
}

#navbar {
  height: 3.5rem;
  background-color: #fdc672;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  padding: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
}

#main {
  text-align: center;
  max-width: 700px;
  margin: auto;
  margin-top: 3.5rem;
  overflow-y: auto;
  height: 100%;
}
.navbar .navbar-center {
  margin: auto;
}
</style>
