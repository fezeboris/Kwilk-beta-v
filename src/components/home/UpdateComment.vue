<template>
  <Snavbar />
  <div class="update">
    <textarea v-model="comment" autofocus></textarea>
    <div class="loader" v-if="loading">
      <Loader />
    </div>

    <p v-else @click.prevent="submitComment">update</p>
  </div>
</template>

<script>
import Snavbar from "../Snavbar.vue";
import axios from "axios";
import Loader from "@/components/toolpit/Loader.vue";

export default {
  components: {
    Snavbar,
    Loader,
 
  },
  data() {
    return {
      token: "",
      comment: "",
      loading: false,
      messageId:"",
    };
  },
  methods: {
    async messageDetails() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/reports/messages/get/${this.token}/${this.$route.params.id}/`,
          {}
        );
        // console.log("hey child", result.data), console.log("msag", result);

        this.comment = result.data.report;
        console.log(result.data);
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
    async submitComment() {
      this.loading = true;
      try {
        let result = await axios.put(
          `https://kwiklik.herokuapp.com/reports/update/${this.token}/${this.$route.params.id}/`,
          {
            report: this.comment,
          }
        );

        
        this.$router.go(-1);
        return result;
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    this.messageId = this.$route.params.id
    this.messageDetails();
  },
};
</script>

<style scoped>
.update {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  margin-top: 20px;
  padding: 30px 10px;
  border-radius: 10px;
  text-align: justify;
}
textarea {
  display: block;
  padding: 10px 6px;
  width: 100%;
  margin-bottom: 10px;
  background: white;
  box-sizing: border-box;
  border: 1px solid #b8b0b0;
  height: 180px;
  border-radius: 5px;
  outline: none;
  color: #555;
}
.update p {
  text-align: center;
  color: lightblue;
}
.loader {
  text-align: center;
  margin: 0px auto;
}
</style>