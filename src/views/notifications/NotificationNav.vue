<template>
  <div class="background" >
    <nav>
      <div class="headers" >
        <div class="login-profil-img" @click="showModal = !showModal">
          <div v-if="image != ''" class="login-profil-img">
            <img :src="image" id="photo" />
          </div>

          <div v-else class="login-profil-img">
            <i class="fas fa-user-circle"></i>
           
          </div>
        </div>

     

        <div class="request-header">
          <p>{{ $t("notiNav.h1") }}</p>
          <small>{{ $t("notiNav.p") }}</small>
        </div>
      </div>
      <!--        
      <div class="lang">
     <select @change="handleChange($event)" v-model="lang">
            <option value="fr">French</option>
            <option value="en">English</option>
            </select>
      </div> -->
      <LangSwitcher />
      <!-- <i class="material-icons menu" @click="showSidebar= true">dehaze</i> -->
    </nav>
  </div>
  <br />
  <div class="popup" v-if="showModal" @click="showModal = false">
    <p>
      <router-link to="/profile">{{ $t("popup.account") }}</router-link>
    </p>
    <p>
      <router-link to="/job-request"  v-if="job == 'clerk'">{{ $t("popup.job") }}</router-link>
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
     <p>
      <router-link to="/my-report">{{ $t("popup.report") }}</router-link>
    </p>

    <button @click="logout">{{ $t("popup.logout") }}</button>
  </div>
</template>

<script>
// import MenuBar from "@/components/toolpit/MenuBar.vue";
import LangSwitcher from "@/components/LangSwitcher";
import axios from "axios";
export default {
  components: {
    // MenuBar,
    LangSwitcher,
  },
  emits:[],
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      showModal: false,
      token: "",
      job: "",
      lang: lang,
      image: '',
      
    };
  },
  methods: {
     
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LandingPage" });
    },
    async handleGetStatus() {
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/job/obtain/${this.token}/`
        );

        this.job = result.data.job;
        // console.log(result)
      } catch (e) {
        console.log(e);
      }
    },
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },

    async handleGet() {
      this.loading = true;
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
  mounted() {
    this.token = localStorage.getItem("userInfo");

    this.handleGetStatus();
    this.handleGet()
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
.login-profil-img,  
.login-profil-img img
{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
}
.login-profil-img i {
  color: #d7eee8;
  font-size: 2.5rem;
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
p {
  padding: auto 0px;
  margin: 10px 0;
}
p a {
  color: lightblue;
}
.headers {
  display: flex;
  align-items: center;
  margin: 3px 5px;
}
.request-header {
  margin-bottom: 10px;
  margin-left: 5px;
  text-align: left;
  line-height: 3px;
}
small {
  color: #8ba0ae;
  font-size: 0.8rem;

  line-height: 0rem;
}
.request-header p {
  font-weight: bold;
  margin-bottom: 10px;
}
.fa-chevron-down {
  font-size: 0.8rem;
  margin-right: 10px;
}
</style>
