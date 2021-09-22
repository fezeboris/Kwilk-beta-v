<template>
<Navbar/>

    <div class="notifications">

        <div class="request-header">
            <p>Notifications</p>
            <small>Time is up</small>
        </div>

       <div class="notification-main-content">
           <hr style="border-top: dotted 1px; color:#8BA0AE; width:100%;"  />
            <div class="notification-content">
            <p>Dear Jacob, Your are reminded to: Report Your case to a lawyer</p>
            <div class="notification-status-read"></div>
        </div>
        <div class="notification-content">
            <p>Dear Jacob, Your are reminded to: Report Your case to a lawyer</p>
            <div class="notification-status-unread"></div>
        </div>
        <div class="notification-content">
            <p>Dear Jacob, Your are reminded to: Report Your case to a lawyer</p>
            <div class="notification-status-read"></div>
        </div>
        <div class="notification-content">
            <p>Dear Jacob, Your are reminded to: Report Your case to a lawyer</p>
            <div class="notification-status-unread"></div>
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
            // Sidebar,
            // Side,
            Navbar
        },
        data(){
            return{

            }
        }    
    }
</script>

<style scoped>
.notifications{
    max-width: 420px;
    margin: 0px auto;
    background: white;
    text-align: left;
    padding: 30px 10px;
    border-radius: 10px;
    
    }

.notification-main-content{
    margin-top: 70px;
}
.request-header{
    position: fixed;
    background: #fff;
    width: 100%;
    margin: 10px 0;
    padding-top: 10px;
}
.request-header p{
    margin: 0px 15px 10px 0px;
    color: #3F3D3D;
    font-size: 1.3rem ;
    line-height: 0rem;
    font-weight: bold;
    
}

small{   
    color: #8BA0AE;
    font-size:0.8rem ;
    line-height: 0.5rem;
}
.notification-content{
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    justify-content: space-between;
    background: #C4C4C4;
    padding: 8px 0px;
    margin-top: 10px;

    /* margin: 10px 0px; */
}
.notification-content p{
    margin-left: 10px;
}
.notification-status-read{
    width: 15px;
    height: 15px;
    border-radius: 20%;
    background:#11A35D ;
    margin-right: 0px;
    padding-right: 0px;
}
.notification-status-unread{
    width: 15px;
    height: 15px;
    border-radius: 20%;
    background:#9b8787 ;
    margin-right: 0px;
    padding-right: 0px;
}
.popup{
  position: fixed;
  width: 120px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgb(224, 220, 220);
  z-index: 9999;
   opacity: 1;
  right: 0;
  margin: 0px 10px;
  transition: ease-in-out 0.9s;
  padding: 10px 10px;
  background-color: #ffff;
  

}
.popup a{
  text-decoration: none;
  color:black;
  font-weight: bold;
}
.popup a:hover{
  color: green;

}
</style>