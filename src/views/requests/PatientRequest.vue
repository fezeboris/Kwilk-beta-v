<template>
  <PatientNav />
  <div class="patient-request">
    <div class="request-main-content">
      <div class="loader" v-if="loading">
        <Loader />
      </div>
      <div class="request" v-for="request in requestLists" :key="request.id">
        <div class="header_request">
          <div class="info">
            <p class="username" style="font-size: 0.9rem">
              {{ request.username }}
            </p>
            <p class="email" style="color: grey; font-size: 0.8rem">
              {{ request.user_email }}
            </p>
            <p class="phone" style="color: grey; font-size: 0.8rem">
              {{ request.phone_number }}
            </p>
            <p class="type" style="color: grey; font-size: 0.8rem">
              help type: {{ request.type_help }}
            </p>
          </div>

          <div class="info2" >
            <p class="status resolve" v-if="request.status == 'Resolved'">
               {{ request.status }}
            </p>
            <p class="status reject" v-if="request.status == 'Rejected'">
               {{ request.status }}
            </p>
            <p class="status unresolve" v-if="request.status == 'Unresolved' ">
               {{ request.status }}
            </p>
          </div>
        </div>

        <div>
          <p>{{ request.message }}</p>
        </div>
         <!-- <div class="loader" v-if="answerloader">
        <Loader />
      </div> -->
      <div> 
        <div class="status" v-if="request.status == 'Unresolved'">
          <p class="btn1" @click="accept(request.id)">resolve</p>
          <p class="btn2"  @click="reject(request.id)">reject</p>
        </div>
        </div>
        <p class="date" style="color: grey; font-size: 0.6rem">
          {{ request.date_of_demand }}
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import PatientNav from "../requests/PatientNav.vue";
import axios from "axios";
import Loader from "@/components/toolpit/Loader.vue";

export default {
  components: {
    Footer,
    PatientNav,
    Loader,
  },
  data() {
    return {
      token: "",
      requestLists: [],
      loading: false,
      status: "",
      answerloader: false
    };
  },

  methods: {
    async accept(id) {

      try{
      // this.answerloader = true;
        let result = await axios.put(
            `https://kwiklik.herokuapp.com/help/update/${this.token}/${id}/`,{

                 status: "Resolved"
            }  
        )
         window.location.reload()
        // return result
        // this.answerloader = false;
        console.log(result)
      }catch(e){
        console.log(e)
      }
    },
    async reject(id) {
      try{
      // this.answerloader = true;
        let result = await axios.put(
            `https://kwiklik.herokuapp.com/help/update/${this.token}/${id}/`,{

                 status: "Rejected"
            }  
        )
     
         window.location.reload()
        // return result
        // this.answerloader = false;
        console.log(result)
      }catch(e){
        console.log(e)
      }
    },
    async patientRequest() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/help/get/${this.token}/`
        );
        // console.log(result.data.education_list);
        // console.log(result.data.help_list);
        // console.log(result.data.help_list);
        this.requestLists = result.data.help_list;
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
    this.patientRequest();
  },
};
</script>

<style scoped>
.patient-request {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  font-size: 0.9rem;
  padding: 30px 10px;
  border-radius: 10px;
}
.request-main-content {
  margin-top: 25px;
  border-top: 1px solid #f0f0f0;
}

.resolve {
  color: lightgreen;
}
.unresolve {
  color: lightblue;
}
.reject {
  color: crimson;
}
.header_request {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.request{
  border: 1px solid #f0f0f0;
  margin: 20px 0px;
}

.loader {
  text-align: center;
  margin: 0px auto;
  align-items: center;
}
.status {
  display: flex;
  justify-content: flex-end;
}
.status p {
  margin: 0px 5px;
}
.btn1{
  color: lightgreen;
  background: #f0f0f0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 2px 3px;
  border-radius: 5px;
}
.btn2{
  color: crimson;
  background: #f0f0f0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 2px 3px;
  border-radius: 5px;
}
</style>