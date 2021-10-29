<template>
  <form @submit.prevent="handleSubmit">
    <div class="hearder">
      <div class="login-profil">
        <div class="login-profil-img"></div>
        <div class="login-profil-message">
          <h1>Registration</h1>
          <p>create an account</p>
        </div>
      </div>
      <div class="signup">
        <router-link to="/">Sign in</router-link>
      </div>
    </div>
    <hr />
    <div class="error-b" role="alert" v-if="emailerror">{{ emailerror }}</div>

    <label>Email</label>
    <input
      class="input"
      type="email"
      required
      v-model="email"
      placeholder="Please enter your email adress"
    />

    <div class="error-b" role="alert" v-if="userNameError">
      {{ userNameError }}
    </div>
    <label>User Name</label>
    <input
      class="input"
      type="text"
      required
      v-model="username"
      placeholder="Please enter your username"
    />
    <label class="lable">Gender</label>
    <select v-model="gender" required>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>

    <div class="error-b" role="alert" v-if="phoneNumberError">
      {{ phoneNumberError }}
    </div>
    <label>Phone Number</label>
    <input
      class="input"
      type="tel"
      required
      v-model="phone_number"
      placeholder="Enter your phone number"
    />

    <div class="error-b" role="alert" v-if="passwordEr">{{ passwordEr }}</div>
    <label>Password</label>
    <input
      class="input password-feild"
      type="password"
      required
      v-model="password"
      placeholder="Enter your password"
    />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>
    <label>Password Verification</label>
    <input
      class="input password-feild"
      type="password"
      required
      v-model="passwordVerification"
      placeholder="Confirm your password"
    />
    <div v-if="passwordVerificationError" class="error">
      {{ passwordVerificationError }}
    </div>
    <div v-if="errorRes" class="errors">
      {{ errorRes }}
    </div>
    <div>
      <input type="checkbox" required />
      <router-link to="/terms">
        I have read the terms and agreements</router-link
      >
    </div>

    <div class="submit">
      <div class="loader" v-if="loading">
        <Loader />
      </div>
      <button v-else>Registration</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Loader from "@/components/toolpit/Loader.vue";
export default {
  name: "SignIn",
  components: {
    Loader,
  },
  data() {
    return {
      email: "",
      password: "",
      username: "",
      gender: "",
      phone_number: "",
      passwordError: "",
      passwordVerification: "",
      passwordVerificationError: "",
      errorRes: "",
      // response errors

      emailerror: "",
      userNameError: "",
      phoneNumberError: "",
      passwordEr: "",
      loading: false,
    };
  },
  methods: {
    async handleSubmit() {
      // validate passeword
      this.passwordError =
        this.password.length > 7
          ? ""
          : "Password must be at least 8 chars long";
      if (this.password != this.passwordVerification) {
        this.passwordVerificationError =
          "Password must match with Password verification";
      }
      if (!this.passwordError && !this.passwordVerificationError) {
        this.loading = true;
        try {
          let result = await axios.post(
            "https://kwiklik.herokuapp.com/register/",
            {
              email: this.email,
              password: this.password,
              username: this.username,
              gender: this.gender,
              phone_number: this.phone_number,
            }
          );

          if (result.data == 201) {
            // console.log(result);
            // localStorage.setItem("userInfo", JSON.stringify(result.data));
            // localStorage.setItem('userInfo', (result.data.token))
            this.$router.push({ name: "Login" });
          } else if (result.data !== 201) {
            this.emailerror = result.data.email;
            this.passwordEr = result.data.password;
            this.phoneNumberError = result.data.phone_number;
            this.userNameError = result.data.username;
            // emailError: this.data.email
            // phoneNumberError: this.
          }
        } catch (e) {
          this.errorRes = "user with these credentials already exist";
        }
        this.loading = false;
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("userInfo");
    if (user) {
      this.$router.push({ name: "Login" });
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
  font-size: 0.9rem;
  font-weight: 800;
  font-style: normal;
}

.input,
select {
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
  border-radius: 15px;
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
  width: 150px;
  margin-left: auto;
  border: 1px solid #ffff;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.errors {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
  width: auto;
  margin-left: auto;
  border: 1px solid #ffff;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.error-b {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
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
  background-color: yellow;
}
.signup a {
  color: #1cb902;
  font-weight: bold;
  margin: 0px 0px;
  text-decoration: none;
}
.genders-input {
  display: flex;
  justify-content: space-between;
}
.gender-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: #ecf4f2;
  padding: 10px;
  border-radius: 5px;
  outline: none;
}
.gender-input:checked {
  background: white;
}
.gender-input input {
  margin-left: 85px;
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
</style>
