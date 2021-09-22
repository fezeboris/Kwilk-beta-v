<template>
  <form>
    <div class="main-header">
      <div class="hearder">
        <div class="login-profil">
          <div class="login-profil-message">
            <box-icon
              name="left-arrow-alt"
              @click="back"
              flip="vertical"
            ></box-icon>
            <p>My Profile</p>
          </div>
        </div>
      </div>
      <div>
        <div v-if="image != '' " class="login-profil-img">
          <img :src="image" alt="" />
        </div>
        <div v-else class="login-profil-img">
          <i class="fas fa-user-circle"></i>
        </div>
      </div>
    </div>
    <hr />
    <div class="form-main-contain">
      <label>Name</label>
      <!-- <input type="email" required v-model="name" placeholder="Please enter your email adress"> -->
      <div class="p">
        <p>{{ name }} </p>
        <NameUpdate/>
      </div>

      <label>Email</label>
      <!-- <input  type="password" required v-model="email" placeholder="Enter your password"> -->
      <div class="p">
        <p>{{ email }}</p>
        <EmailUpdate/>
      </div>
      <label>Language</label>
      <!-- <input  type="password" required v-model="username" placeholder="Enter your password"> -->
      <div class="p">
        <p>{{ language }}</p>
        <LanguageUpdate/>
      </div>
      <label>Gender</label>
      <!-- <input  type="password" required v-model="gender" placeholder="Enter your password"> -->
      <div class="p">
        <p>{{ gender }}</p>
        <GenderUpdate/>
      </div>
      <label>Marital status</label>
      <!-- <input  type="password" required v-model="maritalStatus" placeholder="Enter your password"> -->
      <div class="p">
        <p>{{ maritalStatus }}</p>
        <MaritalUpdate/>
      </div>
      <label>Phone number</label>
      <!-- <input  type="password" required v-model="phoneNumber" placeholder="Enter your password"> -->
      <div class="p">
        <p>{{ phoneNumber }}</p>
        <PhoneUpdate/>
      </div>
    
      <label>Occupation</label>
      <!-- <input  type="password" required v-model="phoneNumber" placeholder="Enter your password"> -->
      <div class="p">
        <p>{{ occupation }}</p>
        <Occupation/>
      </div>
      <label>Region of residence</label>
      <!-- <input  type="password" required v-model="phoneNumber" placeholder="Enter your password"> -->
      <div class="p">
        <p>{{ regionOfResidence }}</p>
        <Region/>
      </div>
       <label>Religion</label>
      <!-- <input  type="password" required v-model="phoneNumber" placeholder="Enter your password"> -->
      <div class="p">
        <p>{{ religion }}</p>
        <Religion/>
      </div>
        <label>Date of birth</label>
      <!-- <input  type="password" required v-model="phoneNumber" placeholder="Enter your password"> -->
      <div class="p">
        <p>{{ dateOfBirth }}</p>
         <DateOfBirth/>
      </div>
      <label>Ethnicity</label>
      <!-- <input  type="password" required v-model="phoneNumber" placeholder="Enter your password"> -->
      <div class="p">
        <p>{{ ethnicity }}</p>
        <Ethnicity/>
      </div>
     <div class="toolpits">
       <router-link v-if="job !== 'patient'" to="#" class="job">{{job}}</router-link>
        <router-link v-else :to="{name: 'JobSeekers'}">Professionals ?</router-link>
        
        <router-link :to="{name: 'AppRating'}">Rate this App</router-link>
       
     </div>

    </div>
  </form>
  

  <Footer />
</template>
 
<script>
import axios from "axios";
//import SignIn from '../views/SignIn.vue'
import Footer from "./Footer.vue";
import NameUpdate from '../views/updates/profileUpdates/NameUpdate.vue'
import EmailUpdate from '../views/updates/profileUpdates/EmailUpdate.vue'
import LanguageUpdate from '../views/updates/profileUpdates/LanguageUpdate.vue'
import GenderUpdate from '../views/updates/profileUpdates/GenderUpdate.vue'
import MaritalUpdate from '../views/updates/profileUpdates/MaritalUUpdate.vue'
import PhoneUpdate from '../views/updates/profileUpdates/PhoneUpdate.vue'
import Occupation from '../views/updates/profileUpdates/OccupationUpdate.vue'
import Region from '../views/updates/profileUpdates/Region.vue'
import Religion from '../views/updates/profileUpdates/ReligionUpdate.vue'
import Ethnicity from '../views/updates/profileUpdates/Ethnicity.vue'
import DateOfBirth from '../views/updates/profileUpdates/DateOfBirth.vue'

