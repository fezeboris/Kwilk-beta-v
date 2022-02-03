import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.css";
import "./assets/tailwind.css";
import "nprogress/nprogress.css";
import i18n from "./i18n";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// import axios from 'axios'
// const lang = localStorage.getItem('lang') || 'en';
// axios.defaults.baseURL = 'https://kwiklik.herokuapp.com/'
// axios.defaults.headers['Accept-Language'] = lang;

// use beforeEach route guard to set the language
// router.beforeEach((to, from, next) => {

//     // use the language from the routing param or default language
//     let language = to.params.lang;
//     if (!language) {
//       language = 'en'
//     }

//     // set the current language for i18n.
//     i18n.locale = language
//     next()
//     console.log(i18n.locale)
//   })

createApp(App)
  .use(i18n)
  .use(i18n)
  .use(i18n)
  .use(i18n)
  .use(i18n)
  .use(i18n)
  .use(i18n)
  .use(store)
  .use(router)
  .mount("#app");
