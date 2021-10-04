<template>
  <div class="background">
    <nav>
      <div class="headers">
       <div class="login-profil-img" @click="showModal = !showModal "></div>
        <div class="request-header">
        <p>Notifications</p>
        <small>Time is up</small>
    </div>

        </div>
       
      <div class="language">
        <i class="fas fa-chevron-down"></i>
      </div>
      <!-- <i class="material-icons menu" @click="showSidebar= true">dehaze</i> -->
     
    </nav>
  </div>
  <br />
  <div class="popup" v-if="showModal" @click="showModal = false">

   <p> <router-link to="/profile">My Account</router-link></p>
    <p><router-link to="/job-request" >Job Request</router-link></p>
    <p><router-link to="/professionals" v-if="job == 'clerk' ">Professionals</router-link></p>
    <p><router-link to="/patient-request" v-if="job == 'clerk' ">Patient Request</router-link></p>
    <p><router-link to="/create-research" v-if="job == 'health_worker'  ">Create Research</router-link></p>
   <p> <router-link to="/vue-research" v-if="job == 'health_worker' || 'clerk' ">Vue Research</router-link></p>
      <p> <router-link to="/updates" v-if="job == 'clerk' ">Education Create</router-link></p>

  
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
// import MenuBar from "@/components/toolpit/MenuBar.vue";
import axios from 'axios'
export default {
  components: {
    // MenuBar,
  },
  data() {
    return {
      showModal: false,
      token: '',
      job: '',
    };
  },
  methods: {
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
    },
   
  },
  mounted(){
    this.token = localStorage.getItem("userInfo");

    this.handleGetStatus();
   
  },

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
  margin: 0px 5px;
  align-items: center;
  justify-items: center;
}
.login-profil-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: yellow;
}
.popup {
  position: fixed;
  width: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
  z-index: 9999;
  opacity: 1;
  left: 0;
  height: auto;
 margin: 25px 10px;
  transition: ease-in-out 0.9s;
  padding: 10px 10px;
  background-color: #ffff;
  text-align: left;
}
a:hover {
  color: #8ba0ae;
  text-decoration: none;
}
button {
  background: inherit;
  border: none;
  outline: none;
}
button:hover {
  color: #8ba0ae;
}
p{
  padding: auto 0px;
  margin: 10px 0;
}
p a {
  color: lightblue;
}
.headers{
  display: flex;
  align-items: center;
  margin: 3px 5px;
}
.request-header{
  margin-bottom :  10px;
  margin-left: 5px;
  text-align: left;
  line-height: 3px;
  

}
small {
  color: #8ba0ae;
  font-size: 0.8rem;
 
  line-height: 0rem;
}
.request-header p{
  font-weight: bold;
   margin-bottom: 10px;
}
.fa-chevron-down{
  
  font-size: .8rem;
  margin-right: 10px;
}
</style>
