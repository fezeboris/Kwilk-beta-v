
<template>
  <Snavbar />
  <div class="container">
    <!-- <div class="result-container"> -->

    <div class="loader" v-if="loading">
      <Loader />
    </div>
    <div class="result">
      <div class="result-text">

        <div class="report">
          <p>{{ comments.report }}</p>
          <div class="date">
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="comment-section">
    
    <div class="comments">
      <div>
        <i class="fas fa-comment like"
          ><sup>{{ comments.number_comments }}</sup></i
        >
      </div>
      <div></div>
    </div>
  </div>
  <!-- <HomeSliderComments /> -->
  <!-- <AppRating /> -->

  <div class="main-comment">
    <div
     class="parent-comment"
      v-for="reply in replies"
      :key="reply.id"
    >

        <p>{{ reply.reporter }}</p>
        <div>{{ reply.report }}</div>
        <!-- {{ subReport.id }} -->

    
    </div>
  </div>
  <div class="sub-comment">
    <div></div>
    <!-- </div> -->
  </div>
</template>

<script>
// import HomeSliderComments from "../home/HomeSliderComments.vue";
// import AppRating from "../toolpit/AppRating.vue";
// import Reply from "../home/Reply.vue";
// import Comments from "../home/Comments.vue";
import axios from "axios";
import Snavbar from "@/components/Snavbar.vue";
import Loader from "@/components/toolpit/Loader.vue";
export default {
  
  components: {  Snavbar, Loader },
  data() {
    return {
      showModal: false,
      token: "",
      comments: [],
      replies: [],

     
     
      loading: false,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },

    async messageDetails() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/reports/messages/get/${this.token}/${this.$route.params.id}/`,
          {}
        );
        // console.log("hey child", result.data), console.log("msag", result);
  
        this.comments =  result.data,
        this.replies = result.data.report_list
       

      } catch (e) {
        console.log(e);
      }
       this.loading = false;
    },
  },
  async mounted() {
    this.token = localStorage.getItem("userInfo");

    this.messageDetails();

    // console.log(this.$route.params.id);
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
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: space-between;
  margin: 0px 40px;
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
.container {
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
.main-container {
  margin-top: 60px;
}
.case {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-gap: 10px;
  align-items: center;
  margin: 0;
}

label {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 0.8rem;
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
input,
select,
textarea {
  /* display: block; */
  padding: 10px 0px;
  width: 100%;
  height: 30px;
  border-radius: 10px;
  box-sizing: border-box;
  border: none;
  color: #4d8144;
  outline: none;
  opacity: 0.7;
  /* z-index: 9999; */
}
input {
  background: #bbcdd8;
}
option {
  background: white;
  border: none;
  padding: 5px;
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
.fa-comment {
  margin-left: 30px;
  margin-right: 35px;
}
.like {
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
  width: 100%;
  border-radius: 5px;
  border: 1px solid #f0f0f0;
  /* padding: 5px; */
  color: rgb(7, 46, 46);
  height: auto;
  font-size: 0.9rem;
  align-items: center;
  text-align: justify;
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

/* new style */
.message_header {
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  margin: 0px 15px;
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
</style>