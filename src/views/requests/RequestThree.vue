<template>
<Navbar/>
    <div class="request">

        <div class="request-header">
            <p>Request</p>
            <small>Patients who need your Help</small>
        </div>

        <div class="request-main-contain">
        <div class="request-content">

            <div class="request-profil"></div>
            <div class="request-info">
                <h3>Josian Josiane</h3>
                <small>678.23.20.12</small>
                <br><br>
                <h3>I need Help on:</h3>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    . Ullam officiis consequatur illo 
                    sint deleniti, impedit suscipit, vitae,
                     </p>
            </div>
        </div>
        <div class="request-content">

            <div class="request-profil"></div>
            <div class="request-info">
                <h3>Josian Josiane</h3>
                <small>678.23.20.12</small>
                <br><br>
                <h3>I need Help on:</h3>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    . Ullam officiis consequatur illo 
                    sint deleniti, impedit suscipit, vitae,
                     </p>
            </div>
        </div>
        <div class="request-content">

            <div class="request-profil"></div>
            <div class="request-info">
                <h3>Josian Josiane</h3>
                <small>678.23.20.12</small>
                <br><br>
                <h3>I need Help on:</h3>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    . Ullam officiis consequatur illo 
                    sint deleniti, impedit suscipit, vitae,
                     </p>
            </div>
        </div>
        <div class="request-content">

            <div class="request-profil"></div>
            <div class="request-info">
                <h3>Josian Josiane</h3>
                <small>678.23.20.12</small>
                <br><br>
                <h3>I need Help on:</h3>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    . Ullam officiis consequatur illo 
                    sint deleniti, impedit suscipit, vitae,
                     </p>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
    export default {
          components:{
            Footer,
            Navbar
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
.request{
    max-width: 420px;
    margin: 0px auto;
    background: white;
    text-align: left;
    padding: 28px 10px;
    border-radius: 10px;

}

.request-main-contain{
    margin-top: 70px;
}
.request-header{
    margin-top: 10px;
    position: fixed;
    width: 100%;
    height: 60px;
    background: white;
}
.request-header p, .request-info h3{
    margin: 10px 25px 10px 0px;
    color: #3F3D3D;
    font-size: 1.3rem ;
    line-height: 0rem;
    font-weight: bold;
    
}
.request-info{
    margin-left: 25px;
    float: left;
}
.request-info p{
    color: #8BA0AE;
    font-size: 13px;
    
}

small{
    
    color: #8BA0AE;
    font-size:0.8rem ;
    margin-bottom: 20px;
    /* line-height: 0.5rem; */
}
.request-profil{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #C4C4C4;
    /* margin-bottom: 30px;  */
    margin-right: 10px;
}
.request-content{
   border: 1px solid  #C4C4C4;
    display: grid;
    grid-gap: 0px;
    grid-template-columns: auto auto;
    /* flex-direction: row; */
    align-items: center;
    padding: 5px ;
    margin-bottom: 20px;
    margin-top: 20px;
    justify-content: space-between;
}

</style>