<template>
  <div class="body">
    <div class="background">
      <nav>
        <div>
          <router-link to="/home-slider"><MenuBar /></router-link>
        </div>
        <!-- <i class="material-icons menu" @click="showSidebar= true">dehaze</i> -->
        <div>
          <div class="login-profil-img" @click="showModal = true"></div>
        </div>
      </nav>
    </div>
    <br /><br /><br />
    <div class="popup" v-if="showModal" @click="showModal = false">
      <router-link to="/profile">My Account</router-link><br />
      <router-link to="/job-request">Job Request</router-link><br />
      <router-link to="/patient-request">Patient Request</router-link><br />
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import MenuBar from "../toolpit/MenuBar.vue";
export default {
  components: {
    MenuBar,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.body {
  width: 100%;
  margin: 0 auto;
}
.background {
  background: #ffff;
  width: 100%;
  position: fixed;
  z-index: 9999;
  opacity: 0.7;
}
nav {
  display: flex;
  justify-content: space-between;
  margin: 10px 30px 15px 15px;
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
button {
  background: inherit;
  border: none;
  outline: none;
}
a:hover {
  color: #8ba0ae;
  text-decoration: none;
}
button:hover {
  color: #8ba0ae;
}
</style>
