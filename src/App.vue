<template>
<div id="app">
  <div is="sui-sidebar" :visible="isVisible">
    <button id="closeSidebarButton" class="btn btn-primary" @click="closeSidebar">×</button>
    <Sidebar />
  </div>
    <div :class="{sidebarCloser: scloserActive}" @click="closeSidebar"></div>
    <!-- navbar -->
    <header id="navbar" class="navbar">
      <button class="btn btn-primary"id="toggleButton" v-on:click="openSidebar">open menu</button>
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
    Sidebar,
  },
  data () {
    return {
      isVisible: false,
      scloserActive: false,
    }
  },
  methods: {
    openSidebar () {
      // how to access to sui-sidebar.visible?
      this.isVisible = true;
      this.scloserActive = true;
    },
    closeSidebar () {
      this.isVisible = false;
      this.scloserActive = false;

    }
  },
  created () {
    this.closeSidebar()
    console.log('created called')
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
  top:0;
  padding: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
}

#closeSidebarButton {
  margin-left: 90%;
}

.sidebarCloser {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}


#main {
  text-align: center;
  max-width: 700px;
  margin: auto;
  /*margin-top: 4rem;*/
  padding-top: 4rem;
}
</style>
