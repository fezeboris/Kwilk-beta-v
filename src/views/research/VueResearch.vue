<template>
  <Snavbar />
  <div class="main-container" >
     <div class="contain" v-for="list in researchLists" :key="list.id">
     
     <h2>User: {{list.user}}</h2>
     <p>{{list.date_sgbv}}</p>

    <label class="lable">1. Location Description</label>
      <p><i>response:</i> {{list.location_sgbv}}</p>
    <label
      >2. Do you have anyone in the family or in the community that has
      experience SGBV in any form (rape, intimate partner violence, sex for
      marks, revenge porn (posting their naked pics or videos online), early
      child marriage,
    </label>
    <p><i>response:</i> {{list.any_sgbv}}</p>

    <label
      >3. Can you share a story of anyone you know who had experienced any of
      the forms of SGBV and how the situation was handled.</label
    >
    <p><i>response:</i> {{list.story_sgbv}}</p>

    <label
      >4. Do you think providing educative talks through school clubs and
      community radios programs can reduce the incidence of SGBV cases?
      Why?</label
    >
    <p><i>response:</i> {{list.education_sgbv}}</p>

    <label
      >5. if a girl is wearing a more revealing dress where some of her body
      parts such as breast etc. are exposed and gets harassed or rape, who do
      you think is to be blamed. Why?
    </label>
    <p><i>response:</i> {{list.revealing_sgbv}}</p>

    <label
      >6. If a girl is moving at night and raped or harassed, do you think it’s
      her fault?
    </label>
    <p><i>response:</i> {{list.night_sgbv}}</p>

    <h1 style="font-weight: bold">Crisis</h1>
    <br />

    <label
      >7. How has the crisis affected the rate of SGBV in the community?</label
    >
    <p><i>response:</i> {{list.crisis_sgbv}}</p>

    <label
      >8: Do you have emergency lines or report system that you can rely on?
    </label>
    <p><i>response:</i> {{list.emergency_sgbv}}</p>
    <label
      >9. Do you think the pandemic Covid has affected the occurrence rate of
      SGBV?
    </label>
    <p><i>response:</i> {{list.pandemic_sgbv}}</p>
    <h1 style="font-weight: bold">Culture</h1>
    <br />

    <label
      >10. What myths or superstitious or spiritual beliefs exists around rape
      or intimate partner violence or homosexuality etc.?</label
    >
    <p><i>response:</i> {{list.myth_sgbv}}</p>
    <label
      >11. Do you think you have rights over your partner, and over your
      partners body for any reason? Why?
    </label>
    <p><i>response:</i> {{list.right_sgbv}}</p>
    <label
      >12. If you want sex and your partner is not in the mood, do you have the
      right to force him/her?
    </label>
    <p><i>response:</i> {{list.mood_sgbv}}</p>

    <label
      >13. Is it right for a one partner to beat up his/her partner?
    </label>
    <p><i>response:</i> {{list.beat_sgbv}}</p>
    <label
      >14. Can you give some of the factors that lead to early child marriage?
    </label>
    <p><i>response:</i> {{list.early_sgbv}}</p>
    <label
      >15. Do you think it’s ok for a parent to marry off their child without
      the child’s concern? Why?
    </label>
    <p><i>response:</i> {{list.marry_sgbv}}</p>
    <label
      >16. Have there been any situations where your child or another CWD (child
      with disability) has been sexually abused or violently attacked? Tell us
      about it.
    </label>
    <p>{{}}</p>
    <label>17. Tell us how parental education can put an end to SGBV?</label>
    <p><i>response:</i> {{list.parental_sgbv}}</p>
    <label
      >18. What do you think are some of the barriers that make victims of SGBV
      hesitant to speak up?
    </label>
    <p><i>response:</i> {{list.barriers_sgbv}}</p>
    <label
      >19. Do you think that there is any justification for any form of SGBV?
    </label>
    <p><i>response:</i> {{list.justification_sgbv}}</p>
    <label
      >20. Can you give recommendations on how we can fight against SGBV in the
      communities?
    </label>
    <p><i>response:</i> {{list.recommendation_sgbv}}</p>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import Snavbar from "@/components/Snavbar";
export default {
  components: {
    Snavbar,
  },
  data() {
    return {
      token: "",
      researchLists: [],
    };
  },
  methods: {
    async detResearchList() {
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/research/get/${this.token}/`
        );

        this.researchLists = result.data.research_list;
        console.log(result)
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    this.detResearchList()
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
 
  font-family: "Roboto", sans-serif;
}
.contain{
 border: 1px solid #f0f0f0;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
border-radius: 5px;
padding:5px 10px;
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
p {
  color: lightblue;
}
</style>