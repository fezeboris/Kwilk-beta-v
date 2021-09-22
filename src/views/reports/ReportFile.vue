<template>
<Navbar/>
    <div class="report">
       
         <div class="request-header">
            <p>Report Abuse</p>
            <small>Together let's fight Gender Based Violence</small>

        </div>
        
           <div class="result-contain">
               <hr style="border-top: dotted 1px; color:#8BA0AE; width:100%;"  />
            <div class="result">
                <div class="image"><img src="@/assets/images/car.png" alt=""></div>
                <div class="audio">
                    <p>2nd of September 2021</p>
                    <small style="font-size:0.6rem; padding-bottom:20px ;">Essos, yaounde-Cameroon</small> <br>
                    Case of: <span style="color:#02B96C;">Rape</span>
                    <div class="recording">
                            <i class="material-icons play" style="color='#1CB902'">play_arrow</i>
                        </div>
                </div>
                <div class="text">Lorem, ipsum dolor sit amet consectetur.
                    Quaerat ullam impedit nobis mollitia aut
                     iusto,quod animi illum,
                     </div>
            </div>
            <div class="result">
                <div class="image"><img src="@/assets/images/car.png" alt=""></div>
                <div class="audio">
                    <p>2nd of September 2021</p>
                    <small style="font-size:0.6rem; padding-bottom:20px ;">Essos, yaounde-Cameroon</small> <br>
                    Case of: <span style="color:#02B96C;">Rape</span>
                     <div class="recording">
                         <i class="material-icons play" >play_arrow</i>
                         
                            <!-- <box-icon class="play" name='play' flip='vertical' color='#1CB902' ></box-icon> -->
                        </div>
                </div>
                <div class="text">Lorem, ipsum dolor sit amet consectetur.
                    Quaerat ullam impedit nobis mollitia aut
                     iusto,quod animi illum,
                     </div>
            </div>
            <div class="result">
                <div class="image"><img src="@/assets/images/car.png" alt=""></div>
                <div class="audio">
                    <p>2nd  of September 2021</p>
                    <small style="font-size:0.6rem; padding-bottom:20px ;">Essos, yaounde-Cameroon</small> <br>
                    Case of: <span style="color:#02B96C;">Rape</span>
                    <div class="recording">
                            <i class="material-icons play" style="color='#1CB902'">play_arrow</i>
                        </div>
                </div>
                <div class="text">Lorem, ipsum dolor sit amet consectetur.
                    Quaerat ullam impedit nobis mollitia aut
                     iusto,quod animi illum,
                     </div>
            </div>
            <button @click.prevent="getReport">get</button>
            </div>
            <Footer/>
    </div>
</template>

<script>
import axios from 'axios'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'

    export default {
         components:{
         Footer,
         Navbar,
         
        },
        data(){
            return{
                showSidebar: false,
                token: '',
                report:[],
            }
        },
        mounted(){
            this.token = localStorage.getItem("userInfo")
                 console.log(this.token.value)
        },
        methods:{
             getReport(){
                 axios.get(`https://kwiklik.herokuapp.com/reports/get/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.J5aX59BbtNiOlhXmGCJCVekY33xt5AP2TVxl1azBqsY`)
                    .then((response)=>{
                        console.log(response.data)
                    })
                    .catch(error=>{
                        console.log(error)
                    })
             }   
        }
    }
</script>

<style scoped>
.report{
    max-width: 420px;
    margin: 0px auto;
    background: white;
    text-align: left;
    padding: 28px 10px;
    border-radius: 10px;
    
}


.request-header{
    margin-top: 0px;
    position: fixed;
    width: 100%;
    background: #fff;
    padding-top: 10px;
}
.request-header p{
    margin: 10px 25px 10px 0px;
    color: #3F3D3D;
    font-size: 1.3rem ;
    line-height: 0rem;
    font-weight: bold;
    
}
small{
    
    color: #8BA0AE;
    font-size:0.8rem ;
    /* margin-bottom: 20px; */
    line-height: 0.5rem;
}
.result-contain{
    margin-top: 70px;
}
.result{
  display: grid;
  grid-template-columns: auto auto auto ;
  grid-gap: 10px;
  font-size: 0.7rem;
  align-items: center;
  padding: 10px;
  margin-bottom: 0px;

}
.image img{
    height: 60px;
    width: 80px;
}
.text{
    border: 1px solid #8BA0AE;
    border-radius: 10px;
    padding: 5px;
}
.audio p{
    margin:  5px 0px;
    font-size: 0.7rem ;
    line-height: 0rem;
}
.audio small{
        color: #8BA0AE;
    font-size:0.8rem ;
    margin-bottom: 20px;
    line-height: 1rem;
}

.play{
    background:lightgreen;
    border-radius: 50%;
    margin: 5px;
    color:'#1CB902'
}


</style>