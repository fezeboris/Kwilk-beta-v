<template>
  <div class="home">
    <!-- <Navbar2/> -->
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :center="[3.85263, 11.498621]"
      style="height: 90vh"
    >
    <Navbar2/>
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <div v-for="report in reportList" :key="report.id">
      <l-marker :lat-lng=" [report.latitude, report.longitude]">
      <!-- <l-marker :lat-lng="[3.85263, 11.498621]"> -->
        <l-icon>
          <MapMarker />
        </l-icon>
      </l-marker>
      </div>
    </l-map>
    <!-- <button @click="changeIcon">New kitten icon</button> -->
    <Footer />
  </div>
</template>
<script>
import Footer from "../Footer.vue";
import axios from 'axios'
import Navbar2 from '../home/Navbar2.vue'
import MapMarker from "../MapMarker.vue";
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    Footer,
    MapMarker,
    Navbar2
  },
  data() {
    return {
      zoom: 10,
      iconWidth: 45,
      iconHeight: 90,
      reportList: [],
      token:'',
    };
  },
  // computed: {
  //   iconUrl() {
  //     return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
  //   },
  //   iconSize() {
  //     return [this.iconWidth, this.iconHeight];
  //   },
  // },
  methods: {
    // changeIcon() {
    //   this.iconWidth += 1;
    //   if (this.iconWidth > this.iconHeight) {
    //     this.iconWidth = Math.floor(this.iconHeight / 2);
    //   }
    // },

     async getReports() {
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/reports/get/${this.token}/`,
          {}
        );
        this.reportList = result.data.report_list;
        // console.log(result.data.report_list);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
 
      (this.token = localStorage.getItem("userInfo"));
    this.getReports();

     
   
  },
};
</script>

<style>
.home {
  margin: 0px 0;
  background: white;
  text-align: left;
  padding: 0px 0px;
  z-index: 2;
  opacity: .9;
  border-radius: 10px;
}
</style>