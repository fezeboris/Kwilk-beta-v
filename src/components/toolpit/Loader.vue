<template>
   <div class="loader"></div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.loader{
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(45deg,transparent,transparent 40%, #e5f403);
    animation: animate 2s linear infinite;
}
@keyframes animate{
    0%{
        transform: rotate(0deg);
        filter: hue-rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
        filter: hue-rotate(360deg);
    }
}
.loader:before{
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    background: white;
    border-radius: 50%;
    z-index: 1000;
}
.loader:after{
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(45deg,transparent,transparent 40%, #e5f403);
    border-radius: 50%;
    z-index: 1000;
    z-index: 1;
    filter: blur(30px);
}
</style>