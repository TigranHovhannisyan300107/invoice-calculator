<template>
  <v-app>
    <v-main class="pt-10">
      <v-row class="justify-center">
        <v-col cols="auto">
          <InvoiceCalculator />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import InvoiceCalculator from "./components/invoice-calculator/index.vue";

export default {
  name: "App",
  components: {
    InvoiceCalculator,
  },
};
</script>

<style lang="scss">
.v-application--wrap {
  background: #e0f7fa;
}
</style>
