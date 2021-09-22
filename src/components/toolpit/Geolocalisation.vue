<template>

    <div v-if="errorStr">
      Sorry, but the following error occurred: {{ errorStr }}
    </div>

    <div v-if="gettingLocation">
      <i>Getting your location...</i>
    </div>

    <div v-if="location">
      Your location data is {{ location.coords.latitude }},
      {{ location.coords.longitude }}
     <p>long:{{ longitude }}</p> 
      <p>lat:{{ latitude }}</p>
      <button @click.prevent="getPosition(longitude,latitude)">click</button>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      location: null,
      gettingLocation: false,
      errorStr: null,
      longitude: '',
      latitude: '',
    };
  },
  props:{
    getPosition:Function
  },
    created() {
    //do we support geolocation
    if(!("geolocation" in navigator)) {
      this.errorStr = 'Geolocation is not available.';
      return;
    }

    this.gettingLocation = true;
    // get position
    navigator.geolocation.getCurrentPosition(pos => {
      this.gettingLocation = false;
      this.location = pos;
      this.longitude= pos.coords.longitude
      this.latitude= pos.coords.latitude
    }, err => {
      this.gettingLocation = false;
      this.errorStr = err.message;
    })
  },
  mounted(){

  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>