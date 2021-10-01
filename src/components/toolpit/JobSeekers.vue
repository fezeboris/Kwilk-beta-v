<template>
  <div class="main-container">
    <label class="lable">{{ $t("jobSeekers.label") }}</label>
    <select v-model="jobType" required>
      <option value="rider">{{ $t("jobSeekers.options.rider") }}</option>
      <option value="doctor">{{ $t("jobSeekers.options.doctor") }}</option>
      <option value="Psychologist">{{ $t("jobSeekers.options.psychologist") }}</option>
      <option value="consultant">{{ $t("jobSeekers.options.consultant") }}</option>
      <option value="health_worker">{{ $t("jobSeekers.options.health") }}</option>
    </select>
     <label>{{ $t("jobSeekers.label2") }}</label>
    <input type="text" v-model="availability" />
     <label>{{ $t("jobSeekers.label3") }}</label>
    <input type="text" v-model="location" />

      <div class="btn-container">
       <div class="loader" v-if="loading">
            <Loader/>
        </div>
        <button v-else class="apply-btn" @click.prevent="applyJob">{{ $t("jobSeekers.btn") }}</button>
      </div>
  </div>


</template>

<script>
import axios from 'axios'
import Loader from '@/components/toolpit/Loader.vue'
export default {
  components:{
    Loader
  },
  data() {
    return {
      
      jobType: '',
      location: '',
      token: '',
      availability: '',
       loading: false,



    };
  },
   methods: {
    async applyJob() {
      this.loading = true;
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/job/create/${this.token}/`,
          {
            type_job: this.jobType,
            availability: this.availability,
            location: this.location,


          }
        
        );
        
        if(result.data == 201){
          this.$router.push({name:'Profile'})
        }
        
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
  },
   mounted() {
    this.token = localStorage.getItem("userInfo");

    
  },
};
</script>

<style scoped>
/* .showModal{
    float: right;
} */
.main-container {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
}

label {
  color: #676e76;
  display: inline-block;
  margin-top: 25px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  font-weight: 800;
  font-style: normal;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  margin-bottom: 10px;
  background: #ecf4f2;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #555;
}
option{
  width: 100px;
  /* color: green; */
}
input:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}
.btn-container{
  margin: 0px auto;
  text-align: center;
}
.apply-btn{
  width: 80px;
  background: black;
  margin: 10px 0px;
  border-radius: 5px;
  color: white;
  padding: 3px 5px;
}
.apply-btn:hover{
  background: rgb(63, 52, 52);
}
 .loader{
    text-align: center;
    margin: 0px auto;
}         

</style>