<template>
  <div >
    <l-map ref="map" v-model:zoom="zoom" :center="[3.85263, 11.498621]"
    style="height: 80vh; opacity: 0.9">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

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
import axios from "axios";
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import Footer from '../Footer.vue'
import MapMarker from '../MapMarker.vue'
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    Footer,
    MapMarker
  },
  data() {
    return {
      zoom: 8,
      iconWidth: 45,
      iconHeight: 90,
      token: "",
      reportList: [],
    };

  },
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    changeIcon() {
      this.iconWidth += 1;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
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
      this.$router.push({ name: "HomePage" });
    } else {
      this.$router.push({ name: "Login" });
    }
    this.token = localStorage.getItem("userInfo");
    this.getReports()
  },
};
</script>

<style>
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