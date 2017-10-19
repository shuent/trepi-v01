<template>
  <div id="login">
    <button @click='signInAnonymously'>Login Anonymously</button>
    <button @click='signOut'>Logout</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    methods:{
      ...mapActions(['signInAnonymously','signOut']),

    }

  }
</script>

<style>

</style>
