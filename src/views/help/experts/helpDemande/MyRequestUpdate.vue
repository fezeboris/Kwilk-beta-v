<template>

  <Snavbar/>
  <div class="main-contain">
    <div class="header">
      <h1>Update My Requests</h1>
    </div>
    <div class="request">
      <div class="request_text">
        <div class="header_request"></div>
        <div class="request_contain">
            <keep-alive>
          <textarea v-model="message" placeholder="Update your request"></textarea>
          </keep-alive>
        </div>
      </div>
      <div class="update">
       <span @click.prevent="updateRequest">update</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Snavbar from '../../../../components/Snavbar.vue'
export default {
    components:{
      Snavbar
    },
  data() {
    return {
      token: "",
      requests: [],
      showModal: false,
     message: '',
    };
  },
  methods: {
      
    back() {
      this.$router.go(-1);
    },
    async updateRequest(){
        let result = await axios.put(
            `https://kwiklik.herokuapp.com/help/update/${this.token}/${this.$route.params.id}/`,{

                 message: this.message
            }  
        )
        this.message= ''
         this.$router.push({ name: "MyRequest" });
        return result
    }
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    //    console.log(this.currentDate)
    // this.updateEducation();
    // console.log(this.$route.params.id)
  },
};
</script>

<style scoped>

.main-contain {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding-top: 28px;
  border-radius: 10px;
}
.header h1 {
  /* margin-top: 60px; */
  margin: 10px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  font-weight: bold;
}
.header_request {
  display: flex;
  padding: 10px;
}
.header_request p {
  padding-right: 10px;
}
.request {
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
  border: 1px solid #f0f0f0;
  margin: 10px;
  border-radius: 5px;
}
.request_contain {
  padding: 10px;
  text-align: justify;
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
}
.update {
  padding: 20px;
}
.date {
  color: rgb(36, 35, 35);
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
}
.type {
  color: rgb(85, 155, 179);
}
.status {
  color: lightblue;
}
.update  {
  color: lightgreen;
  font-size: 1.3rem;
  margin-top: 10px;
  text-align: right;
}

.showUpdate {
  max-width: 420px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
  opacity: 1;
  position: absolute;
  z-index: 3;
  /* opacity: 1; */
  /* margin: 0px 10px; */
  transition: ease-in-out 0.9s;
  padding: 10px 10px;
  background-color: #ffff;
  text-align: left;
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
textarea {
  /* display: block; */
  padding: 10px 0px;
  width: 100%;
  margin-bottom: 10px;
  background: white;
  box-sizing: border-box;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  outline: none;
  height: 130px;
  color: #555;
}
.btn-container {
  display: flex;

  align-items: center;
}
.btn-1 {
  /* background: crimson; */
  padding: 3px 5px;
  border: none;
  font-size: 10px;
  outline: none;
  border-radius: 5px;
  color: crimson;
  margin-right: 20px;
}
.btn-2 {
  /* background: lightgreen; */
  padding: 3px 5px;
  border: none;
  font-size: 10px;
  outline: none;
  border-radius: 5px;
  color: lightblue;
}
input:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}
.fa-chevron-right {
  color: #1cb902;
  font-size: 1.5rem;
}
h1 {
  font-size: 1rem;
}
</style>