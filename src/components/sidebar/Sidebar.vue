<template>
    <div class="sidebar">
        
       <div class="sidebar-main-contain" >
           <i class="material-icons menu" @click="$emit('close')">cancel</i>
            <div class="sidebar-content" >
            
            <router-link to="/home-page"><box-icon name='home' color='#2c3e50' ></box-icon></router-link>
            <router-link to="/profile"><box-icon type='solid' name='user-account' color='#2c3e50'></box-icon></router-link>
            <router-link to="/education"><box-icon name='book' color='#2c3e50' ></box-icon></router-link>
            <router-link to="#"><box-icon name='log-out-circle' color='#2c3e50' ></box-icon></router-link>
        </div>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // showSidebar: true
            }
        },
        methods:{

        },
        emits:['close']
    }
</script>

<style  scoped>
    .sidebar{
    max-width: 420px;
    margin: 0px auto;
    background: white;
    text-align: left;
    padding: 0px 0px;
    border-radius: 10px;
    font-size: 30px;
    
}
.sidebar-main-contain i{
    text-align: right;
    color: crimson;
    cursor: pointer;
    margin-top: 50px;
    
}
.sidebar-content{
  display: flex;
  flex-direction: column;
  height: 78vh;
  justify-content: space-around;
  align-items: center;
  
  
  
}
.sidebar-main-contain{
  width: 80px;
  position: fixed;
  text-align: right;
  background: #D0E1DB;
  box-sizing: border-box;
  box-shadow: 1px 1px 1px 1px #D0E1DB;
  transition: all 150ms ease-in 0s;
  z-index: 9999;
  opacity: 1;
  left: 0;
}
box-icon {
    height: 30px;
    margin-bottom: 0px;
    width: 30px;
    color: #2c3e50;
}
box-icon:hover{
    color:green ;
    box-shadow: 3px 3px 3px 5px #f0f0f0;
    transition: ease-in-out 0.6s;
}

.slide-enter-active,
.slide-leave-active
{
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
}

</style>