<template>
  <NotificationNav />

  <div class="notifications">
    <div class="notification-main-content">
      <hr style="border-top: dotted 1px; color: #8ba0ae; width: 100%" />
      <div class="loader" v-if="loading">
        <Loader />
      </div>

       <div v-for="unseen in uNofications" :key="unseen.index">
        <div class="notification-content-unread" @click="read">
          <p>{{ unseen }}</p>
        </div>
      </div>
      <div v-for="seen in sNofications" :key="seen.index" >
        <div class="notification-content-read">
          <p>{{ seen }}</p>
        </div>
      </div>
     
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/toolpit/Loader.vue";

import NotificationNav from "../notifications/NotificationNav.vue";
export default {
  components: {
    Footer,
    Loader,
    NotificationNav,
  },
  data() {
    return {
      token: "",
      sNofications: [],
      uNofications: [],
      loading: false,
    };
  },
  methods: {
    async getNofif() {
      this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/notifications/get/${this.token}/`
        );

        console.log(result.data);
        this.uNofications = result.data.notification_unseen;
        this.sNofications = result.data.notification_seen;
      } catch (e) {
        console.log(e);
      }
      this.loading = false;
    },
    async read() {
    //   this.loading = true;
      try {
        let result = await axios.get(
          `https://kwiklik.herokuapp.com/notifications/update/${this.token}/`
        );

        // console.log(result.data);
        this.sNofications = result.data.notification_seen;
      } catch (e) {
        console.log(e);
      }
    //   this.loading = false;
      window.location.reload();
    },
  },
  mounted() {
    this.token = localStorage.getItem("userInfo");
    this.getNofif();
  },
};
</script>

<style scoped>
.notifications {
  max-width: 420px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 30px 10px;
  border-radius: 10px;
}
.notification-main-content{
    margin-top: 20px;
}


.notification-content-read p
 {
    font-size: .9rem;
    padding: 0px 5px;
}
.notification-content-unread p{
    font-size: .9rem;
    padding: 0px 5px;
}
.notification-content-read {
  background: lightgreen;
  margin: 10px 0px;
  padding: 3px;
  border-radius: 5px;
}
.notification-content-unread {
  background: #ebe8e8;
  margin: 10px 0px;
  padding: 3px;
  border-radius: 5px;
}

.loader {
  text-align: center;
  margin: 0px auto;
}
</style>