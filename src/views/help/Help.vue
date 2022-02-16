<template>
  <HelpNav />

  <div class="help">
    <div class="request-main-contain">
      <!-- <router-link :to="{ name: 'Clinical' }"> -->

      <div class="loader" v-if="loading">
        <Loader />
      </div>

      <div class="demandes">
        <DemandConsultant />
      </div>
      <div class="demandes">
        <ClinicalDemande />
      </div>
      <div class="demandes">
        <PsychoDemande />
      </div>
      <div class="demandes">
        <DemandeBike />
      </div>

      <div class="myRequest">
        <router-link :to="{ name: 'MyRequest' }">{{
          $t("help.p5")
        }}</router-link>
      </div>
    </div>
    <!-- <hr /> -->
    <Footer />
  </div>
</template>

<script>
import ClinicalDemande from "../help/experts/helpDemande/ClinicalDemande.vue";
import DemandConsultant from "../help/experts/helpDemande/DemandConsultant.vue";
import PsychoDemande from "../help/experts/helpDemande/PsychoDemande.vue";
import DemandeBike from "../help/experts/helpDemande/DemandeBike.vue";
import Loader from "@/components/toolpit/Loader.vue";

import axios from "axios";
import Footer from "../../components/Footer.vue";
import HelpNav from "../help/HelpNav.vue";
// import Loader from '../../components/toolpit/Loader.vue'
export default {
  components: {
    Footer,
    HelpNav,
    ClinicalDemande,
    DemandConsultant,
    PsychoDemande,
    DemandeBike,
    Loader,
  },
  data() {
    return {
      showSidebar: false,
      token: "",
      loading: false,
    };
  },
  methods: {
    getDate(date) {
      this.currentDate = date;
    },

    async updateEducation() {
      this.loading = true;
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/help/create/${this.token}/`
        );
        // console.log(result.data.education_list);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    //    console.log(this.currentDate)
    // this.updateEducation();

    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style  scoped>
textarea {
  border-radius: 5px;
  outline: none;
  height: 200px;
}
.help {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 28px 10px;
  border-radius: 10px;
}

.request-main-contain {
  margin-top: 50px;
}
.demandes {
  margin-bottom: 40px;
}

hr {
  margin-top: 50px;
  color: #c4c4c4;
}
a {
  text-decoration: none;
}
.myRequest {
  text-align: right;
  color: lightblue;
  font-size: 1.1rem;
  margin-top: 20px;
}
.myRequest a {
  box-shadow: rgba(2, 236, 253, 0.2) 0px 7px 29px 0px;
}
.loader {
  text-align: center;
  margin: 0px auto;
}
</style>