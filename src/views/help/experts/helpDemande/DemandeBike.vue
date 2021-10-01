<template>
  <div class="login-profil-img" @click="showModal = true">
    <i class="fas fa-chevron-right"></i>
  </div>

  <div class="popup" v-if="showModal">
    <h1>{{ $t('demandes.bike') }}</h1>
    <!-- <label>Name</label> -->
    <textarea
      v-model="demand"
      placeholder="please enter your request"
    ></textarea>
    <!-- <input type="text" v-model="name" /> -->
  <div class="loader" v-if="loading">
         <Loader/>
       </div>
    <div class="btn-container" v-else>
      <button class="btn-1" @click.prevent="showModal = false">{{ $t('demandes.cancel') }}</button>
      <button class="btn-2" @click.prevent="demandHelp">{{ $t('demandes.send') }}</button>
    </div>
    <Date :Cdate="getDate" :Ctime="getTime" />
  </div>
  
</template>

<script>
import axios from "axios";
import Date from "@/components/toolpit/Date.vue";
import Loader from '@/components/toolpit/Loader.vue'
export default {
  components: {
    Date,
    Loader
  },
  data() {
    return {
      showModal: false,
      demand: "",
      token: "",
      currentDate: '',
      currentTime: '',
      loading: false,
    };
  },
  methods: {
    getDate(date) {
      this.currentDate = date;
    //   console.log('yowa', this.currentDate)
    },
    getTime(time){
      this.currentTime = time
    },
    async demandHelp() {
       this.loading = true;
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/help/create/${this.token}/`,
          {
            type_help: "bike",
            message: this.demand,
            date_of_demand: this.currentDate,
          }
        );
      
        this.demand = ""
        return result, (this.showModal = false);
      } catch (e) {
        console.log(e);
      }
       this.loading = false;
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    // console.log(this.token)
  },
};
</script>

<style scoped>
.popup {
  max-width: 420px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
  opacity: 1;
  position: absolute;
  z-index: 3;
  /* opacity: 1; */
  /* margin: 0px 10px; */
  transition: ease-in-out 0.9s;
  padding: 10px 10px;
  background-color: #ffff;
  text-align: left;
}
label {
  color: #676e76;
  display: inline-block;
  margin: 5px 3px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-style: normal;
}
textarea {
  /* display: block; */
  padding: 10px 0px;
  width: 320px;
  margin-bottom: 10px;
  background: white;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  outline: none;
  height: 100px;
  color: #555;
}
.btn-container {
  display: flex;

  align-items: center;
}
.btn-1 {
  /* background: crimson; */
  padding: 3px 5px;
  border: none;
  font-size: 10px;
  outline: none;
  border-radius: 5px;
  color: crimson;
  margin-right: 20px;
}
.btn-2 {
  /* background: lightgreen; */
  padding: 3px 5px;
  border: none;
  font-size: 10px;
  outline: none;
  border-radius: 5px;
  color: lightblue;
}
input:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}
.fa-chevron-right {
  color: #1cb902;
  font-size: 1.5rem;
}
h1 {
  font-size: 1rem;
}
 .loader{
    text-align: center;
    margin: 0px auto;
} 
</style>