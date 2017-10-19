<template lang="html">
  <div id="addrecipe">
    <form class="form-horizontal" v-on:submit.once.prevent="submitForm()">
      <div class="form-group">
        <label class="form-label">Recipe title </label>
          <input class="form-input" v-model="recipe.title">
      </div>
      <div class="form-group">
        <label class="form-label">Description </label>
          <input class="form-input" v-model="recipe.description">
      </div>
      <div class="form-group">
        <label class="form-label">Recipe Title Image</label>
          <input @change="selectedFile" type="file" name="file">
          <button @click.prevent='uploadImg'>Upload Img</button>
      </div>
      <div class="form-group">
        <label class="form-label">Procedure </label>
          <input class="form-input" v-model="recipe.procedure">
      </div>
      <div class="form-group">
        <label class="form-label">Ingredients </label>
          <input class="form-input" v-model="recipe.ingredients">
      </div>
      <div class="form-group">
        <label class="form-label">Submit </label>
          <input class="btn" type="submit" value="submit">
      </div>
    </form>

  </div>

</template>

<script>
export default {
  data () {
    return {
      recipe: {
        title: '',
        description:'',
        procedure:'',
        ingredients:'',
        titleImg: null,
      }

    }
  },
  methods: {
    submitForm () {
      console.log(this.recipe.title);
      this.uploadImg()
      var result = this.pushFirestore()

      console.log(error);
      // var storageRef = this.$firebase.storage().ref()
      // console.log(storageRef.child('img/recipeTitleImg').child('test.img'))
      console.log(result)
      // this.$router.push({name: 'showRecipe',params: {id: this.recipe.title} })
    },
    pushFirestore(){
      var db = this.$firebase.firestore()
      console.log(db)
      db.collection('recipes').add({
        title: this.recipe.title,
        description: this.recipe.description,
        imgname: this.recipe.titleImg.name,
        procedure: this.recipe.procedure,
        ingredients: this.recipe.ingredients,
      }).then(function(docRef) {
        console.log('Document wiritten with ID: ', docRef.id)

      }).catch(function(error){
        console.error('Error adding recipe: ', error)
      })
    },
    selectedFile (e) {
      e.preventDefault();
      let files = e.target.files;
      this.recipe.titleImg = files[0];
      if (files[0].type.startsWith('image/')) {
        console.log('img file selected' + this.recipe.titleImg.name)

      }else{
        console.log('not image');
        this.recipe.titleImg = null;
      }
    },
    uploadImg () {
      var imgRef = this.$firebase.storage().ref().child('img/recipeTitleImg')
      imgRef.child(this.recipe.titleImg.name)
        .put(this.recipe.titleImg)
        .then(function (querySnapshot) {
          console.log('sucess uploaded img' + querySnapshot);
        })
    }
  },
}
</script>

<style lang="css">
</style>
