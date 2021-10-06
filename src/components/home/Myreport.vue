<template>
  <Navbar />
  <div class="home-slider" @click="showModal = false">
    <div class="main-container">
      <hr />
      <!-- <div class="case-container"> 
         <p>Filter By:</p>

        <div class="case">
          <div class="case-type">
            <label>Case Type</label>
            <select v-model="caseType">
              <option value="caseType">rape</option>
              <option value="caseType">Domestic voilence</option>
              <option value="caseType">Discrimination</option>
              <option value="caseType">Haressment</option>
              <option value="caseType">Others</option>
            </select>
          </div>
          <div class="gender">
            <label>Gender</label>
            <select v-model="gender">
              <option value="caseType">Male</option>
              <option value="caseType">Female</option>
            </select>
          </div>
          <div class="case-location">
            <label>Location</label>
            <select v-model="location">
              <option value="location">Biyem-Assi</option>
              <option value="location">Messassi</option>
              <option value="location">Ngoa-Ekele</option>
              <option value="location">Efoulan</option>
            </select>
          </div>

          <div class="case-time">
            <label>Time</label>
            <select v-model="time">
              <option value="location">Start</option>
            </select>
          </div>
          <div class="case-time">
            <label>.</label>
            <select v-model="time">
              <option value="location">End</option>
            </select>
          </div>
        </div> 
      </div> -->

      <div class="loader" v-if="loading">
        <Loader />
      </div>

      <div
        class="result-container"
        v-for="(report, index) in reportList.slice().reverse()"
        :key="index"
      >
        <router-link :to="`/home-slider/detail/` + report.report_id">
          <div class="result">
            <div class="result-text">
              <div class="message_header">
                <div>
                  <h1>{{ $t("header.anonymous") }}</h1>
                  <!-- <h1>Anonymous</h1> -->
                  <!-- {{report.id}} -->
                  <small>
                    <!-- Case of: -->
                    <p style="color: #02b96c; font-size: 0.7rem">
                      {{ report.case_type }}
                    </p></small
                  >
                  <!-- <div class="date">
                    <small>{{ report.date_abuse }}</small>
                  </div> -->
                </div>

                <div class="comment">
                  <!-- <div v-if="report.recording == null">
                  <i>No Audio</i>
                </div> -->
                  <div class="audio">
                    <i
                      class="fas fa-play play"
                      style="color=#1CB902"
                      @click="showAudio = !showAudio"
                    ></i>
                    <audio
                      v-if="showAudio"
                      controls="controls"
                      :src="report.recording"
                    ></audio>
                  </div>
                </div>
                <div>
                  <div class="comments">
                    <div class="no_comment">
                      <i class="fas fa-comment like"
                        ><sup>{{ report.number_comments }}</sup></i
                      >
                    </div>
                    <div class="no_view">
                      <i class="far fa-eye"
                        ><sup>{{ report.number_views }}</sup></i
                      >
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="report">
                <p>{{ report.report }}</p>
                <div class="report-footer">
                  <div class="date">
                    <small>{{ report.date_abuse }}</small>
                  </div>

                  <div class="delete">
                    <button @click="deleteMyReport(report.report_id)">delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="report-image" v-if="report.image !== ''">
            <img :src="report.image" alt="" />
          </div>
        </router-link>
        <hr style="margin-top: 10px" />
      </div>
    </div>

    <!-- <div class="map">
      <div class="map-btn">
        <router-link to="/map"
          ><i class="fas fa-map-marker-alt"></i
        ></router-link>
      </div>
    </div> -->

    <!-- <svg width="200" height="300" viewBox="-1 0 101 100">
            <path d="M20,0 L80,0 L100,60 L50,100 L0,60z" stroke="#BBCDD8" fill="#BBCDD8" />
            </svg> -->
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
// import { useRoute } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Loader from "@/components/toolpit/Loader.vue";
import Swal from "sweetalert2";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
    Loader,
  },
  data() {
    return {
      token: "",
      reportList: [],
      showAudio: false,
      loading: false,
      userId: "",
      reportId: '',
    };
  },
  methods: {
    async getReports() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/reports/get/${this.token}/${this.userId}/`,
          {}
        );
        this.reportList = result.data.report_list;

        // console.log(result.data.report_list);
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
    async reportDelete() {
      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/reports/delete/${this.token}/${this.reportId}/`,
          {
            deleted: "True",
          }
        );
       this.$router.push({ name: "Myreport" });
        return result;
      } catch (e) {
        console.log(e);
      }
    },
    deleteMyReport(id){
        this.reportId = id
         Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.reportDelete()
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          
        }
      });
    }
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    this.userId = localStorage.getItem("userId");
    // console.log(this.userId);
    this.getReports();

    let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
 

