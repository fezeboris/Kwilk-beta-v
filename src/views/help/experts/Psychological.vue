<template>
<Snavbar/>
  <div class="specialist">
    
    <div class="seek-help">
      <p>Psychological Health Specialist</p>
      <small>Seek for Help</small>
    </div>

    <div class="request-main-contain">
      <div class="specialist-content">
        <div class="specialist-login-profil-img"></div>
        <div class="doctor">
          <div class="doctor-info">
            <h3 class="reach-out">Reach Out</h3>
            <p>Dr Patrick Okwen</p>
            <h6>Medical Doctor, Pediatrist</h6>
            <p>I'm Available</p>
            <p>
              On <span>Monday, Tuesday, Wednesday, Thursday and Friday</span>
            </p>
            <h5>Yaounde, Cameroon</h5>
          </div>
        </div>
      </div>
      <div class="specialist-content">
        <div class="specialist-login-profil-img"></div>
        <div class="doctor">
          <div class="doctor-info">
            <h3 class="reach-out">Reach Out</h3>
            <p>Dr Patrick Okwen</p>
            <h6>Medical Doctor, Pediatrist</h6>
            <p>I'm Available</p>
            <p>
              On <span>Monday, Tuesday, Wednesday, Thursday and Friday</span>
            </p>
            <h5>Yaounde, Cameroon</h5>
          </div>
        </div>
      </div>
      <div class="specialist-content">
        <div class="specialist-login-profil-img"></div>
        <div class="doctor">
          <div class="doctor-info">
            <h3 class="reach-out">Reach Out</h3>
            <p>Dr Patrick Okwen</p>
            <h6>Medical Doctor, Pediatrist</h6>
            <p>I'm Available</p>
            <p>
              On <span>Monday, Tuesday, Wednesday, Thursday and Friday</span>
            </p>
            <h5>Yaounde, Cameroon</h5>
          </div>
        </div>
      </div>
      <div class="specialist-content">
        <div class="specialist-login-profil-img"></div>
        <div class="doctor">
          <div class="doctor-info">
            <h3 class="reach-out">Reach Out</h3>
            <p>Dr Patrick Okwen</p>
            <h6>Medical Doctor, Pediatrist</h6>
            <p>I'm Available</p>
            <p>
              On <span>Monday, Tuesday, Wednesday, Thursday and Friday</span>
            </p>
            <h5>Yaounde, Cameroon</h5>
          </div>
        </div>
      </div>
      <div class="specialist-content">
        <div class="specialist-login-profil-img"></div>
        <div class="doctor">
          <div class="doctor-info">
            <h3 class="reach-out">Reach Out</h3>
            <p>Dr Patrick Okwen</p>
            <h6>Medical Doctor, Pediatrist</h6>
            <p>I'm Available</p>
            <p>
              On <span>Monday, Tuesday, Wednesday, Thursday and Friday</span>
            </p>
            <h5>Yaounde, Cameroon</h5>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";
import Snavbar from '@/components/Snavbar.vue'
export default {
  components: {
    Footer,
    Snavbar
  },
  data(){
      return{
          token: '',
          help: [],
      }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async getPsychoHelp() {
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/help/get/${this.token}/`
        );
        // console.log(result.data.education_list);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    //    console.log(this.currentDate)
    //   this.getPsychoHelp();
  },
};
</script>

<style scoped>
.specialist {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 30px 10px;
  border-radius: 10px;
}

.request-main-contain {
  margin-top: 80px;
}
.seek-help {
  /* margin-top: 50px; */
  position: fixed;
  width: 100%;
  height: 90px;
  background: white;
}
.seek-help p {
  margin: 10px 25px 10px 0px;
  color: #3f3d3d;
  font-size: 1.1rem;
  line-height: 0.2rem;
  font-weight: bold;
  letter-spacing: 0px;
}
small {
  color: #c4c4c4;
  font-size: 0.8rem;
  letter-spacing: 0px;
  /* margin: 0; */
  margin-bottom: 20px;
  /* line-height: 0.5rem; */
}
h6 {
  color: #c4c4c4;
  margin-top: 0rem;
}
h5 {
  font-size: 0.8rem;
}
.specialist-content {
  display: flex;
  flex-direction: row;
  padding: 5px 8px;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  width: auto;
  height: auto;
  border: 1px solid #c4c4c4;
  line-height: 2px;
}
.specialist-login-profil-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 5px;
  margin-left: 0px;
  background-color: skyblue;
}
.doctor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* .doctor-info{
    margin-right: 0px;
} */
.doctor-info p {
  font-weight: bold;
  letter-spacing: 1px;
  margin: 10px 0;
}
.doctor-info small {
  font-size: 0.8rem;
  line-height: 10px;
}
.doctor-info span {
  color: #1cb902;
  font-size: 8px;
}
.reach-out {
  text-align: right;
  margin-top: 0px;
  color: #1cb902;
}

/* .doctor{
    margin-top: 20px;
} */
</style>