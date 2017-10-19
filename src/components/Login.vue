<template>
  <div id="login">
    <button @click='loginAnony'>Login Anonymously</button>
    <button @click='logout'>Logout</button>
  </div>
</template>

<script>
  export default {
    methods:{
      loginAnony () {
        var auth = this.$firebase.auth().signInAnonymously().catch(function(error){

          if (errorCode === 'auth/operation-not-allowed') {
            alert('You must enable Anonymous auth in the Firebase Console.');
          } else {
            console.error(error);
          }
        })
      },
      logout () {
        var st = this.$firebase.auth().signOut()
      }
    }

  }
</script>

<style>

</style>
