
<template>
  <Snavbar />
  <div class="container" @click="$emit('closeModal')">
    <!-- <div class="result-container"> -->

    <!-- <div class="loader" v-if="loading">
      <Loader />
    </div> -->
    <div class="result">
      <div class="result-text">
        <div class="message_header">
          <div>
            <h1>{{ $t("header.anonymous") }}</h1>
            <!-- {{report.id}} -->
            <small>
              <!-- Case of: -->
              <p style="color: #02b96c; font-size: 0.7rem">
                {{ mainReport.case_type }}
              </p></small
            >
          </div>
          <div class="comment">
            <div class="audio">
              <i
                class="fas fa-play play"
                style="color=#1CB902"
                @click="showAudio = !showAudio"
              ></i>
              <!-- <embed :src="mainReport.recording"> -->
              <audio
                v-if="showAudio"
                controls="controls"
                :src="mainReport.recording"
              ></audio>
            </div>
          </div>
        </div>
        <div class="report">
          <p>{{ mainReport.report }}</p>
          <div class="date">
            <small>{{ mainReport.date_abuse }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="reports-image" v-if="mainReport.image !== ''">
    <img :src="mainReport.image" alt="" />
  </div>
  <div class="container-2">
    <div class="comment-section">
      <Comments />
      <div class="comments">
        <div>
          <i class="fas fa-comment like"
            ><sup>{{ mainReport.number_comments }}</sup></i
          >
        </div>

        <div class="no_view">
          <i class="far fa-eye"><sup>{{mainReport.number_views}}</sup></i>
        </div>       
       
      </div>
    </div>
    <!-- <HomeSliderComments /> -->
    <!-- <AppRating /> -->

    <div class="main-comment">
      <div
        class="parent-comment"
        v-for="subReport in subReports"
        :key="subReport.id"
        @click.prevent="getId(subReport.id), messageDetails"
      >
        <router-link :to="`/home-slider-comments/` + subReport.id">
          <p>{{ subReport.reporter }}</p>
          <div>{{ subReport.report }}</div>
          <!-- {{ subReport.id }} -->
        </router-link>
        <div @click.prevent="getId(subReport.id)" class="reply">
          <p @click="showModal = true">{{ $t("header.reply") }}</p>
        </div>
      </div>
      <!-- <Reply /> -->
    </div>
    <div class="sub-comment" v-if="showModal">
      <keep-alive>
        <div class="keep">
          <textarea
            v-model="reply"
            placeholder=" Enter your comment"
            autofocus
          ></textarea>
        </div>
      </keep-alive>
      <div >
        <div class="loader" v-if="loading">
          <Loader />
        </div>
        <div v-else class="reply-btn">
          <p class="btn1" @click="showModal = false">cancel</p>
          <p class="btn2" @click.prevent="replyComment">comment</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HomeSliderComments from "../home/HomeSliderComments.vue";
// import AppRating from "../toolpit/AppRating.vue";
// import Reply from "../home/Reply.vue";
import Comments from "../home/Comments.vue";
import axios from "axios";
import Snavbar from "@/components/Snavbar.vue";
import Loader from "@/components/toolpit/Loader.vue";
export default {
  props: ["comment"],
  components: {
    Comments,
    //  Reply,
    Snavbar,
    Loader,
  },
  data() {
    return {
      showModal: false,
      token: "",
      mainReport: [],
      subReports: [],
      id: "",

      messageDetailsId: "",
      reply: "",
      showAudio: false,
      loading: false,
    };
  },
  methods: {
    getId(id) {
      // localStorage.setItem("messageId", id);
      this.id = id;
      // console.log("hello", id);
      // this.messageDetailsId = localStorage.getItem("messageId");
      // this.modalOpenID = localStorage.getItem("messageId");
      // console.log(this.messageDetailsId);
    },

    async getMessages() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/reports/messages/get/${this.token}/${this.$route.params.id}`,
          {}
        );

        // console.log(result.data);
        (this.mainReport = result.data),
          (this.subReports = result.data.report_list);
        // console.log('main re',result);
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
    async replyComment() {
      this.loading = true;
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/reports/messages/create/${this.token}/${this.id}/`,
          {
            report: this.reply,
          }
        );

        this.reply = "";

        this.showModal = false;
        window.location.reload();
        // console.log(result);
        return result
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },

    back() {
      this.$router.go(-1);
    },
  },
  async mounted() {
    this.token = localStorage.getItem("userInfo");

    this.getMessages();

    // console.log(this.$route.params.id)
  },
  // reports comments===============================================
};
</script>