export default {
  components: {
    Footer,
    NameUpdate,
    EmailUpdate,
    LanguageUpdate,
    GenderUpdate,
    MaritalUpdate,
    PhoneUpdate,
    Occupation,
    Region,
    Religion,
    Ethnicity,
    DateOfBirth,

   
  },
  data() {
    return {
      name: "",
      email: "",
      username: "",
      gender: "",
      maritalStatus: "",
      phoneNumber: "",
      token: "",
      image: '',
      language: "",
      regionOfResidence: "",
      religion: "",
      ethnicity: "",
      dateOfBirth: "",
      job: '',
    };
  },
  methods: {
    async handleGet() {
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/profile/get/${this.token}/`
        );
        // console.log(result.data.profile);
        (this.name = result.data.profile.name),
          (this.email = result.data.profile.email),
          (this.username = result.data.profile.name),
          (this.gender = result.data.profile.sex),
          (this.phoneNumber = result.data.profile.phone),
          (this.maritalStatus = result.data.profile.marital_status);
            this.image = result.data.profile.photo;
            this.language = result.data.profile.language;
            this.dateOfBirth = result.data.profile.date_of_birth;
            this.occupation = result.data.profile.occupation;
            this.regionOfResidence = result.data.profile.region_of_residence;
            this.ethnicity = result.data.profile.ethnicity;
            this.religion = result.data.profile.religion;
      } catch (e) {
        // console.log(e.result);
      }
    },
    async handleGetStatus(){
      try{
      let result = await axios.get( `https://kwiklik.herokuapp.com/job/obtain/${this.token}/`)

      this.job = result.data.job
      console.log(result)
      }catch(e){
        console.log(e)
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");

    this.handleGet();
    this.handleGetStatus();
  },
};
</script>

<style scoped>
.bar1,
.bar2 {
  border: 1px solid black;
  width: 20px;
}
form {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 30px 10px;
  border-radius: 10px;
}
label {
  color: #676e76;
  display: inline-block;
  margin: 5px 3px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-style: normal;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  margin-bottom: 10px;
  background: #ecf4f2;
  box-sizing: border-box;
  border: 1px solid rgb(81, 155, 184);
  border-radius: 5px;
  outline: none;
  color: #555;
}
.p {
  padding: 10px 6px;
  width: 100%;
  margin-bottom: 10px;
  background: #ffff;
  box-sizing: border-box;
  border: 0.5px solid #d0e1db;
  border-radius: 5px;
  outline: none;
  color: #555;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.form-main-contain {
  margin-top: 150px;
}
.main-header {
  position: fixed;
  width: 100%;
  left: 0;
  opacity: 1; 
    z-index: 9999;
    /* opacity: 0.97; */
  padding-top: 15px;
  top: 0;
  background: white;
  margin-bottom: 20px;
}

.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
.hearder {
  display: flex;
  justify-content: space-between;
  flex-direction: row;

}

hr {
  color: #c4c4c4;
}
.login-profil-img img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  /* background-color: yellow; */
  margin: auto;
  margin-top: 10px;
}
.login-profil-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  /* border: 1px solid #909694; */
  /* background-color: yellow; */
  margin: auto;
  text-align: center;
  margin-top: 10px;
}
.login-profil-img i {
  color: #d7eee8;
  font-size: 4rem;
}

.login-profil {
  width: 100%;
  height: 60px;
  background: #d0e1db;
  /* margin: auto; */
}
.login-profil-message {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  margin: 15px 10px;
  background-color: #ffffff;
  border-radius: 20px;
  height: 30px;
}
.toolpits { 
text-align: right;
 margin: 15px 0px; 
 
}
.toolpits a  { 
 
margin: 0px 6px;
background: #98D4B4;
padding: 5px 7px;
border-radius: 5px;
text-decoration: none;
color: white;
  
}
.toolpits a:hover{
  background: #449166;
  transition: 5s all ease-in;
  color: black;
}


</style>