<template>
  <HelpNav />

  <div class="help">
    

    <div class="request-main-contain">
      <!-- <router-link :to="{ name: 'Clinical' }"> -->
       
       <div class="loader" v-if="loading">
         <Loader/>
       </div>
        <div class="clinical-specialist">
         

          <router-link :to="{name: 'ClinicalDemande'}"><p>{{ $t('help.p1') }}</p></router-link>
         
        </div>
      <!-- </router-link> -->

      <!-- <router-link :to="{ name: 'Psychological' }"> -->
        <div class="clinical-specialist">
        
         
         <router-link :to="{name: 'ClinicalDemande'}"> <p>{{ $t('help.p2') }}</p></router-link>
        </div>
      <!-- </router-link> -->

      <!-- <router-link :to="{ name: 'Consultant' }"> -->
        <div class="clinical-specialist">
         

          
         <router-link :to="{name: 'DemandeConsultant'}"><p>{{ $t('help.p3') }}</p></router-link>
        </div>
      <!-- </router-link> -->

      <!-- <router-link :to="{ name: 'Bike' }"> -->
        <div class="clinical-specialist">
       

          
         <router-link :to="{name: 'DemandeBike'}"><p>{{ $t('help.p4') }}</p></router-link>
        </div>
      <!-- </router-link> -->
      <div class="myRequest">
        <router-link :to="{name: 'MyRequest'}">{{ $t('help.p5') }}</router-link>
      </div>


    
    </div>
    <hr />
    <Footer />
  </div>
</template>

<script>
// import ClinicalDemande from '../help/experts/helpDemande/ClinicalDemande.vue'
// import DemandConsultant from '../help/experts/helpDemande/DemandConsultant.vue'
// import PsychoDemande from '../help/experts/helpDemande/PsychoDemande.vue'
// import DemandeBike from '../help/experts/helpDemande/DemandeBike.vue'
import Loader from '@/components/toolpit/Loader.vue'

import axios from "axios";
import Footer from "../../components/Footer.vue";
import HelpNav from "../help/HelpNav.vue";
// import Loader from '../../components/toolpit/Loader.vue'
export default {
  components: {
    Footer,
    HelpNav,
    // ClinicalDemande,
    // DemandConsultant,
    // PsychoDemande,
    // DemandeBike,
    Loader

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
        console.log(result)
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
  },
};
</script>

<style  scoped>
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

small {
  color: #c4c4c4;
  font-size: 0.8rem;
  letter-spacing: 0px;
  margin: 0;
  /* line-height: 0.5rem; */
}

.clinical-specialist {
  text-align: center;
  margin-top: 48px;
  font-size: 1.5rem;
}
.clinical-specialist p{
  background-color: lightgreen;
  padding: 10px 0;
  border-radius: 5px;
}
.arrow {
  color: #1cb902;
  font-size: 2rem;
}
.bands {
  margin-bottom: 20px;
}
hr {
  margin-top: 50px;
  color: #c4c4c4;
}
a {
  text-decoration: none;
}
.myRequest{
  text-align: right;
  color: lightblue;
  font-size: 1.1rem;
  margin-top: 20px;
 
}
.myRequest a{
 box-shadow: rgba(2, 236, 253, 0.2) 0px 7px 29px 0px;
}
.loader{
    text-align: center;
    margin: 0px auto;
}

</style>