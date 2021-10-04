<template>
     <div class="comment-btn">
        <button  @click.prevent="openModal(), getId()"></button>
        
      </div >


  <!-- <div class="login-profil-img" @click="showModal = true">
    <i class="fas fa-pencil-alt"></i>
  </div> -->

  <div class="popup" v-if="showModal">
    <!-- <label>Name</label> -->
    <textarea type="text" v-model="comment" />
     <div  v-if="loading">
      <Loader />
    </div>


    <div v-else class="btn-container">
      <button class="btn-1" @click.prevent="showModal = false">{{ $t('header.cancel') }}</button>
      <button class="btn-2" @click.prevent="replyComment">{{ $t('header.comment') }}</button>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from '@/components/toolpit/Loader.vue'
export default {
   components:{
        Loader
       
      },
  data() {
    return {
      showModal: false,
      comment: "",
      token: "",
      id: '',
      loading: false,
      modalOpenID: '',
      
    };
  },
  
  methods: {
    getId(){
       this.id = localStorage.getItem('messageId')
       this.modalOpenID = localStorage.getItem('messageId')
       console.log('my', this.modalOpenID)
    },
    openModal(){
      if(this.id == this.modalOpenID){
        this.showModal = true
      }else{
        this.showModal = false
      }
        
      
    },
    async replyComment() {
       this.loading = true;
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/reports/messages/create/${this.token}/${this.id}/`,
          {
            report: this.comment,
           
          }
          
        );
       
         
        this.comment =''
      
        this.showModal = false;
        return result;
      } catch (e) {
        console.log(e);
      }
       this.loading = false;
    },
    //  replyComment(){
    //    console.log('yowa', this.comment, this.id)
    //  }
      
     
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    // console.log(this.token)
    // console.log(this.$route.params.id)
    
    
  },
};
</script>

<style scoped>
.popup {
  max-width: 420px;
  border-radius: 10px;
  /* box-shadow: 1px 1px 1px 1px rgb(224, 220, 220); */
  opacity: 1;
  position: absolute;
  z-index: 3;
  margin: 0px ;
  transition: ease-in-out 0.9s;
  padding-bottom: 10px;
  background-color: #ffff;
  text-align: left;
  box-sizing: border-box;
  justify-content: center;
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
  width: 340px;
  margin-bottom: 10px;
   background-color: #f0f0f0;
  box-sizing: border-box;
  border: 0.5px solid #aca7a7;
  border-radius: 5px;
  outline: none;
  height: 100px;
  color: #555;
}
.btn-container {
  display: flex;
 justify-content: flex-end;
  align-items: center;
}
.btn-1 {
  /* background: crimson; */
  padding: 3px 5px;
  border: none;
  font-size: .8rem;
  outline: none;
  border-radius: 5px;
  color: crimson;
  margin-right: 20px;
}
.btn-2 {
  /* background: lightgreen; */
  padding: 3px 5px;
  border: none;
  font-size: .8rem;
  outline: none;
  border-radius: 5px;
  color: lightblue;
}
/* textarea:focus {
  outline: none;
  
  background: white;
} */

.comment-btn button{
  /* background: rgb(151, 151, 19); */
  padding: 2px 3px;
  border-radius: 5px;
  color: lightblue;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
}
.comment-btn button:hover{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  /* color: rgb(112, 112, 15); */
}
 .loader{
    text-align: center;
    margin: 0px auto;
} 
</style>