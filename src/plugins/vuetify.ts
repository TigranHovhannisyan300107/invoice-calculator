import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        "dark-red": "#d32f2f",
        "dark-green": "#43a047",
      },
    },
  },
});
