/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <Navbar />

  <div class="report">
    <div class="request-header">
      <p>Report Abuse</p>
      <small>Together let's fight Gender Based Violence</small>
    </div>

    <form @submit.prevent="handleSubmit">
      <hr style="border-top: dotted 1px; color: #8ba0ae; width: 100%" />
      <div class="details">
        <label>Details</label>
        <textarea required v-model="report"></textarea>
      </div>

      <!-- <Audio2 :getAudio="getUserAudio"/> -->

      <div class="parent-audio">
        <div class="main-container">
          <div id="app">
            <div>
              <button
                class="play button1"
                v-if="!isRecording"
                @click="startRecording"
              >
                <i class="fas fa-microphone"></i>
              </button>
              <button class="button1" v-else @click="stopRecording">
                <i class="fas fa-stop"></i>
              </button>
            </div>

            <div>
              <template v-if="audioSource">
                <audio :src="audioSource" controls></audio>
              </template>
            </div>
            <div>
              <div v-if="audioSource">
                <h1 class="delete" @click="deleteRecording">Delete</h1>
              </div>
              <div v-else>
                <h1>Recording</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <Image :getImage="getImages"/> -->

      <!-- ===============Image========================== -->
      <div class="body">
        <div class="image-main-container">
          <div>
            <h1>Image</h1>
          </div>

          <figure class="image-container">
            <img :src="image" />
          </figure>
          <div v-if="!image">
            <input id="upload-button" type="file" @change="onFileChange" />
            <label class="image-label" for="upload-button">
              <i class="far fa-images"></i>&nbsp;
            </label>
          </div>

          <div v-else>
            <button class="delete-btn" @click="removeImage">Delete</button>
          </div>
        </div>
      </div>

      <!-- =============================================== -->

      <div class="case">
        <div class="case-type">
          <label class="lable">Case Type</label>
          <select v-model="caseType" required>
            <option value="psychological violence">
              psychological violence
            </option>
            <option value="stalking">stalking</option>
            <option value="physical violence">physical violence</option>
            <option value="forced marriages">forced marriages</option>
            <option value="sexual violence">sexual violence</option>
            <option value="rape">rape</option>
            <option value="female genital mutilation">
              female genital mutilation
            </option>
            <option value="forced sterilisation">forced sterilisation</option>
            <option value="sexual harassement">sexual harassement</option>
          </select>
        </div>
        <div class="case-location">
          <label class="label">Date of Abuse</label>
          <input
            required
            class="input"
            type="date"
            placeholder="01-12-2021"
            v-model="dateOfAbuse"
          />
        </div>
      </div>
      <div class="checkbox-main-container">
        <div>
          <div>
            <input
              id="checkbox-1"
              v-model="bikeRequest"
              :value="true"
              class="checkbox-custom"
              name="checkbox-1"
              type="checkbox"
            />
            <label for="checkbox-1" class="checkbox-custom-label"
              >Get Prentive Paliatives</label
            >
          </div>
          <div>
            <input
              id="checkbox-2"
              v-model="legalConsultant"
              :value="true"
              class="checkbox-custom"
              name="checkbox-2"
              type="checkbox"
            />
            <label for="checkbox-2" class="checkbox-custom-label"
              >Contact Legal Consultant</label
            >
          </div>
        </div>
        <div>
          <div>
            <input
              id="checkbox-1"
              v-model="medicalDoctor"
              class="checkbox-custom"
              :value="true"
              name="checkbox-1"
              type="checkbox"
            />
            <label for="checkbox-1" class="checkbox-custom-label"
              >Get Medical Doctor</label
            >
          </div>
          <div>
            <input
              id="checkbox-2"
              v-model="psychologist"
              class="checkbox-custom"
              value="true"
              name="checkbox-2"
              type="checkbox"
            />
            <label for="checkbox-2" class="checkbox-custom-label"
              >Contact Psychologist</label
            >
          </div>
        </div>
      </div>
      <div class="submit">
        <button class="button">Submit</button>
      </div>

      <Date :Cdate="getDate" :Ctime="getTime" />

      <!-- <Geolocalisation :getPosition="getPosition"/> -->
    </form>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
// import setAuthHeader from '../../components/utils/setAuthHeader'
// import Geolocalisation from "@/components/toolpit/Geolocalisation.vue";
import Date from "@/components/toolpit/Date.vue";
// import Audio2 from '@/components/toolpit/Audio2.vue'
// import Image from "@/components/toolpit/Image.vue";

