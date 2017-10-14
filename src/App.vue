<template>
<div id="app">
  <div class="off-canvas">
    <input type="checkbox" class="off-canvas-checkbox" id="sidebar-checkbox" name="sidebar-checkbox" hidden>
    <label class="off-canvas-toggle btn btn-primary btn-lg" for="sidebar-checkbox">
      <i class="icon icon-menu"></i>
    </label>
    <div class="off-canvas-sidebar">
      <Sidebar />
    </div>
    <div class="off-canvas-body">
      <div id="navbar">
      </div>
      <div id="main">
        <router-view/>
      </div>
    </div>
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
  opacity: 0.1;
  background: red;
  margin: auto;
  width: 100%;

}

#main {
  text-align: center;
  max-width: 700px;
  margin: auto;
  overflow-y: auto;
  height: 100%;

}

</style>
