<template>
  <JobReqeustNav />
  <div class="job-request">
   
         <div class="loader" v-if="loading">
            <Loader/>
        </div>
    <div class="request-main-contain" >
      <div class="request-content" v-for="job in jobRequest" :key="job.id">
        <div class="request-profil"></div>
        <div class="request-info">
          <p style="font-weight: bold">{{job.username}}</p>
          <small>{{job.phone}}</small>
          <br />
          <p>{{ $t('jobRequest.p') }}</p>
          <small>{{job.type_job}}</small>
          <div class="btn" v-if="job.status == 'Pending'">

          <div class="loader" v-if="loading">
            <Loader/>
        </div>

         <div v-else>
            <button  class="btn1" @click.prevent="jobAccept(job.id)">{{ $t('jobRequest.btn1') }}</button>
            <button  class="btn2"  @click.prevent="jobDecline(job.id)">{{ $t('jobRequest.btn2') }}</button>
            </div>
          </div>
          <h2 class="confirmed" v-if="job.status == 'Confirmed'">{{ $t('jobRequest.btn3') }}</h2>
          <h2 class="declined" v-if="job.status == 'Declined'">{{ $t('jobRequest.btn4') }}</h2>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer.vue";
import JobReqeustNav from "../requests/JobRequestNav.vue";
import Loader from '@/components/toolpit/Loader.vue'
export default {
  components: {
    Footer,
    JobReqeustNav,
    Loader
  },
  data() {
    return {
        token: '',
        jobRequest: [],
        id: '',
        loading: false,

        
    };
  },
  methods: {
    async handleGetJob() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/job/get/${this.token}/`
        );

        this.jobRequest = result.data.job_list;
     
        // console.log( result.data.job_list)
       this.loading = false;
       
      } catch (e) {
        console.log(e);
      }
       
    },
    async jobAccept(id) {
       this.loading = true;
      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/job/update/${this.token}/${id}/`,{
              request_status: 'Confirmed'
          }
        );

         this.loading = false;
        window.location.reload();
       return result
      } catch (e) {
        console.log(e);
         this.loading = false;
      }
    },
    async jobDecline(id) {
       this.loading = true;
      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/job/update/${this.token}/${id}/`,{
              request_status: 'Declined'
          }
        );

        this.loading = false;
         window.location.reload();
        return result
      } catch (e) {
        console.log(e);
         this.loading = false;
      }
    },


  },
    mounted(){
    this.token = localStorage.getItem("userInfo");

    this.handleGetJob();
  }
};
</script>

<style  scoped>
.job-request {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 30px 10px;
  border-radius: 10px;
}

.request-main-contain {
  margin-top: 20px;
}
.request-header {
  margin-top: 10px;
  position: fixed;
  width: 100%;
  height: 60px;
  background: white;
}
.request-header p {
  margin: 10px 25px 10px 0px;
  color: #3f3d3d;
  font-size: 1.3rem;
  line-height: 0rem;
  font-weight: bold;
}
.request-info p {
  margin-bottom: 0px;
  font-size: 0.9rem;
}
.request-info small {
  margin-bottom: 0px;
  line-height: 0px;
  color: #8ba0ae;
}
small {
  color: #8ba0ae;
  font-size: 0.8rem;
  /* margin-bottom: 20px; */
  line-height: 0.5rem;
}
.request-profil {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background-color: #c4c4c4;
  /* margin-bottom: 30px;  */
  margin: 10px;
  padding-top: 10px;
}

.btn {
  padding: 25px 0px;
}
.btn1,
.btn2 {
  margin-right: 10px;
  width: 100px;
  height: 30px;
  border-radius: 13px;
  border: none;
  outline: none;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.btn1 {
  background: rgba(17, 163, 93, 0.71);
  color: #fff;
}
.btn1:hover{
    background: rgba(9, 97, 54, 0.71);
    box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
}
.btn2:hover{
    background: #f0f0f0f0;
    box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
}
.request-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #8ba0ae;
}
.confirmed{
    color: white;
    /* text-align: right; */
    background: lightgreen;
    padding: 3px 5px;
    width: 80px;
    text-align: center;
    border-radius: 5px;
    float: right;
}
.declined{
   color: white;
    /* text-align: right; */
    background: crimson;
    padding: 3px 5px;
    width: 80px;
    text-align: center;
    border-radius: 5px;
    float: right;  
}

 .loader{
    text-align: center;
    margin: 0px auto;
} 
</style>