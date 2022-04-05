<template>
  <v-row
    :class="{ 'selected-invoice': invoiceIsSelected }"
    class="invoice-container"
  >
    <v-col class="d-flex align-center">
      <v-checkbox
        v-model="invoiceIsSelected"
        @change="$emit('changeInvoceSelection')"
      />
    </v-col>
    <v-col class="d-flex align-center">{{ invoice.name }}</v-col>
    <v-col class="d-flex align-center">{{
      $n(invoice.price, "currency")
    }}</v-col>
    <v-col class="d-flex align-center">{{ $n(invoice.count) }}</v-col>
    <v-col class="d-flex align-center">{{ $n(invoice.sum, "currency") }}</v-col>
  </v-row>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Invoice } from "../../utils/types/invoices";

export default {
  name: "Invoice-Calculator-Item",
  props: {
    invoice: Object as PropType<Invoice>,
  },

  data() {
    return {
      invoiceIsSelected: this.invoice.select,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-input {
  max-height: 56px !important;
}

.invoice-container:not(:last-child) {
  border-bottom: 1px solid black;
}

.selected-invoice {
  background: rgb(34 50 43 / 10%) !important;
}
</style>
