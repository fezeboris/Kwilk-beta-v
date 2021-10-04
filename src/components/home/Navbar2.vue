<template>
  <div class="background">
    <nav>

      <!-- <i class="material-icons menu" @click="showSidebar= true">dehaze</i> -->
      <div class="headers">
      <div class="login-profil-img" @click="showModal = !showModal ">
        <div v-if="image != ''" class="login-profil-img">
            <img :src="image" id="photo" />
          </div>

          <div v-else class="login-profil-img">
            <i class="fas fa-user-circle"></i>
           
          </div>
      </div>
      </div>
        <div class="language">
         <LangSwitcher />
      </div>
    </nav>
  </div>
  <br /><br /><br />
  <div class="popup" v-if="showModal" @click="showModal = false">
   <p>
      <router-link to="/profile">{{ $t("popup.account") }}</router-link>
    </p>
    <p>
      <router-link to="/job-request"  v-if="job == 'clerk'">>{{ $t("popup.job") }}</router-link>
    </p>
    <p>
      <router-link to="/professionals" v-if="job == 'clerk'">{{
        $t("popup.pro")
      }}</router-link>
    </p>
    <p>
      <router-link to="/patient-request" v-if="job == 'clerk'">{{
        $t("popup.patient")
      }}</router-link>
    </p>
    <p>
      <router-link to="/create-research" v-if="job == 'health_worker'">{{
        $t("popup.research")
      }}</router-link>
    </p>
    <p>
      <router-link
        to="/vue-research"
       v-if="job == 'health_worker' || job ==  'clerk'"
        >{{ $t("popup.vue") }}</router-link
      >
    </p>
    <p>
      <router-link to="/updates" v-if="job == 'clerk'">{{
        $t("popup.edu")
      }}</router-link>
    </p>

    <button @click="logout">{{ $t("popup.logout") }}</button>
  </div>
</template>

<script>
// import MenuBar from "@/components/toolpit/MenuBar.vue";
import axios from 'axios'
import LangSwitcher from "@/components/LangSwitcher";
export default {
  components: {
    LangSwitcher
  },
  data() {
    return {
      showModal: false,
      token: '',
      job: '',
      image:""
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
    async handleGet() {
      
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/profile/get/${this.token}/`
        );
        // console.log(result.data.profile);
        this.image = result.data.profile.photo;
       
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted(){
    this.token = localStorage.getItem("userInfo");

    this.handleGetStatus();
    this.handleGet()
  }
};
</script>

<style scoped>
.background {
  background: #ffff;
  width: 100%;
  position: fixed;
  /* z-index: 2; */
  padding-top: 7px;
    z-index: 9999;
  opacity: 0.8;
  margin-top: 10px;
  /* padding-bottom: 5px; */
}
nav {
  display: flex;
  justify-content: space-between;
  margin: 0px 5px;
  align-items: center;
  justify-items: center;
}
.login-profil-img,  .login-profil-img img {
  width: 45px;
  height: 45px;
  border-radius: 50%;

}
.popup {
  position: fixed;
  width: auto;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
  z-index: 9999;
  opacity: 3;
  /* right: 0; */
 margin: 10px 10px;
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
  margin: 0px 5px;
}
.fa-chevron-down{
  
  font-size: .8rem;
  margin-right: 10px;
}

.login-profil-img i {
  color: #d7eee8;
  font-size: 2.5rem;
}
</style>
