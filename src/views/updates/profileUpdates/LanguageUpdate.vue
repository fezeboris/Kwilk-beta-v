<template>
  <div class="login-profil-img" @click="showModal = true">
    <i class="fas fa-pencil-alt"></i>
  </div>

  <div class="popup" v-if="showModal">
    <!-- <label>Name</label> -->
    <input type="text" v-model="language" />

    <div class="btn-container">
      <button class="btn-1" @click.prevent="showModal = false">cancel</button>
      <button class="btn-2" @click.prevent="updateProfile">Update</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showModal: false,
      language: "",
      token: "",
    };
  },
  methods: {
    async updateProfile() {
      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/profile/update/${this.token}/`,
          {
            language: this.language,
          }
        );
        return result, (this.showModal = false);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    // console.log(this.token)
  },
};
</script>

<style scoped>
.popup {
  max-width: 420px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
  opacity: 1;
  position: absolute;
  z-index: 3;
  /* margin: 0px 10px; */
  transition: ease-in-out 0.9s;
  padding: 10px 10px;
  background-color: #ffff;
  text-align: left;
}
label {
  color: #676e76;
  display: inline-block;
  margin: 5px 3px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-style: normal;
}
input {
  /* display: block; */
  padding: 10px 0px;
  width: 300px;
  margin-bottom: 10px;
  background: white;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  outline: none;
  color: #555;
}
.btn-container {
  display: flex;

  align-items: center;
}
.btn-1 {
  /* background: crimson; */
  padding: 3px 5px;
  border: none;
  font-size: 10px;
  outline: none;
  border-radius: 5px;
  color: crimson;
  margin-right: 20px;
}
.btn-2 {
  /* background: lightgreen; */
  padding: 3px 5px;
  border: none;
  font-size: 10px;
  outline: none;
  border-radius: 5px;
  color: lightblue;
}
input:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}
</style>