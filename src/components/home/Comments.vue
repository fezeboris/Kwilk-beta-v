<template>
     <div class="comment-btn">
        <button  @click.prevent="showModal = true">comment</button>
      </div >


  <!-- <div class="login-profil-img" @click="showModal = true">
    <i class="fas fa-pencil-alt"></i>
  </div> -->

  <div class="popup" v-if="showModal">
    <!-- <label>Name</label> -->
    <textarea type="text" v-model="comment" />

    <div class="btn-container">
      <button class="btn-1" @click.prevent="showModal = false">cancel</button>
      <button class="btn-2" @click.prevent="updateProfile">Comment</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showModal: false,
      comment: "",
      token: "",
    };
  },
  methods: {
    async updateProfile() {
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/reports/messages/create/${this.token}/${this.$route.params.id}/`,
          {
            report: this.comment,
          }
        );
        console.log(result)
        this.showModal = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    // console.log(this.token)
    console.log(this.$route.params.id)
  },
};
</script>

<style scoped>
.popup {
  max-width: 420px;
  border-radius: 10px;
  /* box-shadow: 1px 1px 1px 1px rgb(224, 220, 220); */
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
textarea {
  /* display: block; */
  padding: 10px 0px;
  width: 335px;
  margin-bottom: 10px;
  background: white;
  box-sizing: border-box;
  border: .5px solid #f0f0f0;
  border-radius: 5px;
  outline: none;
  height: 80px;
  color: #555;
}
.btn-container {
  display: flex;

  align-items: center;
}
.btn-container .btn-1 {
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
textarea:focus {
  outline: none;
  /* border: 1px solid #1cb902; */
  background: white;
}

.comment-section button{
  /* background: rgb(151, 151, 19); */
  padding: 2px 3px;
  border-radius: 5px;
  color: lightblue;
  outline: none;
  cursor: pointer;
}
.comment-section button:hover{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  /* color: rgb(112, 112, 15); */
}
</style>