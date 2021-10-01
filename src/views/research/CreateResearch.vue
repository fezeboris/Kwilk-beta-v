<template>
  <Snavbar />
  <div class="main-container">
    <label class="lable">{{ $t('createResearch.l1') }}</label>
    <textarea type="text" v-model="location_sgbv"></textarea><br />

    <h1 style="font-weight: bold">
      1. {{ $t('createResearch.h1') }}
    </h1>
    <br />

    <label
      >{{ $t('createResearch.l2') }}
    </label>

    <select v-model="any_sgbv">
      <option value="Yes">{{ $t('createResearch.op1') }}</option>
      <option value="No">{{ $t('createResearch.op2') }}</option>
    </select>
    <label
      >{{ $t('createResearch.l3') }}</label
    >
    <textarea v-model="story_sgbv"></textarea>
    <label
      >{{ $t('createResearch.l4') }}</label
    >
    <textarea v-model="education_sgbv"></textarea>

    <label
      >{{ $t('createResearch.l5') }}
    </label>
    <textarea v-model="revealing_sgbv"></textarea>

    <label
      >{{ $t('createResearch.l6') }}
    </label>
    <textarea v-model="night_sgbv"></textarea><br />

    <h1 style="font-weight: bold">2. {{ $t('createResearch.h2') }}</h1>
    <br />

    <label
      >{{ $t('createResearch.l7') }}</label
    >
    <textarea v-model="crisis_sgbv"></textarea>

    <label
      >{{ $t('createResearch.l8') }}
    </label>
    <select v-model="emergency_sgbv">
      <option value="Yes">{{ $t('createResearch.op1') }}</option>
      <option value="No">{{ $t('createResearch.op2') }}</option>
    </select>
    <label
      >{{ $t('createResearch.l9') }}?
    </label>
    <select v-model="pandemic_sgbv">
      <option value="Yes">{{ $t('createResearch.op1') }}</option>
      <option value="No">{{ $t('createResearch.op2') }}</option></select
    ><br />
    <h1 style="font-weight: bold">3. {{ $t('createResearch.h3') }}</h1>
    <br />

    <label
      >{{ $t('createResearch.l10') }}</label
    >
    <textarea v-model="myth_sgbv"></textarea>
    <label
      >{{ $t('createResearch.l11') }}
    </label>
    <textarea v-model="right_sgbv"></textarea>
    <label
      >{{ $t('createResearch.l12') }}
    </label>
    <select v-model="mood_sgbv">
      <option value="Yes">{{ $t('createResearch.op1') }}</option>
      <option value="No">{{ $t('createResearch.op2') }}</option>
    </select>

    <label>{{ $t('createResearch.l13') }} </label>
    <select v-model="beat_sgbv">
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
    <label
      >{{ $t('createResearch.l14') }}
    </label>
    <textarea v-model="early_sgbv"></textarea>
    <label
      >{{ $t('createResearch.l15') }}
    </label>
    <textarea v-model="marry_sgbv"></textarea>
    <label
      >{{ $t('createResearch.l16') }}
    </label>
    <textarea v-model="abused_sgbv"></textarea>
    <label>{{ $t('createResearch.l17') }}</label>
    <textarea v-model="parental_sgbv"></textarea>
    <label
      >{{ $t('createResearch.l18') }}
    </label>
    <textarea v-model="barriers_sgbv"></textarea>
    <label
      >{{ $t('createResearch.l19') }}
    </label>
    <textarea v-model="justification_sgbv"></textarea>
    <label
      >{{ $t('createResearch.l20') }}
    </label>
    <textarea v-model="recommendation_sgbv"></textarea>
    <div class="btn-container">

         <div class="loader" v-if="loading">
            <Loader/>
        </div>
      <button v-else class="apply-btn" @click.prevent="createResearch">{{ $t('createResearch.btn1') }}</button>
    </div>
  </div>
  <Date :Cdate="getDate" :Ctime="getTime" />
</template>

<script>
import axios from "axios";
import Snavbar from "@/components/Snavbar";
import Date from "@/components/toolpit/Date.vue";
import Loader from '@/components/toolpit/Loader.vue'

