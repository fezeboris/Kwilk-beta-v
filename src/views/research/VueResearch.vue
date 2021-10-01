<template>
  <Snavbar />
  <div class="main-container" >

     <div class="loader" v-if="loading">
            <Loader/>
        </div>
     <div class="contain" v-for="list in researchLists" :key="list.id">
     
     <h2>{{ $t('createResearch.l22') }}: {{list.user}}</h2>
     <p>{{list.date_sgbv}}</p>

    <label class="lable">1. {{ $t('createResearch.l1') }}</label>
      <p><i>{{ $t('createResearch.l21') }}:</i> {{list.location_sgbv}}</p>
    <label
      >2. {{ $t('createResearch.l2') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.any_sgbv}}</p>

    <label
      >3. {{ $t('createResearch.l3') }}</label
    >
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.story_sgbv}}</p>

    <label
      >4. {{ $t('createResearch.l4') }}</label
    >
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.education_sgbv}}</p>

    <label
      >5. {{ $t('createResearch.l5') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.revealing_sgbv}}</p>

    <label
      >6. {{ $t('createResearch.l6') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.night_sgbv}}</p>

    <h1 style="font-weight: bold">{{ $t('createResearch.h2') }}</h1>
    <br />

    <label
      >7.{{ $t('createResearch.l7') }}</label
    >
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.crisis_sgbv}}</p>

    <label
      >8: {{ $t('createResearch.l8') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.emergency_sgbv}}</p>
    <label
      >9. {{ $t('createResearch.l9') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.pandemic_sgbv}}</p>
    <h1 style="font-weight: bold">{{ $t('createResearch.h3') }}</h1>
    <br />

    <label
      >10. {{ $t('createResearch.l10') }}</label
    >
    <p><i>response:</i> {{list.myth_sgbv}}</p>
    <label
      >11. {{ $t('createResearch.l11') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.right_sgbv}}</p>
    <label
      >12. {{ $t('createResearch.l12') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.mood_sgbv}}</p>

    <label
      >13. {{ $t('createResearch.l13') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.beat_sgbv}}</p>
    <label
      >14. {{ $t('createResearch.l14') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.early_sgbv}}</p>
    <label
      >15. {{ $t('createResearch.l15') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.marry_sgbv}}</p>
    <label
      >16. {{ $t('createResearch.l16') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.abused_sgbv}}</p>
    <label>17. {{ $t('createResearch.l17') }}</label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.parental_sgbv}}</p>
    <label
      >18. {{ $t('createResearch.l18') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.barriers_sgbv}}</p>
    <label
      >19. {{ $t('createResearch.l19') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.justification_sgbv}}</p>
    <label
      >20. {{ $t('createResearch.l20') }}
    </label>
    <p><i>{{ $t('createResearch.l21') }}:</i> {{list.recommendation_sgbv}}</p>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import Snavbar from "@/components/Snavbar";
import Loader from '@/components/toolpit/Loader.vue'

export default {
  components: {
    Snavbar,
    Loader
  },
  data() {
    return {
      token: "",
      researchLists: [],
      loading: false,
    };
  },
  methods: {
    async detResearchList() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/research/get/${this.token}/`
        );

        this.researchLists = result.data.research_list;
        // console.log(result)
        
      } catch (e) {
        console.log(e);
      }
       this.loading = false;
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
 .loader{
    text-align: center;
    margin: 0px auto;
}  
</style>