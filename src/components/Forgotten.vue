<template>
  <div class="contain">
    <div class="forgotten">
      <h1>Password Reset</h1>
    </div>
    <div class="info">
      <p>
        Input email adress you used to create your account and a new password
      </p>
      <p style="color: #d9bc23">
        you will need to click on the verification link sent to you via email in
        order to complete this procedure.
      </p>
      <div class="email_contain">
        <label>Email</label>
        <input type="email" v-model="email" placeholder="email" />
        <label>Password</label>
        <input type="password" v-model="password" placeholder="password" />
      </div>
    </div>
  </div>
  <div v-if="passwordError" class="error">{{ passwordError }}</div>
  <div class="loader" v-if="loading">
    <Loader />
  </div>
  <div class="btn" v-else>
    <button @click="handleSubmit">Change Password</button>
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
      email: "",
      password: "",
      //   token: "",
      passwordError: "",
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
      if (!this.passwordError) {
        this.loading = true;
        try {
          let result = await axios.post(
            "https://kwiklik.herokuapp.com/password/reset/",
            {
              email: this.email,
              password: this.password,
            }
          );
          console.log(result);
          if (result.status == 200) {
            // console.log(result);
            this.doSomething();
            this.$router.push({ name: "Login" });
          }
        } catch (e) {
          this.errorRes = "user with these credentials do not exist";
        }
        this.loading = false;
      }
    },
    doSomething() {
      Swal.fire({
        position: "center-end",
        icon: "success",
        title: "You have been sent an email to reset your password",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  },
  mounted() {
    // this.token = localStorage.getItem("userInfo");
  },
};
</script>

<style scoped>
.contain {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 30px 10px;
  border-radius: 10px;
}
.forgotten {
  margin-bottom: 30px;
  font-weight: 600;
}
.info {
  text-align: left;
  font-size: 0.9rem;
}
.email_contain {
  margin: 15px 0px;
}
label {
  color: #676e76;
  display: inline-block;
  margin-top: 25px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  font-weight: 400;
  font-style: normal;
}
input {
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
input:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}

button {
  background: rgb(41, 39, 39);
  border-radius: 10px;
  border: 0;
  padding: 8px 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 0.8rem;
  color: white;
  width: 150px;
  outline: none;
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
.btn {
  margin: 0px auto;
  text-align: center;
}
.loader {
  text-align: center;
  margin: 0px auto;
}
</style>