export default {
  components: {
    Snavbar,
    Date,
    Loader
  },
  data() {
    return {
      location_sgbv: "",
      any_sgbv: "",
      story_sgbv: "",
      education_sgbv: "",
      revealing_sgbv: "",
      night_sgbv: "",
      crisis_sgbv: "",
      emergency_sgbv: "",
      pandemic_sgbv: "",
      myth_sgbv: "",
      mood_sgbv: "",
      beat_sgbv: "",
      early_sgbv: "",
      marry_sgbv: "",
      abused_sgbv: "",
      parental_sgbv: "",
      barriers_sgbv: "",
      justification_sgbv: "",
      recommendation_sgbv: "",
      right_sgbv: "",

      currentDate: "",
      currentTime: "",
      token: "",
      loading: false,
    };
  },
  methods: {
    getDate(date) {
      this.currentDate = date;
      // console.log("yowa", this.currentDate);
    },
    getTime(time) {
      this.currentTime = time;
    },
    async createResearch() {
      this.loading = true;
      try {
        let result = await axios.post(
          `https://kwiklik.herokuapp.com/research/create/${this.token}/`,
          {
            location_sgbv: this.location_sgbv,
            any_sgbv: this.any_sgbv,
            story_sgbv: this.story_sgbv,
            education_sgbv: this.education_sgbv,
            revealing_sgbv: this.revealing_sgbv,
            night_sgbv: this.night_sgbv,
            crisis_sgbv: this.crisis_sgbv,
            emergency_sgbv: this.emergency_sgbv,
            pandemic_sgbv: this.pandemic_sgbv,
            myth_sgbv: this.myth_sgbv,
            mood_sgbv: this.mood_sgbv,
            beat_sgbv: this.beat_sgbv,
            early_sgbv: this.early_sgbv,
            marry_sgbv: this.marry_sgbv,
            abused_sgbv: this.abused_sgbv,
            parental_sgbv: this.parental_sgbv,
            barriers_sgbv: this.barriers_sgbv,
            justification_sgbv: this.justification_sgbv,
            recommendation_sgbv: this.recommendation_sgbv,
            right_sgbv: this.right_sgbv,
            date_sgbv: this.currentDate,
          }
        );
        (this.location_sgbv = ""),
          (this.any_sgbv = ""),
          (this.story_sgbv = ""),
          (this.education_sgbv = ""),
          (this.revealing_sgbv = ""),
          (this.night_sgbv = ""),
          (this.crisis_sgbv = ""),
          (this.emergency_sgbv = ""),
          (this.pandemic_sgbv = ""),
          (this.myth_sgbv = ""),
          (this.mood_sgbv = ""),
          (this.beat_sgbv = ""),
          (this.early_sgbv = ""),
          (this.marry_sgbv = ""),
          (this.abused_sgbv = ""),
          (this.parental_sgbv = ""),
          (this.barriers_sgbv = ""),
          (this.justification_sgbv = ""),
          (this.recommendation_sgbv = "");
        (this.right_sgbv = "");
        
       return result
        
      } catch (e) {
        console.log(e);
      }
       this.loading = false;
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    // console.log(this.token)
    // console.log(this.currentDate);
  },
};
</script>

<style scoped>
.main-container {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 30px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
  font-family: "Roboto", sans-serif;
}

label {
  color: #676e76;
  display: inline-block;
  /* margin-top: 25px; */
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
  background: #fff;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #f0f0f0;
  outline: none;
  color: #555;
}
textarea {
  height: 80px;
}
option {
  width: 100px;
  /* color: green; */
}
input:focus {
  outline: none;
  border: 1px solid #1cb902;
  background: white;
}
.btn-container {
  margin: 0px auto;
  text-align: center;
}
.apply-btn {
  width: 80px;
  background: lightblue;
  margin: 10px 0px;
  border-radius: 5px;
  color: black;
  padding: 3px 5px;

}
button{
  outline: none;
}
/* .apply-btn:hover {
  background: rgb(63, 52, 52);
} */
 .loader{
    text-align: center;
    margin: 0px auto;
}  
</style>