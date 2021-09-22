<template>
  <div class="toolpit">
<div id="target">
    <HomeSLider/>
  </div>
  <div class="triggers">
    <button id="triggerUp" title="Only slides up the target element"></button>
    <button id="triggerDown" title="Only slides down the target element"></button>
    <button id="triggerToggle" title="Toggle slide-up and slide-down states for the target"><i class="fas fa-chevron-down"></i></button>
  </div>
  </div>
</template>

<script>
import HomeSLider from '../home/HomeSlider.vue'
  export default {
    components:{
      HomeSLider
    },
    data(){
      return{

      }
    },
    mounted(){
      let slideUp = (target, duration=500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      //alert("!");
    }, duration);
  }

  let slideDown = (target, duration=500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
      display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);

 
  }
   let slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  }
   
// ====  
  
let speedAnimation = 400;
let targetId = document.getElementById("target");

let slideBtnClick = (id, sl) => document.getElementById(id).addEventListener('click', () => sl(targetId, speedAnimation));

slideBtnClick('triggerUp', slideUp);
slideBtnClick('triggerDown', slideDown);
slideBtnClick('triggerToggle', slideToggle);
    }
  }
</script>

<style scoped>
*{margin:0; padding:0;}



.toolpit{
    z-index: 9999;
  opacity: 1;
}
button{ 
  border:none;
  /* padding:10px 15px; */
  margin: 0px;
  cursor:pointer;
  background:#ffd000;
  color:#333;
  outline: none;
  transform: scale(1);
  transition: .4s ease;
  border-radius: 25px;
  position: relative;
   z-index: 9999;
  opacity: 1;

}
button:hover{ 
  transform: scale(1.1);
}

button#triggerToggle{
  /* background:#faf7e9; */
  color:#333;
}

#target {
  padding: 0em 0em;
  background-color: inherit;
  text-align: center;
  color:#333;
  font-weight: 700;
  /* border-radius: 0 0 20px 20px; */
  box-sizing: border-box;
  /* display: block; */
  width: 100vw;
  display: none;
  margin: 0 auto;
  color:#333;
    z-index: 9999;
  opacity: 1;
  position: relative;
}


.triggers {
  text-align: left;
    z-index: 9999;
  opacity: 1;
}
.fas{
  font-size: .7rem;
}
</style>