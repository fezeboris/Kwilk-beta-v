<template>
  <EducationNav />
  <hr style="border-top: dotted 1px; color: #8ba0ae; width: 100%" />
  <div class="button-switch">
    <div class="education-btn">
      <button
        :class="{ active: showVideos === true }"
        @click="showVideos = true"
      >
        <a href="#">Article</a>
      </button>


      <button
        @click="showVideos = false"
        :class="{ active: showVideos === false }"
      >
        <a href="#">Videos</a>
      </button>
    </div>
  </div>
  
  <div class="education" @click="showModal = false">
    <div class="loader" v-if="loading">
      <Loader />
    </div>

    <div
      class="education-body"
      v-for="education in educations"
      :key="education.id"
    >
      <!-- <ConfirmationDeleteVideo/> -->
      <div v-if="showVideos" class="aticle">
        <div v-if="education.type_education == 'text'">
          <div class="delete" v-if="job == 'clerk'">
           <button @click="deleteVideo(education.id)">delete</button>
          </div>
          <p class="text-title">{{ education.title }}</p>
          <p class="date">Uploaded on: {{ education.uploaded_on }}</p>
          <a :href="education.link" target="_blank">
            {{ $t("education.Nav.readM") }}</a
          >
        </div>
      </div>

      <div v-else class="education-message">
        <div v-if="education.type_education == 'video'">
          <div class="delete" v-if="job == 'clerk'">
            <div class="delete">
              <button @click="deleteVideo(education.id)">delete</button>

              <!-- <button @click.prevent="deleteArticle(education.id)">delete</button> -->
            </div>
            <!-- <button @click.prevent="deleteVideo(education.id)">delete</button> -->
          </div>
          <p class="title">{{ education.title }}</p>
         
          <iframe
            target="blank"
            :src="education.link"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
           <p class="date">Uploaded on: {{ education.uploaded_on }}</p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer.vue";
import EducationNav from "../education/EducationNav.vue";
import Loader from "@/components/toolpit/Loader.vue";
import Swal from "sweetalert2";
// import ConfirmationDeleteVideo from '@/components/toolpit/ConfirmationDeleteVideo.vue'
export default {
  components: {
    Footer,
    EducationNav,
    Loader,
    // ConfirmationDeleteVideo
  },
  data() {
    return {
      showVideos: false,
      showModal: false,
      token: "",
      educations: "",
      job: "",
      loading: false,
      vID: ''
    };
  },
  methods: {
    getDate(date) {
      this.currentDate = date;
    },

    async updateEducation() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/education/get/${this.token}/`
        );
        // console.log(result.data.education_list);
        this.educations = result.data.education_list;
        // console.log(result);
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
    async deleteArticle(id) {
      this.loading = true;

      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/education/delete/${this.token}/${id}/`,
          {
            deleted: "True",
          }
        );
        window.location.reload();
        return result;
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
    async deleteVid() {
      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/education/delete/${this.token}/${this.vID}/`,
          {
            deleted: "True",
          }
        );
        window.location.reload();
        console.log(result);
        // console.log(result.data.education_list);
      } catch (e) {
        console.log(e);
      }
    },
     deleteVideo(id) {
      this.vID = id;
      console.log( this.vID)
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
          
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          this.deleteVid()
        }
      });
      
    },
    async handleGetStatus() {
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/job/obtain/${this.token}/`
        );

        this.job = result.data.job;
        // console.log(result)
      } catch (e) {
        console.log(e);
      }
    },
       callbackFunction(val) {
         this.showModal = val;
    }
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    //    console.log(this.currentDate)
    this.updateEducation();

    this.handleGetStatus();

     let user = localStorage.getItem("userInfo");
    if (!user) {
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style  scoped>
.education {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  margin-top: 50px;
  padding: 30px 10px;
  border-radius: 10px;
  text-align: justify;
}

.education-text p {
  margin: 10px 0px 7px 0px;
  color: #3f3d3d;
  font-size: 1.1rem;
  line-height: 0rem;
  font-weight: bold;
  letter-spacing: 0px;
}
small {
  color: #8ba0ae;
  font-size: 0.6rem;
  line-height: 0px;
}
.education-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
}
.button-switch {
  background: white;
  width: 100%;
  position: fixed;
}
.education-btn {
  background: rgba(5, 198, 82, 0.54);
  padding: 5px 5px;
  margin: 20px 5px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 30px;

  right: 0;
}

.education-btn button a,
button {
  text-decoration: none;
  color: black;
  font-size: 0.7rem;
}

.active {
  background-color: #ffffff;
  border-radius: 15px;
  color: black;
  padding: 5px 5px;
  height: 28px;
  width: 50px;
}

.education-message {
  max-width: 420px;
  margin: 20px 0px;
}
iframe {
  width: 100%;
  margin-bottom: 10px;
}
.title {
  font-size: 1.2rem;
  font-weight: bold;
}
.date {
  color: lightskyblue;
  font-size: .8rem;
}
a {
  color: mediumblue;
  font-size: 1.2rem;
}
a:hover {
  color: crimson;
}
.text-title {
  font-size: 1.1rem;
  /* font-style: oblique; */
}
.aticle {
  padding: 10px 5px;
}
/* .delete button {
  background: crimson;
  border-radius: 5px;
  color: white;
  width: 60px;
  text-align: center;
  margin-bottom: 10px;
  outline: none;
} */

.delete {
  text-align: right;
}

* {
  box-sizing: border-box;
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
  border-radius: 5px;
  /* float: right; */
  outline: none;
}

button:hover {
  opacity: 1;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}


.loader {
  text-align: center;
  margin: 0px auto;
}
</style>