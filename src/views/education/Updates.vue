<template>
  <EducationNav />

  <div class="updates">
   
    <hr style="border-top: dotted 1px; color: #8ba0ae; width: 100%" />
    <div class="update-content">
      <hr
        class="hr"
        style="border-top: dotted 1px; color: #8ba0ae; width: 100%"
      />
      <!-- <div class="loader" v-if="loading">
            <Loader/>
        </div> -->
      <label class="lable">{{ $t('education.updates.lable1') }}</label>
      <select v-model="educTpye" required>
        <option value="text">Text</option>
        <option value="video">Video</option>
        
      </select>
      <label>{{ $t('education.updates.lable2') }}</label>
      <input type="text" v-model="title" />
      <label>{{ $t('education.updates.la4') }}</label>
      <input type="text" v-model="link" />

     

      <div class="btn-container">
         <div class="loader" v-if="loading">
            <Loader/>
        </div>
        <button v-else class="apply-btn" @click.prevent="updateEducation">{{ $t('education.updates.btn') }} </button>
      </div>
    </div>
    <Date :Cdate="getDate" :Ctime="getTime" />
    <hr style="border-top: dotted 1px; color: #8ba0ae; width: 100%" />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Footer from "@/components/Footer.vue";
import EducationNav from "../education/EducationNav.vue";
import Date from "@/components/toolpit/Date.vue";
import Loader from "@/components/toolpit/Loader.vue";
export default {
  components: {
    Footer,
    EducationNav,
    Date,
    Loader
  },
  data() {
    return {
       currentDate: "", 
       token: "",
       educTpye: '',
       link: '',
       title: '',
       currentTime: '',
        loading: false,
       


    };
  },
  methods:{
      getDate(date) {
      this.currentDate = date;
    },
        getTime(time){
      this.currentTime = time
    },

    async updateEducation() {
      this.loading = true;
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/education/create/${this.token}/`,
          {
            type_education: this.educTpye,
            link: this.link,
            uploaded_on: this.currentDate,
            title: this.title
           
          }
          
        )
         this.$router.push({ name: "Education" });
        this.loading = false;
        this.educTpye = '',
        this.link=''
        this.title= ''
        return result
        
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
    
  },
  mounted(){
       this.token = localStorage.getItem("userInfo");
    //    console.log(this.currentDate)
  }
};
</script>

<style scoped>
.updates {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 28px 10px;
  border-radius: 10px;
}

.request-header {
  margin-top: 10px;
  position: fixed;
  width: 100%;
  height: 60px;
  background: white;
}
.request-header p {
  margin: 10px 25px 10px 0px;
  color: #3f3d3d;
  font-size: 1.3rem;
  line-height: 0rem;
  font-weight: bold;
}
small {
  color: #8ba0ae;
  font-size: 0.8rem;
  /* margin-bottom: 20px; */
  line-height: 0.5rem;
}
.update-content {
  margin-top: 40px;
  /* margin-bottom: 50px; */
}
.request-content {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 3px;
  align-items: center;
  align-content: center;
  margin-right: 5px;
  padding: 0px 10px;
  margin-bottom: 7px;
  border-radius: 10px;
  border: 1px solid #8ba0ae;
}

label {
  color: #676e76;
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 5px;
  font-size: 0.9rem;
  font-weight: 800;
  font-style: normal;
}

input,
select,
textarea {
  display: block;
  padding: 10px 6px;
  width: 100%;
  margin-bottom: 10px;
  background: #ecf4f2;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  outline: none;
  color: rgb(56, 54, 54);
}
option{
  width: 100px;
  /* color: green; */
}
input:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}
textarea:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}
textarea{
    height: 100px;
}
.btn-container{
  margin: 0px auto;
  text-align: center;
 
}
.apply-btn{
  width: 120px;
  background: lightgreen;
  margin: 10px 0px;
  border-radius: 5px;
  color: white;
  padding: 3px 5px;
}
.apply-btn:hover{
  background: rgb(63, 52, 52);
}
 .loader{
    text-align: center;
    margin: 0px auto;
} 
</style>