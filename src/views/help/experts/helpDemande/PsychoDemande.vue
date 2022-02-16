<template>
  <div class="">
    <button
      type="button"
      class="btn-lg text-center"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal2"
    >
      <div class="clinical-specialist">
        <img src="../../../../assets/images/brain.png" alt="" />
        {{ $t("help.p2") }}
      </div>
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <p class="">{{ $t("demandes.Psychological") }}</p>
            </h5>
            <button
              @click.prevent="closemodal"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <textarea
              v-model="demand"
              placeholder="please enter your request"
            ></textarea>
            <div class="loader" v-if="loading">
              <Loader />
            </div>
          </div>
          <div class="modal-footer">
            <button
              @click="closemodale"
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click.prevent="demandHelp"
            >
              {{ $t("demandes.send") }}
            </button>
            <Date :Cdate="getDate" :Ctime="getTime" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Date from "@/components/toolpit/Date.vue";
import Loader from "@/components/toolpit/Loader.vue";
import Swal from "sweetalert2";
export default {
  components: {
    Date,
    Loader,
  },
  data() {
    return {
      demand: "",
      token: "",
      currentDate: "",
      currentTime: "",
    };
  },
  methods: {
    getDate(date) {
      this.currentDate = date;
      //   console.log("yowa", this.currentDate);
    },
    getTime(time) {
      this.currentTime = time;
    },
    doSomething() {
      Swal.fire({
        position: "center-end",
        icon: "success",
        title: "Psy Request send Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    async demandHelp() {
      this.loading = true;
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/help/create/${this.token}/`,
          {
            type_help: "psy",
            message: this.demand,
            date_of_demand: this.currentDate,
          }
        );
        this.demand = "";
        // console.log(result);
        this.doSomething();
        
        this.loading = false;
        return result;
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    // console.log(this.token)
  },
};
</script>

<style scoped>
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
textarea {
  width: 100%;
  border-radius: 5px;
  outline: none;
  height: 200px;
}

input:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}

h1 {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.loader {
  text-align: center;
  margin: 0px auto;
}

.clinical-specialist {
  text-align: left;
  display: flex;
  /* border: 1px solid grey; */
  align-items: center;
  border-radius: 5px;
  /* margin-top: 48px; */
}
.btn-lg {
  /* border: 1px solid grey; */
  outline: none !important;
}
.clinical-specialist p {
  /* background-color: lightgreen; */
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
}
.clinical-specialist img {
  margin-right: 20px;
  width: 60px;
  height: 60px;
}
</style>