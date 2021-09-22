<template>
<div class="body">
        <label for="check">
      <input type="checkbox" id="check"/> 
      <span></span>
      <span></span>
      <span></span>
    </label>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.body{
  display:grid;
  /* place-items:center; */
  /* height:100vh; */
  background:#fff;
  margin:0;
  padding:0;
}

label{
 display:flex;
  flex-direction:column;
  width:28px;
  cursor:pointer;
}

label span{
  background: #000;
  border-radius:10px;
  height:2px;
  margin: 3.5px 0;
  transition: .4s  cubic-bezier(0.68, -0.6, 0.32, 1.6);

}


span:nth-of-type(1){
  width:100%;
  
}

span:nth-of-type(2){
  width:100%;
}


span:nth-of-type(3){
  width:50%;
 
}


input[type="checkbox"]{
  display:none;
}



</style>