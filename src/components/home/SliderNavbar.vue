<template>
  <div class="background">
    <nav>
      <div>
        <MenuBar />
      </div>
      <!-- <i class="material-icons menu" @click="showSidebar= true">dehaze</i> -->
      <div class="login-profil-img" @click="showModal = !showModal"></div>
    </nav>
  </div>
  <br /><br /><br />
  <div class="popup" v-if="showModal" @click="showModal = false">
    <router-link to="/profile">My Account</router-link><br />
    <router-link to="/job-request">Job Request</router-link><br />
    <router-link to="/patient-request">Patient Request</router-link><br />
    <router-link to="#">Logout</router-link>
  </div>
</template>

<script>
import MenuBar from "@/components/toolpit/MenuBar.vue";

export default {
  components: {
    MenuBar,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>


<style scoped>
.background {
  background: #ffff;
  width: 100%;
  position: fixed;
  z-index: 9999;
  opacity: 1;
}
nav {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  justify-items: center;
}
.fa {
  margin-top: 10px;
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
</style>