import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { allInvoicesStore } from "./invoice";

const dataPersistState = createPersistedState({
  paths: ["allInvoicesStore"],
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    allInvoicesStore,
  },
  plugins: [dataPersistState],
});
