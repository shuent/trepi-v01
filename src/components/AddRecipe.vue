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
import Firebase from '@/api/firebase/index'


export default {
  data () {
    return {
      recipe: {
        id: '',
        title: '',
        description:'',
        procedure:'',
        ingredients:'',
        titleImg: null,
        imgname: '',
      }
    }
  },
  methods: {
    submitForm () {
      this.pushFirestore(()=>{
        console.log('called after pushed');
        this.$router.push({name: 'showRecipe',params: {id: this.recipe.id} })
      })
    },
    pushFirestore(callback){
      Firebase.pushRecipe(this.recipe)
      .then((docRef)=>{
        this.recipe.id = docRef.id
        callback()
      })
      .catch((error) => {
        console.log(error);
      })
      this.uploadImg()
    },
    selectedFile (e) {
      e.preventDefault()
      let files = e.target.files
      this.recipe.titleImg = files[0]
      if (files[0].type.startsWith('image/')) {
        // console.log('img file selected' + this.recipe.titleImg.name)
        this.recipe.imgname = files[0].name
        console.log(this.recipe.imgname);

      }else{
        console.log('not image')
        this.recipe.titleImg = null
      }
    },
    uploadImg () {
      var imgRef = Firebase.storage.ref().child('img/recipeTitleImg')
      imgRef.child(this.recipe.imgname)
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
