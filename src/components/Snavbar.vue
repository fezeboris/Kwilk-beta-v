<template>
  <div class="background">
    <nav>
      <div>
        <i class="fas fa-arrow-left" @click="back"></i>
      </div>
      <!-- <i class="material-icons menu" @click="showSidebar= true">dehaze</i> -->
      <div class="login-profil-img" @click="showModal = !showModal"></div>
    </nav>
  </div>
  <br /><br /><br />
  <div class="popup" v-if="showModal" @click="showModal = false">
    <p> <router-link to="/profile">My Account</router-link></p>
    <p><router-link to="/job-request" v-if="job == 'clerk' ">Job Request</router-link></p>
    <p><router-link to="/professionals" v-if="job == 'clerk' ">Professionals</router-link></p>
    <p><router-link to="/patient-request" v-if="job == 'clerk' ">Patient Request</router-link></p>
    <p><router-link to="/create-research" v-if="job == 'health_worker' ">Create Research</router-link></p>
   <p> <router-link to="/vue-research" v-if="job == 'health_worker' || 'clerk' ">Vue Research</router-link></p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      showModal: false,
      job: '',
      token: '',
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
     async handleGetStatus(){
      try{
      let result = await axios.get( `https://kwiklik.herokuapp.com/job/obtain/${this.token}/`)

      this.job = result.data.job
      // console.log(result)
      }catch(e){
        console.log(e)
      }
    }
  },
  mounted(){
     this.token = localStorage.getItem("userInfo");
    this.handleGetStatus();
  }
};
</script>

<style scoped>
.background {
  background: #ffff;
  width: 100%;
  position: fixed;
  z-index: 9999;
  padding-top: 7px;
  opacity: 1;
  padding-bottom: 15px;
}
nav {
  display: flex;
  justify-content: space-between;
  margin: 15px 20px;
  justify-items: center;
}
.login-profil-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: yellow;
}
.popup {
  position: fixed;
  width: 120px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
  z-index: 9999;
  opacity: 1;
  right: 0;
  margin: 0px 10px;
  transition: ease-in-out 0.9s;
  padding: 10px 10px;
  background-color: #ffff;
  text-align: left;
}
a:hover {
  color: #8ba0ae;
  text-decoration: none;
}
a {
  padding: 20px 0;
}
.fa-arrow-left {
  font-size: 1.5rem;
  margin: 10px 0;
}
p{
  padding: auto 0px;
  margin: 10px 0;
}
p a {
  color: lightblue;
}
</style>