<style scoped>
.background {
  background: #ffff;
  width: 100%;
  position: fixed;
  z-index: 9999;
  padding-top: 7px;
  opacity: 1;
  padding-bottom: 15px;
}
.message_header {
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-gap: 150px;
  align-items: center;
  margin: 0px 10px;
}
nav {
  display: flex;
  justify-content: space-between;
  margin: 15px 20px;
  justify-items: center;
}
.login-profil-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: yellow;
}
.popup {
  position: fixed;
  width: 120px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
  z-index: 9999;
  opacity: 1;
  right: 0;
  margin: 0px 10px;
  transition: ease-in-out 0.9s;
  padding: 20px 10px;
  background-color: #ffff;
  text-align: left;
}
a:hover {
  color: #8ba0ae;
  text-decoration: none;
}
.fa-arrow-left {
  font-size: 1.5rem;
  margin: 10px 0;
}
.container,
.container-2 {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding-top: 28px;
  border-radius: 10px;
}
.case-container {
  background: #bbcdd8;
  opacity: 0.7;
  padding-bottom: 10px;
}
/* .main-container {
  margin-top: 60px;
} */
.case {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 10px;
  align-items: center;
  margin: 0;
}

.result-container {
  margin: 20px 0px;
}
.comments-header {
  background-color: #e0d88d;
  /* opacity: 0.29; */
  color: #000;
  width: 70px;
  padding: 2px;
  border-radius: 5px;
}
.comments-header p {
  opacity: 1;
}

.result {
  display: flex;
  justify-content: space-evenly;
  margin-top: 5px;
}

.image img {
  height: 65px;
  width: 340px;
}
.text {
  color: #8ba0ae;
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
  font-weight: lighter;
  margin: 10px 0px;
}
.case small {
  margin-top: 0;
}
.audio-container {
  margin-top: 20px;
  margin-bottom: 10px;
  border-left: 1px solid #badbd3;
  padding-left: 5px;
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
  font-size: 0.6rem;
  text-align: right;
  float: right;
  margin-right: 5px;
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
  padding: 10px;
  border-radius: 50%;
  font-size: 0.7rem;
  margin: 0px;
  color: #02b96c;
}
.comments {
  display: flex;
  text-align: center;
  align-items: center;
  margin: 0 10px;
}
.reply {
  margin-top: 20px;
}
.fa-comment {
  margin-left: 30px;
  margin-right: 35px;
}
.like, .fa-eye {
  color: #bbcdd8;
  /* margin:0px 15px ; */
  font-size: 0.7rem;
  text-align: center;
  align-items: center;
}
.main-comment {
  max-width: 410px;
  background: white;
  padding: 2px;

  margin: 10px 0px;
  background: white;
  border-radius: 5px;
  /* border: 1px solid #f0f0f0; */
}
.main-comment:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 1s all ease-in-out;
}
.parent-comment {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #f0f0f0;
  padding: 5px 10px;
  margin-top: 10px;
  color: #1a1919;
  font-family: "Roboto", sans-serif;
  background: white;
  height: auto;
  font-size: 0.8rem;

  align-items: center;
  text-align: justify;
}
.parent-comment p {
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 10px;
}
.sub-comment {
  background: #ffff;
  position: fixed;
  z-index: 1; /* Sit on top */
  opacity: 1;
  top: 40%;
  width: 100%; /* Full width */
  height: 60%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: white;
  padding-top: 30px;
}
.child-comment {
  width: 90%;
  border-radius: 5px;
  border: 1px solid #f0f0f0;
  /* display: block; */
  color: rgb(7, 46, 46);
  height: auto;
  padding: 2px;
  background: rgb(233, 219, 209);
  font-size: 0.9rem;
  text-align: justify;
  margin-left: 30px;
  margin-top: 5px;
}
.child-comment:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 1s all ease-in-out;
}

.report {
  margin: 5px 15px;
  text-align: justify;
  /* font-weight: normal; */
  font-family: "Roboto", sans-serif;
  color: black;
  /* font-size: 2rem; */
  font-weight: 200;
}
.report p {
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  color: black;
  font-weight: 200;
}

.reports-image img {
  width: 100%;
  height: 100%;
}
.reports-image {
  border-bottom: 0.2px solid #f0f0f0f0;
  width: 100%;
  height: 170px;
}

/* comment section */
.comment-section {
  display: flex;
  justify-content: space-between;
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
textarea {
  padding: 10px 20px;
  width: 335px;
  margin-left: 10px;
  margin-bottom: 10px;
  background: #f0f0f0;
  box-sizing: border-box;
  border: 0.5px solid #aca7a7;
  border-radius: 5px;
  outline: none;
  height: 100px;
  color: #555;
}
.reply-btn {
  display: flex;
  justify-content: flex-end;
  margin: 10px 20px;
}
.reply-btn .btn1 {
  margin: 0 20px;
  color: crimson;
  cursor: pointer;
}
.reply-btn .btn2 {
  color: lightblue;
  cursor: pointer;
}
.reply p {
  font-size: 0.8rem;
  color: lightblue;
}
</style>