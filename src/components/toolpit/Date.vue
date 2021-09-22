<template>
  <div id="app">
    <!-- <h1>nicesnippets.com</h1>
    {{ message }}
    {{date}} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Welcome, Please Wait....",
      date: '',
      time: '',
      
    };
  },
  props:{
      
      Cdate:Function,
      Ctime: Function
  },
  methods: {
    callFunction: function () {
      var currentDate = new Date();
      // console.log(currentDate);
      this.time = currentDate

      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "-");
      // console.log(currentDateWithFormat);
      this.date = currentDateWithFormat
    },
  },
  mounted() {
    this.callFunction();
    this.Cdate(this.date);
    this.Ctime(this.time)
  },
};
</script>

<style scoped>
</style>