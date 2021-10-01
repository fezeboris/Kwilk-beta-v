<template>
  <div class="updateProfile">
   <div class="cancel">
        <router-link :to="{name: 'Profile'}"><i class="fas fa-arrow-left" ></i></router-link>
   </div>
    <h1>{{ $t('profile.p3') }}</h1>

    <div class="loader" v-if="loading">
      <Loader />
    </div>
    <label>{{ $t('profile.label1') }}</label>
    <input class="input" name="name" type="text" v-model="profile.name" />
    <label>{{ $t('profile.label2') }}</label>
    <input class="input" name="email" type="email" v-model="profile.email" />
    <label>{{ $t('profile.label3') }}</label>
    <input
      class="input"
      name="language"
      type="text"
      v-model="profile.language"
    />
    <label>{{ $t('profile.label4') }}</label>
    <input class="input" name="sex" type="text" v-model="profile.sex" />
    <label>{{ $t('profile.label5') }}</label>
    <input
      class="input"
      name="marital_status"
      type="text"
      v-model="profile.marital_status"
    />
    <label>{{ $t('profile.label7') }}</label>
    <input
      class="input"
      name="occupation"
      type="text"
      v-model="profile.occupation"
    />
    <label>{{ $t('profile.label6') }}</label>
    <input class="input" name="phone" type="text" v-model="profile.phone" />
    <label>{{ $t('profile.label8') }}</label>
    <input
      class="input"
      name="region_of_residence"
      type="text"
      v-model="profile.region_of_residence"
    />
    <label>{{ $t('profile.label9') }}</label>
    <input
      class="input"
      type="text"
      name="religion"
      v-model="profile.religion"
    />
    <label>{{ $t('profile.label10') }}</label>
    <input
      class="input"
      type="text"
      name="date_of_birth"
      v-model="profile.date_of_birth"
    />
    <label>{{ $t('profile.label11') }}</label>
    <input
      class="input"
      type="text"
      name="ethnic"
      v-model="profile.ethnicity"
    />

    <div class="update">
     <button @click="updateProfile">{{ $t('profile.b') }}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/toolpit/Loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      token: "",
      loading: false,
      profile: {
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
      },
    };
  },
  methods: {
    async handleGet() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/profile/get/${this.token}/`
        );

        this.profile = result.data.profile;
        this.loading = false;
        // console.log(result);
      } catch (e) {
        // console.log(e.result);
      }
    },
    async updateProfile() {
        this.loading = true;
      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/profile/update/${this.token}/`,
          {
            email: this.profile.email,
            name: this.profile.name,

            language: this.profile.language,
            sex: this.profile.sex,
            occupation: this.profile.occupation,
            region: this.profile.region,
            region_of_residence: this.profile.region_of_residence,
            ethnic: this.profile.ethnic,
            phone: this.profile.phone,
            marital_status: this.profile.marital_status,
            date_of_birth: this.profile.date_of_birth,
          }
        );

        this.loading = false;
        this.$router.push({ name: "Profile" });
        return result
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    this.handleGet();
  },
};
</script>

<style scoped>
.updateProfile {
  max-width: 420px;
  margin: 10px auto;
  background: white;
  text-align: left;
  padding: 30px 10px;
  border-radius: 10px;
}
label {
  color: #676e76;
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  font-weight: 800;
  font-style: normal;
}

input,
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
.update{
    text-align: center;
    color: lightblue;
    margin-top: 20px;
    font-size: 1.1rem;
}
.update button{
    border: none;
    outline: none;
}
a{
    color: lightblue;
    
    text-decoration: none;
}
.cancel{
margin-bottom: 20px;
}
 .loader{
    text-align: center;
    margin: 0px auto;
} 
</style>