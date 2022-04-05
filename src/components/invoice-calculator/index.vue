<template>
  <v-card width="75vw" class="invoice-list-container pa-10">
    <v-row>
      <v-col cols="auto" class="invoices-title pa-0">
        {{ $i18n.t("Invoice_Calculator") }}
      </v-col>
    </v-row>
    <InvoiceCalculatorHeader />
    <v-row class="invoices-header align-center">
      <v-col>
        <v-checkbox
          v-model="allInvocesIslSelected"
          :disabled="!invoices.length"
        />
      </v-col>
      <v-col>{{ $i18n.t("Name") }}</v-col>
      <v-col>{{ $i18n.t("Price") }}</v-col>
      <v-col>{{ $i18n.t("Count") }}</v-col>
      <v-col>{{ $i18n.t("Sum") }}</v-col>
    </v-row>
    <v-row class="invoices-container mt-5">
      <v-col
        v-if="invoices.length"
        :key="allInvocesIslSelected || invoices.length"
        class="d-flex flex-column"
      >
        <InvoiceCalculatorItem
          v-for="(invoice, index) in invoices"
          :key="index"
          :invoice="invoice"
          @changeInvoceSelection="changeInvoceSelection(index)"
        />
      </v-col>
      <v-col v-else class="d-flex justify-center">
        {{ $i18n.t("No_Invoices") }}
      </v-col>
    </v-row>
    <v-row class="justify-space-between mt-8">
      <v-col cols="auto" class="pa-0">
        <v-btn
          :disabled="!invoiceIsSelected"
          color="primary"
          class="dark-red"
          @click="deleteSelectedInvoices"
        >
          {{ $i18n.t("Delete") }}
        </v-btn>
      </v-col>
      <v-col cols="auto" class="pa-0">
        {{ $i18n.t("Total") }}: {{ $n(totalInvoicesPrice, "currency") }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { Invoice, Invoices } from "../../utils/types/invoices";
import InvoiceCalculatorItem from "./invoiceItem.vue";
import InvoiceCalculatorHeader from "./invoiceHeader.vue";

export default {
  name: "Invoice-Calculator",

  components: {
    InvoiceCalculatorItem,
    InvoiceCalculatorHeader,
  },

  computed: {
    ...mapGetters(["getAllInvoices", "getAllIsSelected"]),
    invoices(): Invoices {
      return this.getAllInvoices;
    },

    allInvocesIslSelected: {
      get() {
        return this.getAllIsSelected;
      },

      set(isSelected: boolean) {
        this.selectAllInvoices(isSelected);
      },
    },

    invoiceIsSelected(): boolean {
      const index = this.invoices.findIndex(
        (invoice: Invoice) => invoice.select
      );
      return index > -1;
    },

    totalInvoicesPrice(): number {
      return this.invoices
        .map((invoice: Invoice) => invoice.sum)
        .reduce((prev: number, curr: number) => prev + curr, 0);
    },
  },

  methods: {
    ...mapActions([
      "selectAllInvoices",
      "removeSelectedInvoices",
      "changeInvoiceSelectionState",
    ]),

    deleteSelectedInvoices() {
      this.removeSelectedInvoices();
    },

    changeInvoceSelection(index: number) {
      this.changeInvoiceSelectionState(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.invoice-list-container {
  background-color: transparent !important;
}

.invoices-title {
  font-size: 4em;
}

.invoices-header,
.invoices-container {
  border: 1px solid black;
}
</style>
