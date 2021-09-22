<template>
  <div class="home">
    <!-- <div class="toolpit">
     <Toolpit/> 
      </div> -->

    <div class="background">
      <nav>
        <!-- <div>
            <Side/>
          </div>
           
           <div class="login-profil-img" @click="showModal = true"></div> -->
        <HomeNavbar />
      </nav>
    </div>

    <l-map
      ref="map"
      v-model:zoom="zoom"
      :center="[3.85263, 11.498621]"
      style="height: 90vh; opacity: 0.9"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <div class="popup" v-if="showModal" @click="showModal = false">
        <router-link to="/profile">My Account</router-link><br />
        <router-link to="#">Logout</router-link>
      </div>
          <div v-for="report in reportList" :key="report.id">
      <l-marker :lat-lng=" [report.latitude, report.longitude]">
        <l-icon>
          <MapMarker />
        </l-icon>
      </l-marker>
      </div>
    </l-map>
    <Footer />
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import MapMarker from "../MapMarker.vue";
import axios from "axios";
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import Footer from "../Footer.vue";
// import Toolpit from '../toolpit/Toolpit.vue'
import HomeNavbar from "../home/HomeNavbar.vue";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    MapMarker,
    Footer,
    // Toolpit,
    HomeNavbar,
  },
  emits: ["openSidebar"],
  data() {
    return {
      zoom: 9,
      showModal: false,
      iconWidth: 45,
      iconHeight: 45,
      token: "",
      reportList: [],
    };
  },
  methods: {
 
    async getReports() {
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/reports/get/${this.token}/`,
          {}
        );
          this.reportList = result.data.report_list
        // console.log(result.data.report_list);
        
        
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Mapss" });
    } else {
      this.$router.push({ name: "Login" });
    }
    this.token = localStorage.getItem("userInfo");
    this.getReports()
  },
  created(){

  }

};
</script>

<style scoped>
.home {
  margin: 0px 0;
  background: white;
  text-align: left;
  padding: 0px 0px;
  border-radius: 10px;
}
/* nav{
    display: flex;
    justify-content: space-between;
    margin: 5px 25px 10px 0px;
    justify-items: center;
    
    
} */
.menu {
  margin: 5px 15px;
}
.background {
  max-width: 100%;
  position: fixed;
  z-index: 2;
  margin-top: 30px;
  opacity: 0.8;
}
.toolpit {
  max-width: 100%;
  position: fixed;
  z-index: 10;
  opacity: 0.95;
  top: 0;
}
.login-profil-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: yellow;
  margin-right: 45px;
}
.popup {
  position: fixed;
  width: 80px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
  /* text-align: right; */
  z-index: 9999;
  margin-top: 0px;
  opacity: 1;
  margin-left: 275px;
  transition: ease-in-out 0.9s;
  padding: 10px 0px;
  background-color: #ffff;
}
.popup a {
  font-family: "Squada One", sans-serif;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 16px;
}
.popup a:hover {
  color: green;
}
</style>