export default {
  components: {
    Footer,
    Navbar,
    Date,
    // Geolocalisation,

    // Audio2,
    // Image,
  },
  data() {
    return {
      // Audio data
      isRecording: false,
      audioSource: null,
      frequencies: null,
      audioBlob: null,
      // ===============
      // =====location==========
      location: null,
      gettingLocation: false,
      errorStr: null,
      longitude: "",
      latitude: "",
      // ==================
      showSidebar: false,
      report: "",
      image: "",
      imageFile: null,
      caseType: "",
      dateOfAbuse: "",
      bikeRequest: false,
      legalConsultant: false,
      medicalDoctor: false,
      psychologist: false,
      currentDate: "",
      currentTime: '',
    
      token: "",
      // selectedFile: null
    };
  },
  methods: {
    // Audio methods
    startRecording() {
      this.deleteRecording();
      this.isRecording = true;
      this.mediaRecorder.start();
    },
    stopRecording() {
      this.isRecording = false;
      this.mediaRecorder.stop();
    },
    deleteRecording() {
      this.audioSource = null;
    },
    // ===================================

    // =====Image=======
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);

      const file = e.target.files[0];
      this.imageFile = e.target.files[0];
      console.log(file);
    },

    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      console.log(image);

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = "";
      return e;
    },

    
    // ===================================
    async handleSubmit() {
      let formData = new FormData();
      formData.append(
        "recording",
        this.audioBlob,
        this.currentTime + '.wav'
        
      );
      formData.append('reporting', this.report)
      formData.append('parent_report', '0')
      formData.append('latitude', this.latitude)
      formData.append('longitude', this.longitude)
      formData.append('case_type', this.caseType)
      formData.append('date_abuse', this.dateOfAbuse)
      formData.append('current_date', this.currentDate)
      formData.append('doctor_request', this.medicalDoctor)
      formData.append('psy_request', this.psychologist)
      formData.append('legal_request', this.legalConsultant)
      formData.append('bike_request', this.bikeRequest)
      formData.append('image', this.imageFile,  this.currentTime + '.jpg')
      
      

      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/reports/create/${this.token}/`,
          formData,

          // {
          //   onUploadProgress: (progressEvent) => {
          //     console.log(progressEvent.loaded / progressEvent.total);
          //   },
          // }
        );

        (this.report = ""),
          (this.latitude = ""),
          (this.longitude = ""),
          (this.caseType = ""),
          (this.dateOfAbuse = ""),
          (this.currentDate = ""),
          (this.medicalDoctor = false),
          (this.psychologist = false),
          (this.legalConsultant = false),
          (this.bikeRequest = false),
          (this.audioBlob = null),
          (this.image = ""),
        console.log(result);
      } catch (e) {
        console.log(e.result);
      }
    },
    // handleSubmit(){
    //   console.log(this.audioSource)
    // },

    getDate(date) {
      this.currentDate = date;
    },
    getTime(time){
      this.currentTime = time
    }
  },
  // Audio directives
  directives: {
    visualize: {
      update(canvasElement, binding) {
        const context = canvasElement.getContext("2d");

        const width = canvasElement.width;
        const height = canvasElement.height;

        context.clearRect(0, 0, width, height);
        context.beginPath();

        const dataLength = binding.value.length;
        const sliceWidth = (width * 1.0) / dataLength;
        let x = 0;

        for (let i = 0; i < dataLength; i++) {
          const v = binding.value[i] / 128.0;
          const y = (v * height) / 2;

          if (i === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }

          x += sliceWidth;
        }

        context.lineTo(width, height / 2);
        context.stroke();
      },
    },
  },
  computed: {},
  // =================================
  mounted() {
    // console.log('token is', this.token)
    // Audio
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      initMediaRecorder.call(this, stream);
      initVisualizer.call(this, stream);
    });
    this.token = localStorage.getItem("userInfo");
    // console.log('this.token', this.currentTime);

  // var seconds = new Date().getTime()/1000
  // console.log('sec', seconds)
  },
  created() {
    //do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.location = pos;
        this.longitude = pos.coords.longitude;
        this.latitude = pos.coords.latitude;
      },
      (err) => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },
};
// ========Audio========================
function initMediaRecorder(stream) {
  const recorder = new MediaRecorder(stream);
  let chunks = [];

  recorder.addEventListener("stop", () => {
    var blob = new Blob(chunks, { type: "audio/wav" });
    chunks = [];
    this.audioSource = URL.createObjectURL(blob);
    this.audioBlob = blob
    // console.log(this.audioBlob)

  });

  recorder.addEventListener("dataavailable", (e) => {
    chunks.push(e.data);
  });

  this.mediaRecorder = recorder;
}

function initVisualizer(stream) {
  const context = new AudioContext();

  const analyser = context.createAnalyser();
  analyser.fftSize = 2048;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  const source = context.createMediaStreamSource(stream);
  source.connect(analyser);

  const updateData = () => {
    analyser.getByteTimeDomainData(dataArray);
    this.frequencies = dataArray.slice();

    requestAnimationFrame(updateData);
  };

  updateData();
}
// ========Audio========================
</script>

<style scoped>
.report {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 28px 10px;
  border-radius: 10px;
}

.request-header {
  margin-top: 0px;
  /* position: fixed; */
  width: 100%;
  background: #fff;
  padding-top: 10px;
}
.request-header p {
  margin: 10px 25px 10px 0px;
  color: #3f3d3d;
  font-size: 1.3rem;
  line-height: 0rem;
  font-weight: bold;
}
/* form{
    margin-top: 60px;
} */
small {
  color: #8ba0ae;
  font-size: 0.8rem;
  /* margin-bottom: 20px; */
  line-height: 0.5rem;
}

.recording {
  padding: 10px;
  /* background:lightgreen; */
  border-radius: 50%;
  margin-left: 10px;
}

.record {
  display: flex;
  justify-content: space-between;
  margin: 20px 10px;
  background: #f0f0f0;
  border-radius: 50px;
  padding: 0px 10px;
  align-items: center;
}

.case {
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

select,
textarea,
.input {
  display: block;
  padding: 10px 20px;
  width: 98%;
  background: #e4f4eb;
  border-radius: 10px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #3f3d3d;
  outline: none;
}
input[type="date"] {
  color: #3f3d3d;
  font-size: 0.8rem;
}

option {
  background: white;
  border: none;
  padding: 5px;
}
textarea {
  height: 90px;
  color: #3f3d3d;
  border: 1px solid #d0e1db;
  background: none;
  font-size: 0.8rem;
}
.submit {
  width: 100%;
  margin: auto;
  text-align: center;
}
.button {
  background: #d9bc23;
  border-radius: 10px;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: white;
  width: 150px;
  justify-content: center;
}
.fas {
  color: lightgreen;
  font-size: 2rem;
}

#app {
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-between;
  margin: 40px 30px;
  border-radius: 20px;
  max-width: 420px;
  height: 50px;
}

h1,
.delete {
  font-size: 1rem;
  cursor: pointer;
}

audio,
.button1 {
  width: 30%;
  
}

audio {
  width: 150px;
  margin: 0;
  text-align: center;
  /* margin-top: 25px; */
}
.button1 {
  width: 20px;
  display: block;
}
.fa-microphone {
  color: rgb(112, 216, 112);
  font-size: 1rem;
  text-align: left;
  /* margin: 30px 20px; */
  padding: 10px;
  background: #c4f2dc;
  border-radius: 50%;
}
.fa-stop {
  color: rgb(112, 216, 112);
  font-size: 1rem;
  text-align: left;
  /* margin: 30px 20px; */
  padding: 10px;
  background: #c4f2dc;
  border-radius: 50%;
}
button {
  outline: none;
}

/* =========Image styles========= */
.image-main-container {
  display: flex;
  justify-content: space-between;
  max-width: 420px;
  margin: 0 auto;
  height: 100px;
  align-items: center;
  /* padding-bottom: 10px; */
}
img {
  max-width: 80%;
  max-height: 80px;
  margin: auto;
}

.image-container {
  width: 70%;
  margin: 0;
}
.image-container img {
  /* display: block;
    position: relative; */
  max-width: 80%;
  max-height: 80px;
  margin: auto;
}
input[type="file"] {
  display: none;
}
.image-label {
  color: #1cb902;
  font-size: 1rem;
  text-align: center;
  padding: 0px;
  border-radius: 19px;
  margin: 0;
  cursor: pointer;
}
.far {
  color: rgb(112, 216, 112);
  font-size: 1rem;
  text-align: left;
  /* margin: 30px 20px; */
  padding: 10px;
  background: #c4f2dc;
  margin-right: 40px;
  border-radius: 50%;
  /* box-shadow:  0 0 8px 5px rgba(6, 214, 17, 0.6); */
}
.image-main-container h1 {
  font-size: 1rem;
  /* padding: 0px 30px 30px 30px; */
  margin: 20px 30px;
}
.delete-btn {
  margin-right: 30px;
}

.checkbox-main-container {
  display: flex;
  font-size: 0.9rem;
  justify-content: space-between;
}

.checkbox-custom {
  margin-right: 5px;
  margin-left: 10px;
}
input[type="checkbox"] {
  color: #1cb902;
  /* font-size: 0.8rem; */
}

.checkbox-custom-label {
  color: #87a18d;
  margin-top: 10px;
  /* margin-right: 20px; */
}
</style>
