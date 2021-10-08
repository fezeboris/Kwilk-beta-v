<template>
  <div class="footer">
    <!-- <hr> -->
    <div class="footer-contain">
      <div class="footer-btn">
        <router-link to="/report-sheet"
          ><i class="fab fa-shopware"></i
        ></router-link>
        <router-link to="/help"><i class="fas fa-ambulance"></i></router-link>
        <router-link to="/home-slider"><i class="fas fa-home"></i></router-link>
        <router-link to="/education"
          ><i class="fas fa-user-graduate"></i
        ></router-link>
        <router-link to="/notifications"
          ><i class="fas fa-bell"><sup v-if="numberOfNotif !== 0">{{numberOfNotif}}</sup></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      token: "",
      numberOfNotif:'',
    };
  },
  methods: {
    async getNofif() {
    //   this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/notifications/get/${this.token}/`
        );
        // console.log(result.data.education_list);
        // console.log(result.data.notification_unseen.length);
        this.numberOfNotif = result.data.notification_unseen.length;
      } catch (e) {
        console.log(e);
      }
    //   this.loading = false;
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    this.getNofif() 
  },
};
</script>

<style scoped>
.footer {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 20px 0px;
  color: rgb(17, 118, 151);
  border-radius: 10px;
}
.fas,
.fab {
  font-size: 18px;
  text-align: center;
  padding-top: 7px;
}
.fa-bell{
    font-size: 18px;
    margin-left: 3px;
}

.footer-btn {
  display: flex;
  flex: row;
  justify-content: space-around;
  align-items: center;
  border-top: 0.5px solid #f0f0f0;
  text-align: center;
  bottom: 0px;
  width: 100%;

  height: 65px;
  padding: 0px 0px;
  text-align: center;
}

a {
  text-decoration: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  /* margin-top: 20px; */
}

.footer-contain {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  opacity: 3;
  width: 100%;
  left: 0;
  background: #fff;
}

.router-link-active  {
  background: #1cb902;
  color: white;
  border-radius: 20px;
  align-items: center;
  height: 35px;
  text-align:center;
  width: 35px;
  box-shadow: 0 0 8px 5px rgba(6, 214, 17, 0.6);
}
i sup{
    color: rgb(252, 7, 56);
    font-size: .7rem;
}
</style>