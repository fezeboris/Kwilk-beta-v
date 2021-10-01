<template>
    <div class="footer">
        <!-- <hr> -->
        <div class="footer-contain">
            <div class="footer-btn">
            <router-link to="/report-sheet"><i class="fab fa-shopware"></i></router-link>
            <router-link to="/education"><i class="fas fa-user-graduate"></i></router-link>
            <router-link to="/home-slider"><i class="fas fa-home"></i></router-link>
           
            <router-link to="/help"><i class="fas fa-ambulance"></i></router-link>
             <router-link to="/map"><i class="fas fa-map-marker-alt"></i></router-link>
            
            
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .footer{
    max-width: 420px;
    margin: 0px auto;
    background: white;
    text-align: left;
    padding: 20px 0px;
    color: rgb(17, 118, 151);
    border-radius: 10px;
}
.fas, .fab{
    font-size: 18px;
    text-align: center;
    padding-top: 7px;
}


.footer-btn{
    display: flex;
    flex: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    bottom: 0px;
    width: 100%;
    margin: 0px auto;
    height: 60px;
    padding: 0px 0px;
    text-align: center;
    

}
.icon{
    margin-top: 5px;
}
a {
    text-decoration: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    outline: none;
    /* margin-top: 20px; */
}
    

.footer-contain{
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  background: #fff;
}

.router-link-active{
  background: #1CB902 ;
  color: white;
  border-radius: 20px;
  align-items: center;
  height: 35px;
  width: 35px;
  box-shadow:  0 0 8px 5px rgba(6, 214, 17, 0.6);

}
</style>