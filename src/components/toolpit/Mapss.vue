<template>
  <div class="home">
    <!-- <Navbar2/> -->
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :center="[3.852877720994932, 11.519982783337552]"
      style="height: 87vh"
    >
      <Navbar2 />
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <div v-for="report in reportList" :key="report.id">
        <div v-if="report.case_type == 'physical violence'">
          <l-marker :lat-lng="[report.latitude, report.longitude]">
            <l-popup> {{report.case_type}} </l-popup>
            <l-icon>
              <i class="fas fa-map-marker-alt physical"></i>
            </l-icon>
          </l-marker>
        </div>
      </div>
      <div v-for="report in reportList" :key="report.id">
        <div v-if="report.case_type == 'stalking'">
          <l-marker :lat-lng="[report.latitude, report.longitude]">
               <l-popup> {{report.case_type}} </l-popup>
            <l-icon>
              <i class="fas fa-map-marker-alt salking"></i>
            </l-icon>
          </l-marker>
        </div>
      </div>
      <div v-for="report in reportList" :key="report.id">
        <div v-if="report.case_type == 'sexual violence'">
          <l-marker :lat-lng="[report.latitude, report.longitude]">
            <l-popup> {{report.case_type}} </l-popup>
            <l-icon>
              <i class="fas fa-map-marker-alt sexual"></i>
            </l-icon>
          </l-marker>
        </div>
      </div>
      <div v-for="report in reportList" :key="report.id">
        <div v-if="report.case_type == 'psychological violence'">
          <l-marker :lat-lng="[report.latitude, report.longitude]">
            <l-popup>{{report.case_type}}</l-popup>
            <l-icon>
              <i class="fas fa-map-marker-alt psychological"></i>
            </l-icon>
          </l-marker>
        </div>
      </div>
      <div v-for="report in reportList" :key="report.id">
        <div v-if="report.case_type == 'rape'">
          <l-marker :lat-lng="[report.latitude, report.longitude]">
            <l-popup>{{report.case_type}}</l-popup>
            <l-icon>
              <i class="fas fa-map-marker-alt rape"></i>
            </l-icon>
          </l-marker>
        </div>
      </div>
      <div v-for="report in reportList" :key="report.id">
        <div v-if="report.case_type == 'female genital mutilation'">
          <l-marker :lat-lng="[report.latitude, report.longitude]">
            <l-popup>{{report.case_type}}</l-popup>
            <l-icon>
              <i class="fas fa-map-marker-alt female"></i>
            </l-icon>
          </l-marker>
        </div>
      </div>
      <div v-for="report in reportList" :key="report.id">
        <div v-if="report.case_type == 'forced sterilisation'">
          <l-marker :lat-lng="[report.latitude, report.longitude]">
            <l-popup>{{report.case_type}}</l-popup>
            <l-icon>
              <i class="fas fa-map-marker-alt sterilisation"></i>
            </l-icon>
          </l-marker>
        </div>
      </div>
      <div v-for="report in reportList" :key="report.id">
        <div v-if="report.case_type == 'forced marriages'">
          <l-marker :lat-lng="[report.latitude, report.longitude]">
            <l-popup>{{report.case_type}}</l-popup>
            <l-icon>
              <i class="fas fa-map-marker-alt marriages"></i>
            </l-icon>
          </l-marker>
        </div>
      </div>
      <div v-for="report in reportList" :key="report.id">
        <div v-if="report.case_type == 'sexual harassement'">
          <l-marker :lat-lng="[report.latitude, report.longitude]">
            <l-popup>{{report.case_type}}</l-popup>
            <l-icon>
              <i class="fas fa-map-marker-alt harassement"></i>
            </l-icon>
          </l-marker>
        </div>


       
      </div>
      
    </l-map>
    <!-- <button @click="changeIcon">New kitten icon</button> -->
    <Footer />
  </div>
</template>
<script>
import Footer from "../Footer.vue";
import axios from "axios";
import Navbar2 from "../home/Navbar2.vue";

import {
  LMap,
  LTileLayer,
  LMarker,
  LIcon,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
    Footer,

    // MapMarker,
    Navbar2,
  },
  data() {
    return {
      zoom: 10,
      iconWidth: 45,
      iconHeight: 90,
      reportList: [],
      token: "",
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
        console.log(result.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    this.getReports();

    //  let user = localStorage.getItem("userInfo");
    // if (!user) {
    //   this.$router.push({ name: "Login" });
    // }
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
  opacity: 0.9;
  border-radius: 10px;
}
i {
  font-size: 1.2rem;
}
.salking {
  color: red;
}
.physical {
  color: black;
}
.sexual {
  color: orangered;
}
.psychological {
  color: blue;
}
.rape {
  color: yellow;
}
.female {
  color: brown;
}
.sterilisation {
  color: deeppink;
}
.marriages {
  color: darkred;
}
.harassement {
  color: lightblue;
}
.others{
  color: lightgray;
}
</style>



 


