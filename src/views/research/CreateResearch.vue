<template>
  <Snavbar />
  <div class="main-container">
    <label class="lable">Location Description</label>
    <textarea type="text" v-model="location_sgbv"></textarea><br />

    <h1 style="font-weight: bold">
      1. Knowledge and experience on Sexual and Gender Based Violence (SGBV).
    </h1>
    <br />

    <label
      >Do you have anyone in the family or in the community that has experience
      SGBV in any form (rape, intimate partner violence, sex for marks, revenge
      porn (posting their naked pics or videos online), early child marriage,
    </label>

    <select v-model="any_sgbv">
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
    <label
      >Can you share a story of anyone you know who had experienced any of the
      forms of SGBV and how the situation was handled.</label
    >
    <textarea v-model="story_sgbv"></textarea>
    <label
      >Do you think providing educative talks through school clubs and community
      radios programs can reduce the incidence of SGBV cases? Why?</label
    >
    <textarea v-model="education_sgbv"></textarea>

    <label
      >if a girl is wearing a more revealing dress where some of her body parts
      such as breast etc. are exposed and gets harassed or rape, who do you
      think is to be blamed. Why?
    </label>
    <textarea v-model="revealing_sgbv"></textarea>

    <label
      >If a girl is moving at night and raped or harassed, do you think it’s her
      fault?
    </label>
    <textarea v-model="night_sgbv"></textarea><br />

    <h1 style="font-weight: bold">2. Crisis</h1>
    <br />

    <label
      >How has the crisis affected the rate of SGBV in the community?</label
    >
    <textarea v-model="crisis_sgbv"></textarea>

    <label
      >Do you have emergency lines or report system that you can rely on?
    </label>
    <select v-model="emergency_sgbv">
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
    <label
      >Do you think the pandemic Covid has affected the occurrence rate of SGBV?
    </label>
    <select v-model="pandemic_sgbv">
      <option value="Yes">Yes</option>
      <option value="No">No</option></select
    ><br />
    <h1 style="font-weight: bold">3. Culture</h1>
    <br />

    <label
      >What myths or superstitious or spiritual beliefs exists around rape or
      intimate partner violence or homosexuality etc.?</label
    >
    <textarea v-model="myth_sgbv"></textarea>
    <label
      >Do you think you have rights over your partner, and over your partners
      body for any reason? Why?
    </label>
    <textarea v-model="right_sgbv"></textarea>
    <label
      >If you want sex and your partner is not in the mood, do you have the
      right to force him/her?
    </label>
    <select v-model="mood_sgbv">
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>

    <label>Is it right for a one partner to beat up his/her partner? </label>
    <select v-model="beat_sgbv">
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
    <label
      >Can you give some of the factors that lead to early child marriage?
    </label>
    <textarea v-model="early_sgbv"></textarea>
    <label
      >Do you think it’s ok for a parent to marry off their child without the
      child’s concern? Why?
    </label>
    <textarea v-model="marry_sgbv"></textarea>
    <label
      >Have there been any situations where your child or another CWD (child
      with disability) has been sexually abused or violently attacked? Tell us
      about it.
    </label>
    <textarea v-model="abused_sgbv"></textarea>
    <label>Tell us how parental education can put an end to SGBV?</label>
    <textarea v-model="parental_sgbv"></textarea>
    <label
      >What do you think are some of the barriers that make victims of SGBV
      hesitant to speak up?
    </label>
    <textarea v-model="barriers_sgbv"></textarea>
    <label
      >Do you think that there is any justification for any form of SGBV?
    </label>
    <textarea v-model="justification_sgbv"></textarea>
    <label
      >Can you give recommendations on how we can fight against SGBV in the
      communities?
    </label>
    <textarea v-model="recommendation_sgbv"></textarea>
    <div class="btn-container">
      <button class="apply-btn" @click.prevent="createResearch">Submit</button>
    </div>
  </div>
  <Date :Cdate="getDate" :Ctime="getTime" />
</template>

<script>
import axios from "axios";
import Snavbar from "@/components/Snavbar";
import Date from "@/components/toolpit/Date.vue";
export default {
  components: {
    Snavbar,
    Date,
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
        (this.right_sgbv = ""), console.log(result);
      } catch (e) {
        console.log(e);
      }
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
</style>