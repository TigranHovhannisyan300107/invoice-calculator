import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import "./utils/validations";

Vue.config.productionTip = false;

new Vue({
  i18n,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