<style scoped>
.home-slider {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 30px 0px;
  border-radius: 10px;
}
.request-header p {
  margin: 0;
  color: #3f3d3d;
  font-size: 1.3rem;
  padding: 4px 5px;
  line-height: 0rem;
  font-weight: bold;
  background: white;
}
.request-header {
  margin-top: 10px;
  position: fixed;
  width: 100%;
  height: 40px;
  padding-top: 10px;
  background: white;
  opacity: 1;
  /* z-index: 9999; */
}
.request-header small {
  padding: 3px 5px;
}
select {
  font-size: 0.5rem;
}
small {
  color: #8ba0ae;
  font-size: 0.8rem;
  /* margin-bottom: 20px; */
  line-height: 0.5rem;
}
.case-container {
  background: #bbcdd8;
  opacity: 0.7;
  padding-bottom: 10px;
}

.case {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 10px;
  align-items: center;
  margin: 0;
}

.result {
  display: flex;
  justify-content: space-evenly;
  margin-top: 5px;
}
.result-container {
  margin: 20px 0px;
  /* display: flex;
  flex-direction: column-reverse; */
}
.message_header {
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-gap: 65px;
  align-items: center;
  margin: 0px 10px;
}
.report {
  margin: 5px 15px;
  text-align: justify;
  /* font-weight: normal; */
  font-family: "Roboto", sans-serif;
  color: black;
  font-weight: 200;
}
.report p {
  font-size: 0.9rem;
}

/* .image img {
  height: 65px;
  width: 340px;
} */
.report-image img {
  width: 100%;
  height: 100%;
}
.report-image {
  border-bottom: 0.2px solid #f0f0f0f0;
  width: 100%;
  height: 170px;
}
.text {
  color: #8ba0ae;
}
.result-text {
  /* border: 1px solid #aeb3b6; */
  padding: 5px 0px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
}
.result-text h1 {
  font-size: 1rem;
  line-height: 0.7rem;
  font-weight: normal;
  margin: 0px;
}
.result-text p {
  font-weight: normal;
  line-height: 0.9rem;
  font-size: 0.8rem;
  /* font-weight: lighter; */
  margin: 10px 0px;
}
.case small {
  margin-top: 0;
}
.audio-container {
  margin-top: 20px;
  margin-bottom: 10px;
  border-left: 1px solid #badbd3;
  /* padding-left: 5px; */
  /* text-align: center; */
}
.audio {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
.date small {
  color: #969899;
  font-size: 0.7rem;
  text-align: right;
  /* margin-right: 5px; */
}
.date p b {
  color: black;
}
.svg {
  background: #c7f6d4;
  border-radius: 0 5px 5px 0px;
  height: 20px;
  width: 90px;
  color: #c7f6d4;
  padding: 0;
  margin: 0;
  left: 0;
}

.play {
  background: #c7f6d4;
  padding: 8px;
  border-radius: 50%;
  font-size: 0.7rem;
  margin: 0px;
  color: #02b96c;
}
.comments {
  display: flex;
  text-align: center;
  align-items: center;
}
.fa-comment {
  margin-left: 45px;
  margin-right: 15px;
}
.like,
.fa-eye {
  color: #bbcdd8;
  /* margin:0px 15px ; */
  font-size: 0.7rem;
  text-align: center;
  align-items: center;
}
a {
  text-decoration: none;
}
audio {
  width: 100px;
  /* background: lightgreen; */
  margin: 0;
  text-align: center;
  height: 30px;
}
i sup {
  color: rgb(211, 87, 197);
  /* margin-bottom: 10px; */
  font-size: 0.6rem;
}
.loader {
  text-align: center;
  margin: 0px auto;
}
.report-footer {
  display: flex;
  justify-content: space-between;
}
.delete button {
  background-color: crimson;
  color: white;
  /* padding: 3px 0px ; */
  margin: 0px 5px;
  border: none;
  cursor: pointer;
  text-align: center;
  width: 40px;
  opacity: 0.9;
  font-size: 0.7rem;
  border-radius: 5px;
  /* float: right; */
  outline: none;
}
</style>