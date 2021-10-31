<template>
  <form @submit.prevent="handleSubmit">
    <div class="hearder">
      <div class="login-profil">
        <div class="login-profil-img"></div>
        <div class="login-profil-message">
          <h1>Login</h1>
          <p>welcome back</p>
        </div>
      </div>
      <div class="signup">
        <router-link to="/signin">Sign up</router-link>
      </div>
    </div>
    <hr />
    <label>Email</label>
    <input
      class="input"
      type="email"
      required
      v-model="email"
      placeholder="Please enter your email adress"
    />

    <label>Password</label>
    <input
      class="password-feild input"
      type="password"
      required
      v-model="password"
      placeholder="Enter your password"
    />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <div class="submit">
      <div class="loader" v-if="loading">
        <Loader />
      </div>
      <button v-else>Login</button>

      <div class="forgot">
        <router-link to="/forgotten">Forgotten Password ?</router-link>
      </div>

      <div class="apk">
        <a
          href="https://play.google.com/store/apps/details?id=com.vinsight.kwikklik"
          >Get the Mobile App</a
        >
      </div>
    </div>
  </form>
</template>
 
<script>
import axios from "axios";
//import SignIn from '../views/SignIn.vue'
import setAuthHeader from "../components/utils/setAuthHeader";
import Loader from "../components/toolpit/Loader.vue";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      email: "",
      password: "",
      passwordError: "",
      token: "",
      loading: false,
      id: "",
    };
  },
  methods: {
    async handleSubmit() {
      // validate passeword
      this.loading = true;
      try {
        let result = await axios.post(`https://kwiklik.herokuapp.com/login/`, {
          //   headers: {
          // 'Content-Type': 'application/json'
          // },

          email: this.email,
          password: this.password,
        });

        if (result.data.id !== undefined) {
          localStorage.setItem("userInfo", result.data.token);
          localStorage.setItem("userId", result.data.id);
          localStorage.setItem("username", result.data.username);
          setAuthHeader(result.data.token);
          this.$router.push({ name: "HomeSlider" });
          this.token = result.data.token;
          console.log(result);
        } else {
          this.passwordError =
            "A user with this email and password was not found";
        }
      } catch (e) {
        this.passwordError =
          "A user with this email and password was not found";
      }
      this.loading = false;
    },
  },
  mounted() {
    let user = localStorage.getItem("userInfo");
    if (user) {
      this.$router.push({ name: "HomeSlider" });
    }
  },
};
</script>

<style scoped>
form {
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
  margin-top: 25px;
  margin-bottom: 5px;
  font-size: 0.8rem;
  font-size: 0.9rem;
  font-weight: 800;
  font-style: normal;
}
.input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  margin-bottom: 10px;
  background: #ecf4f2;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #555;
}
.input:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}

button {
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
  width: 100%;
  outline: none;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
  justify-content: right;
  width: auto;
  text-align: center;
  margin-left: auto;
  border: 1px solid #ffff;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.hearder {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.login-profil {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.login-profil-message h1 {
  margin: 0px 10px;
  color: #3f3d3d;
  font-size: 2rem;
}
.login-profil-message p {
  margin: 0px 10px;
  color: #c4c4c4;
}
hr {
  color: #c4c4c4;
  margin-top: 10px;
}
.login-profil-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  /* margin-bottom: 10px; */
  background-color: yellow;
}
.signup a {
  color: #1cb902;
  font-weight: bold;
  margin: 0px 0px;
  text-decoration: none;
}
.submit p {
  margin: 10px 0px;
  text-align: left;
  color: #1cb902;
}
.loader {
  text-align: center;
  margin: 0px auto;
}
a {
  font-size: 0.9rem;
  color: grey;
  text-decoration: none;
}
.apk {
  text-align: right;
  margin-top: 70px;
}
.apk a {
  text-decoration: none;
  color: #d9bc23;
}
.forgot {
  text-align: left;
  color: #d9bc23;
}
.forgot a {
  color: #d9bc23;
}
</style>