<template>
  <div class="updateProfile">
    <div class="cancel">
      <router-link :to="{ name: 'Profile' }"
        ><i class="fas fa-arrow-left"></i
      ></router-link>
    </div>

    <div class="main-header">
      <div>
        <div class="profile-pic-div login-profil-img">
          <!-- <img
            v-if="profile == null"
            src="../../assets/images/avatar.png"
            id="photo"
          /> -->
          <label for="file" id="uploadBtn">
            <i class="fas fa-camera"></i
          ></label>
          <img :src="updates.photo" id="photo" />
          <input type="file" id="file" @change.prevent="onFileChange" />
        </div>
      </div>
    </div>

    <!-- <h1 class="profile-header">{{ $t('profile.p3') }}</h1> -->

    <div class="loader" v-if="loading">
      <Loader />
    </div>

    <label class="label">{{ $t("profile.label1") }}</label>
    <input class="input" name="name" type="text" v-model="updates.name" />
    <label class="label">{{ $t("profile.label2") }}</label>
    <input class="input" name="email" type="email" v-model="updates.email" />
    <label class="label">{{ $t("profile.label3") }}</label>

    <select v-model="updates.language" name="language">
      <option value="English">{{ $t("profile.update.English") }}</option>
      <option value="French">{{ $t("profile.update.French") }}</option>
    </select>

    <label class="label">{{ $t("profile.label4") }}</label>  
    <select v-model="updates.sex" name="sex">
      <option value="Male">{{ $t("profile.update.Male") }}</option>
      <option value="Female">{{ $t("profile.update.Female") }}</option>
    </select>
    <label class="label">{{ $t("profile.label5") }}</label>

   <select v-model="updates.marital_status"  name="marital_status">
      <option value="Single">{{ $t("profile.update.Single") }}</option>
      <option value="Maried">{{ $t("profile.update.Maried") }}</option>
      <option value="Divorced">{{ $t("profile.update.Divorced") }}</option>
    </select>
   
    <label class="label">{{ $t("profile.label7") }}</label>
    <input
      class="input"
      name="occupation"
      type="text"
      v-model="updates.occupation"
    />
    <label class="label">{{ $t("profile.label6") }}</label>
    <input class="input" name="phone" type="text" v-model="updates.phone" />
    <label class="label">{{ $t("profile.label8") }}</label>

     <select v-model="updates.region_of_residence"  name="region_of_residence">
      <option value="Adamawa">Adamawa</option>
      <option value="Centre">Centre</option>
      <option value="East">{{ $t("profile.update.ER") }}</option>
      <option value="Far North">{{ $t("profile.update.FN") }}</option>
      <option value="Littoral">Littoral</option>
      <option value="North">{{ $t("profile.update.N") }}</option>
      <option value="North West">{{ $t("profile.update.NW") }}</option>
      <option value=" West"> {{ $t("profile.update.WR") }}</option>
      <option value="South">{{ $t("profile.update.SR") }}</option>
      <option value="South West">{{ $t("profile.update.SW") }}</option>
      
    </select>
   
    <label class="label">{{ $t("profile.label9") }}</label>
    <input
      class="input"
      type="text"
      name="religion"
      v-model="updates.religion"
    />
    <label class="label">{{ $t("profile.label10") }}</label>
    <input
      class="input"
      type="text"
      name="date_of_birth"
      v-model="updates.date_of_birth"
    />
    <label>{{ $t("profile.label11") }}</label>
    <input
      class="input"
      type="text"
      name="ethnic"
      v-model="updates.ethnicity"
    />

    <div class="update">
      <button @click="updateProfile">{{ $t("profile.b") }}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "@/components/toolpit/Loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      token: "",
      loading: false,
      updates: {
        name: "",
        email: "",
        language: "",
        sex: "",
        occupation: "",
        region: "",
        region_of_residence: "",
        ethnic: "",
        phone: "",
        marital_status: "",
        date_of_birth: "",
        ethnicity: "",
      },
      image: null,
    };
  },
  methods: {
    async handleGet() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/profile/get/${this.token}/`
        );

        this.updates = result.data.profile;
        this.loading = false;
        console.log(result);
      } catch (e) {
        // console.log(e.result);
      }
    },
    doSomething() {
      Swal.fire({
        position: "center-end",
        icon: "success",
        title: "Your profile has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
    },

    // async updateProfile() {
    //     this.loading = true;
    //   try {
    //     let result = await axios.put(
    //       `https://kwiklik.herokuapp.com/profile/update/${this.token}/`,
    //       {
    //         email: this.updates.email,
    //         name: this.updates.name,

    //         language: this.updates.language,
    //         sex: this.updates.sex,
    //         occupation: this.updates.occupation,
    //         region: this.updates.region,
    //         region_of_residence: this.updates.region_of_residence,
    //         // photo: this.updates.image,
    //         phone: this.updates.phone,
    //         marital_status: this.updates.marital_status,
    //         date_of_birth: this.updates.date_of_birth,
    //       }
    //     );

    //     this.loading = false;
    //     this.$router.push({ name: "Profile" });
    //     console.log(result)
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      const file = e.target.files[0];
      this.image = file;
      console.log("heeee", this.image);
    },
    async updateProfile() {
      let formData = new FormData();
      if (this.image != null) {
        formData.append("photo", this.image);
      }

      formData.append("email", this.updates.email);
      formData.append("name", this.updates.name);
      formData.append("language", this.updates.language);
      formData.append("sex", this.updates.sex);
      formData.append("occupation", this.updates.occupation);
      formData.append("religion", this.updates.religion);
      formData.append(" region_of_residence", this.updates.region_of_residence);
      formData.append("phone", this.updates.phone);
      formData.append(" marital_status", this.updates.marital_status);
      formData.append("date_of_birth", this.updates.date_of_birth);
      formData.append("ethnicity", this.updates.ethnicity);

      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/profile/update/${this.token}/`,
          formData
        );
        this.doSomething();
        this.$router.push({ name: "Profile" });
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    this.handleGet();

    // profile pic update

    // profile pic upload====================================================

    const imgDiv = document.querySelector(".profile-pic-div");
    const img = document.querySelector("#photo");
    const file = document.querySelector("#file");
    const uploadBtn = document.querySelector("#uploadBtn");

    //if user hover on img div

    imgDiv.addEventListener("mouseenter", function () {
      uploadBtn.style.display = "block";
    });

    //if we hover out from img div

    imgDiv.addEventListener("mouseleave", function () {
      uploadBtn.style.display = "none";
    });

    //lets work for image showing functionality when we choose an image to upload

    //when we choose a foto to upload

    file.addEventListener("change", function () {
      //this refers to file
      const choosedFile = this.files[0];

      this.profile = choosedFile;
      // console.log(this.profile);
      if (choosedFile) {
        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener("load", function () {
          img.setAttribute("src", reader.result);
        });

        reader.readAsDataURL(choosedFile);
      }
      this.profile = choosedFile;
      //  console.log("yo", this.profile)
    });
  },
};
</script>

<style scoped>
.updateProfile {
  max-width: 420px;
  margin: 20px auto;
  background: white;
  text-align: left;
  padding: 30px 10px;
  border-radius: 10px;
}
.label {
  color: #676e76;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  font-weight: 800;
  font-style: normal;
}
.profile-header {
  margin-top: 20px;
}
.input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  outline: none;
  color: #555;
}
h1 {
  text-align: center;
  color: lightblue;
  /* font-weight: bold; */
  font-size: 1.1rem;
}
.loader {
  text-align: center;
  margin: 0px auto;
}
.update {
  text-align: center;
  color: lightblue;
  margin-top: 20px;
  font-size: 1.1rem;
}
.update button {
  border: none;
  outline: none;
}
a {
  color: lightblue;

  text-decoration: none;
}
.cancel {
  margin-bottom: 20px;
}
.loader {
  text-align: center;
  margin: 0px auto;
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
  cursor: pointer;
}
.login-profil-img i {
  color: #d7eee8;
  font-size: 4rem;
}

.pp {
  font-size: 0.7em;
}

#photo {
  height: 100%;
  width: 100%;
}

#file {
  display: none;
}

#uploadBtn {
  /* height: 20px; */
  width: auto;
  position: absolute;
  bottom: 0;
  left: 63%;
  transform: translateX(-50%);
  text-align: center;
  color: wheat;
  line-height: 0px;
  font-family: sans-serif;
  /* font-size: 15px; */
  cursor: pointer;
  font-size: 0.9rem;
  /* display: none; */
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
  /* margin-bottom: 20px; */
}
label .fa-camera {
  font-size: 1.2rem;
  color: black;
}
</style>