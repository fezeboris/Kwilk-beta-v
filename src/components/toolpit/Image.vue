<template>
  <div class="body">
    <div class="main-container">
      <div >
        <h1>Image</h1>
      </div>

      <figure class="image-container">
        <img :src="image" />
      </figure>
      <div v-if="!image">
        <input id="upload-button" type="file"  @change="onFileChange" />
        <label for="upload-button"> <i class="far fa-images"></i>&nbsp; </label>
      </div>

      <div v-else>
        <button class="delete-btn" @click="removeImage">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "",
    };
  },

  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },

    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      console.log(image);

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = "";
      return e;
    },
    handleSubmit() {
      console.log("image", this.image);
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-between;
  max-width: 420px;
  margin: 0 auto;
  height: 100px;
  align-items: center;
  /* padding-bottom: 10px; */
}
img {
  max-width: 80%;
  max-height: 80px;
  margin: auto;
}

.image-container {
  width: 70%;
  margin: 0;
}
.image-container img {
  /* display: block;
    position: relative; */
  max-width: 80%;
  max-height: 80px;
  margin: auto;
}
input[type="file"] {
  display: none;
}
label {
  color: #1cb902;
  font-size: 1rem;
  text-align: center;
  padding: 0px;
  border-radius: 19px;
  margin: 0;
  cursor: pointer;
}
.far {
  color: rgb(112, 216, 112);
  font-size: 1rem;
  text-align: left;
  /* margin: 30px 20px; */
  padding: 10px;
  background: #c4f2dc;
  margin-right: 40px;
  border-radius: 50%;
  /* box-shadow:  0 0 8px 5px rgba(6, 214, 17, 0.6); */
}
.image-main-container h1 {
  font-size: 1rem;
  /* padding: 0px 30px 30px 30px; */
  margin: 20px 30px;
}
.delete-btn{
  margin-right: 30px;
}
</style>
