<template>
<input type="checkbox" name="sideMenuTrigger" id="sideMenuTrigger" style="display: none;">
<label for="sideMenuTrigger" id="view">
  <MenuBar/>
</label>
<label for="sideMenuTrigger" id="close">
  <i class="fa fa-times" aria-hidden="true"></i>
</label>

  
    <aside>
        <div>
       <router-link to="/education">
         <i class="fas fa-user-graduate"></i>Education
       </router-link> 

       <router-link to="/requests/request">
         <i class="fas fa-people-carry"></i>Request
       </router-link> 

       <router-link to="/profile">
         <i class="fas fa-user-md"></i>Job request
       </router-link> 

       <router-link to="/profile">
         <i class="fas fa-procedures"></i>P request
       </router-link> 
      
        </div>
        <hr>

        <router-link  to="#">
         <i class="fas fa-sign-out-alt"></i>Logout
       </router-link> 
           
    </aside>
</template>

<script>
import MenuBar from '@/components/toolpit/MenuBar.vue'
    export default {
        components:{
          MenuBar,
        }
    }
</script>

<style scoped>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 1rem;
  left: 0;
  top: 0;
}
.fa{
  color: #000;
}
body {
  font-family: 'Squada One', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: none;
  display: flex;
}


@media(max-width:320px){
  nav h4 {
    margin-left:30px;
  }
}
span{
  display: flex;
}

aside {
  color: #fff;
  width: 0;
  height: 100vh;
  padding-top: 10px;
  background-image: linear-gradient(30deg, #8ea8d3, #44a7fd);
  position: absolute;
  top: 0;
  transition: width 0.5s ease-in-out;
  font-weight: 600;

}

aside a {
  font-size: 1em;
  color: #fff;
  display: block;
  padding: 12px 12px 12px 30px;
  margin: 60px auto;
  text-decoration: none;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
}

aside > div {
  margin-top: 3em;
}

aside a:hover {
  color: #3f5efb;
  background: #fff;
  outline: none;
  position: relative;
  background-color: #fff;
  border-radius: 20px 0 0 20px;
}

aside a i {
  margin-right: 5px;
}

i.fa-sign-out-alt {
  margin-left: 5px;
}

aside hr {
  opacity: 0;
}

label#close,
label#view {
  position: absolute;
  margin: 0 35px 0 10px;
  color: #efefef;
  padding: 10px 0;
  font-size: 22px;
  width: 25px;
  text-align: center;
  z-index: 10;
  opacity: 1;
  transition: opacity 0.5s ease-out;
  cursor: pointer;
}

label#close {
  opacity: 0;
}

input#sideMenuTrigger:checked ~ aside {
  width: 150px;
  padding-left: 10px;
}

input#sideMenuTrigger:checked ~ label#close,
input#sideMenuTrigger:checked ~ aside a,
input#sideMenuTrigger:checked ~ aside hr {
  opacity: 1;
  transition: opacity 1.8s ease-in-out;
}

input#sideMenuTrigger:checked ~ label#close {
  transition-duration: 0.5s;
}

input#sideMenuTrigger:not(:checked) ~ aside a {
  position: absolute;
  top: -100px;
  left: -100px;
  z-index: -999;
}

input#sideMenuTrigger:checked ~ label#view {
  opacity: 0;
}
.fas{
    color: black;
    font-size: 1.2rem;
}
.logout{
  bottom: 0;
}

</style>