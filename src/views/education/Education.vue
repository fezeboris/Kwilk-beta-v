<template>
  <Navbar />

  <div class="education">
    <div class="education-content">
      <div class="education-text">
        <p>Educational Content</p>
        <small>Together let’s fight Gender Based Violence</small>
      </div>
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
    <hr style="border-top: dotted 1px; color: #8ba0ae; width: 100%" />

    <div
      class="education-body"
      v-for="education in educations"
      :key="education.id"
    >
      <!-- <ConfirmationDeleteVideo/> -->
      <div v-if="showVideos" class="aticle">
        <div v-if="education.type_education == 'text'">
          <div class="delete"   v-if="job == 'clerk' ">
            <button
              class="delete-btn"
              onclick="document.getElementById('id01').style.display='block'"
            >
              delete
            </button>

            <div id="id01" class="modal">
              <span
                onclick="document.getElementById('id01').style.display='none'"
                class="close"
                title="Close Modal"
                >×</span
              >
              <form class="modal-content" action="/action_page.php">
                <div class="container">
                  <p>Are you sure you want to delete ?</p>

                  <div class="clearfix">
                    <button
                      type="button"
                      onclick="document.getElementById('id01').style.display='none'"
                      class="cancelbtn"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onclick="document.getElementById('id01').style.display='none'"
                      class="deletebtn"
                      @click.prevent="deleteArticle(education.id)"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <!-- <button @click.prevent="deleteArticle(education.id)">delete</button> -->
          </div>
          <p class="text-title">{{ education.title }}</p>
          <p class="date">Uploaded on: {{ education.uploaded_on }}</p>
          <a :href="education.link"  target="_blank">Read More</a>
        </div>
      </div>

      <div v-else class="education-message">
        <div v-if="education.type_education == 'video'">
          <div class="delete"  v-if="job == 'clerk' ">
            <div class="delete">
              <button
                onclick="document.getElementById('id01').style.display='block'"
              >
                delete
              </button>

              <div id="id01" class="modal">
                <span
                  onclick="document.getElementById('id01').style.display='none'"
                  class="close"
                  title="Close Modal"
                  >×</span
                >
                <form class="modal-content" action="/action_page.php">
                  <div class="container">
                    <p>Are you sure you want to delete ?</p>

                    <div class="clearfix">
                      <button
                        type="button"
                        onclick="document.getElementById('id01').style.display='none'"
                        class="cancelbtn"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onclick="document.getElementById('id01').style.display='none'"
                        class="deletebtn"
                        @click.prevent="deleteVideo(education.id)"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <!-- <button @click.prevent="deleteArticle(education.id)">delete</button> -->
            </div>
            <!-- <button @click.prevent="deleteVideo(education.id)">delete</button> -->
          </div>
          <p class="title">{{ education.title }}</p>
          <p class="date">Uploaded on: {{ education.uploaded_on }}</p>
          <iframe
            target='bla'
            :src="education.link"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
// import ConfirmationDeleteVideo from '@/components/toolpit/ConfirmationDeleteVideo.vue'
export default {
  components: {
    Footer,
    Navbar,
    // ConfirmationDeleteVideo
  },
  data() {
    return {
      showVideos: false,
      token: "",
      educations: "",
      job: '',
    };
  },
  methods: {
    getDate(date) {
      this.currentDate = date;
    },

    async updateEducation() {
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/education/get/${this.token}/`
        );
        // console.log(result.data.education_list);
        this.educations = result.data.education_list;
      } catch (e) {
        console.log(e);
      }
    },
    async deleteArticle(id) {
      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/education/delete/${this.token}/${id}/`,
          {
            deleted: "True",
          }
        );
        return result;
      } catch (e) {
        console.log(e);
      }
    },
    async deleteVideo(id) {
      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/education/delete/${this.token}/${id}/`,
          {
            deleted: "True",
          }
        );
        console.log(result);
        // console.log(result.data.education_list);
      } catch (e) {
        console.log(e);
      }
    },
     async handleGetStatus(){
      try{
      let result = await axios.get( `https://kwiklik.herokuapp.com/job/obtain/${this.token}/`)

      this.job = result.data.job
      // console.log(result)
      }catch(e){
        console.log(e)
      }
    }
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    //    console.log(this.currentDate)
    this.updateEducation();

    this.handleGetStatus();

    // Get the modal
    var modal = document.getElementById("id01");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  },
};
</script>

<style  scoped>
.education {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
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
.education-btn {
  background: rgba(5, 198, 82, 0.54);
  padding: 10px 1px;
  margin: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 40px;
}
.education-btn button a,
button {
  text-decoration: none;
  color: black;
}

.active {
  background-color: #ffffff;
  border-radius: 15px;
  color: black;
  padding: 5px 0px;
  height: 38px;
  width: 65px;
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
  font-style: italic;
}
.aticle {
  padding: 10px 5px;
}
.delete button {
  background: crimson;
  /* padding: 1px 3px; */
  border-radius: 5px;
  color: white;
  width: 60px;
  text-align: center;
  margin-bottom: 10px;
  outline: none;
}
.delete button:hover {
  background: rgb(85, 10, 25);
}
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

/* Float cancel and delete buttons and add an equal width */
.delete .cancelbtn,
.delete .deletebtn {
  float: none;
  width: 70px;
  padding: 5px;
  text-align: center;
}

/* Add a color to the cancel button */
.clearfix .cancelbtn {
  background-color: #ccc;
  color: black;
}

/* Add a color to the delete button */
.delete .deletebtn {
  background-color: crimson;
  margin-left: 20px;
}

/* Add padding and center-align text to the container */
.container {
  padding: 16px;
  text-align: center;
}
.container p {
  color: crimson;
  margin: 10px;
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  opacity: 0.9;
  top: 0;
  margin-top: 115px;
  margin-left: auto;
  margin-right: auto;
  width: 98%; /* Full width */
  height: 50%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
  border-radius: 5px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  opacity: 1;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* The Modal Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and delete button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .deletebtn {
    width: 100%;
  }
}
</style>