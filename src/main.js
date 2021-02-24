import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false;
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: ''
  }
})

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
