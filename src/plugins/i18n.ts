import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "../locales/en.json";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",

  messages: {
    en: en.messages,
  },

  numberFormats: {
    en: en.numberFormats,
  },
});

export default i18n;
