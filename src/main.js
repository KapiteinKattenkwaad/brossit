import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

import AOS from "aos";
import "aos/dist/aos.css";



new Vue({
  created() {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 20,
      easing: 'ease-in-out',

    });
  },
  router,
  render: h => h(App)
}).$mount("#app");
