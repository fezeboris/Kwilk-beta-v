<template>
  <Navbar />
  <div class="patient-request">
    <div class="request-header">
      <p>Patient Requests</p>
      <small>Users who liked up with Experts</small>
    </div>

    <div class="request-main-content">
      <div class="request" v-for="request in requestLists" :key="request.id">
        <div class="request_text">
          <div class="header_request">
            <div class="info">
              <p class="date">{{request.date_of_demand}}</p>
              <p class="username">{{request.username}}</p>
              <p class="email">{{request.user_email}}</p>
              <p class="phone">{{request.phone_number}}</p>
            </div>

            <div class="info2">
              <p class="type">{{request.type_help}}</p>

              <p class='status'>{{request.status}}</p>
            </div>
          </div>
          <div class="request_contain">
            <p>{{request.message}}</p>
          </div>
        </div>
        <router-link :to="'/patient-request-update/' + request.id">
        <div class="update">
          <i class="far fa-edit"></i>
        </div>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  components: {
    Footer,
    Navbar,
  },
  data() {
    return {
      token: "",
      requestLists: [],
    };
  },

  methods: {
    async patientRequest() {
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
  padding: 30px 10px;
  border-radius: 10px;
}

.request-main-content {
  margin-top: 80px;
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
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
small {
  color: #8ba0ae;
  font-size: 0.8rem;
  /* margin-bottom: 20px; */
  line-height: 0.5rem;
}
.request {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  margin:10px 0px;
  border-radius: 5px;
}
.request_contain {
  padding: 10px;
  text-align: justify;
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
}
.update {
  padding: 20px;
}
.date {
  color: rgb(90, 85, 85);
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
}
/* .type {
  color: rgb(85, 155, 179);
} */
.status {
  color: lightblue;
}
.update i {
  color: lightgreen;
  font-size: 1.3rem;
  margin-top: 30px;
}
.header_request {
  display: flex;
  justify-content: space-between;
}
.info, .info2 {
  margin-right: 30px;
  padding: 5px;
  color: lightblue;
}
</style>