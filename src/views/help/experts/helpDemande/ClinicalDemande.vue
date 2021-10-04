<template>


  <div class="popup">
    <h1>{{ $t('demandes.clinical') }}</h1>
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
      <!-- <button class="btn-1" @click.prevent="showModal = false">{{ $t('demandes.cancel') }}</button> -->
      <button class="btn-2" @click.prevent="demandHelp">{{ $t('demandes.send') }}</button>
    </div>
    <Date :Cdate="getDate" :Ctime="getTime" />
  </div>
  
</template>

<script>
import axios from "axios";
import Date from "@/components/toolpit/Date.vue";
import Loader from '@/components/toolpit/Loader.vue'
import Swal from 'sweetalert2'
export default {
  components: {
    Date,
    Loader
  },
  
  data() {
    return {
      // showModal: false,
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

     doSomething() {
      Swal.fire({
        position: "center-end",
        icon: "success",
        title: "clinical request send Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    async demandHelp() {
      this.loading = true;
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/help/create/${this.token}/`,
          {
            type_help: "clinical",
            message: this.demand,
            date_of_demand: this.currentDate,
          }
        )
        this.demand = ""
        
          this.doSomething()
          this.$router.push({name:'Help'})
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
  margin: 0px auto;
  background: white;
 
  padding: 28px 10px;
  border-radius: 10px;

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
  padding: 10px ;
  width: 95%;
  margin-bottom: 10px;
  background: #f0f0f0;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  outline: none;
  height: 250px;
  color: #555;
}
.btn-container {
text-align: center;
}

.btn-2 {
  /* background: lightgreen; */
  padding: 3px 5px;
  border: none;
  font-size: 1.2rem;
  outline: none;
  border-radius: 5px;
  color: lightblue;
}
input:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}

h1 {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
 .loader{
    text-align: center;
    margin: 0px auto;
} 
</style>