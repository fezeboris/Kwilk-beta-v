<template>
  <form>
    <div  class="main-container">
    <div class="star-rating" >
      <h1>{{ $t('rating.head') }}</h1>
      <input id="star-5x" type="radio" name="rating" value= '5' v-model="starRating" />
      <label for="star-5x" title="5 stars">
        <i class="fa fa-star"></i>
      </label>

      <input id="star-4x" type="radio" name="rating" value="4" v-model="starRating"/>
      <label for="star-4x" title="4 stars">
        <i class="fa fa-star"></i>
      </label>

      <input id="star-3x" type="radio" name="rating" value="3" checked  v-model="starRating"/>
      <label for="star-3x" title="3 stars">
        <i class="fa fa-star"></i>
      </label>

      <input id="star-2x" type="radio" name="rating" value="2" v-model="starRating"/>
      <label for="star-2x" title="2 stars">
        <i class="fa fa-star"></i>
      </label>

      <input id="star-1x" type="radio" name="rating" value="1" v-model="starRating"/>
      <label for="star-1x" title="1 star">
        <i class="fa fa-star"></i>
      </label>
    </div>
    
         <p>{{ $t('rating.review') }}</p>
      <div class="overview">
        <textarea v-model="review"></textarea><br />

         
          <div class="loader" v-if="loading">
            <Loader/>
        </div>
        <button v-else @click.prevent="sendRating" class="send-btn">{{ $t('rating.send') }}</button>
      </div>
    </div>
    
  </form>
</template>

<script>
import axios from 'axios'
import Loader from '@/components/toolpit/Loader.vue'

export default {
  components:{
   Loader
  },
  data() {
    return {
      starRating: '',
      review: '',
      token: '',
      loading: false,
    };
  },
  methods:{
    async sendRating() {
       this.loading = true;
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/ratings/create/${this.token}/`,
          {
            rating: this.review,
            score: this.starRating

          }
    
        );
         
        if(result.data == 201){
          this.$router.push({name:'Profile'})
        } 
        
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
body {
  background: #252525;
}
form{
      max-width: 420px;
  margin: 10px auto;
  background: white;
  text-align: left;
  padding: 30px 10px;
  border-radius: 10px;
}
h1 {
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
}
p {
  color: #969899;
  cursor: pointer;
  font-size: 1.1rem;
}
.main-container{
    text-align: center;
  opacity: 1;
  position: relative;
  z-index: 3;
  background: white;
   box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
}
.send {
  background: #d3f2dc;
  width: 200px;
  margin: 0 auto;
}
textarea {
  border: 1px solid #969899;
  border-radius: 5px;
  height: 80px;
  width: 200px;
  /* text-align: left; */
  margin-top: 10px;
  outline: none;
}
.send-btn {
  color: lightgreen;
  border: none;
  outline: none;
  font-size: 1.3rem;
}

.star-rating {
  display: block;
  margin-bottom: 25px;
  direction: rtl;
  text-align: center;
  margin-top: 50px;
}
.star-rating input[type="radio"] {
  display: none;
}
.star-rating > label {
  color: #ccc;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-size: 30px;
  margin-top: 10px;
}
.star-rating > label:hover,
.star-rating > label:hover ~ label,
.star-rating > input[type="radio"]:checked ~ label {
  color: lightgreen;
}

 .loader{
    text-align: center;
    margin: 0px auto;
}  
</style>