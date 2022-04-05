<template>
  <v-form v-model="formIsValid" ref="form" class="mb-3 mt-8">
    <v-row>
      <v-col class="pl-0">
        <v-text-field
          v-model="newInvoice.name"
          :label="$i18n.t('Product_Name')"
          :rules="[
            $rules.requiredField($i18n),
            $rules.valueMaxLength(42, $i18n),
            isValidName,
          ]"
          variant="outlined"
        />
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model.number="newInvoice.price"
          :min="0"
          :label="$i18n.t('Price')"
          :rules="[$rules.lessThan(1000000, $i18n), $rules.bigThan(0, $i18n)]"
          type="number"
          variant="outlined"
        />
      </v-col>
      <v-col cols="2">
        <v-text-field
          v-model.number="newInvoice.count"
          :min="0"
          :label="$i18n.t('Count')"
          :rules="[$rules.lessThan(1000000, $i18n), $rules.bigThan(0, $i18n)]"
          type="number"
          variant="outlined"
        />
      </v-col>
      <v-col cols="1" class="pr-0">
        <v-btn
          :disabled="!formIsValid"
          color="primary"
          class="add-btn dark-green"
          @click="addNewInvoice"
        >
          {{ $i18n.t("Add") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { Invoice, Invoices } from "../../utils/types/invoices";

export default {
  name: "Invoice-Calculator-Header",

  data() {
    return {
      newInvoice: {
        name: "",
        price: 0,
        count: 0,
      },

      formIsValid: null,
    };
  },

  computed: {
    ...mapGetters(["getAllInvoices"]),

    invoices(): Invoices {
      return this.getAllInvoices;
    },

    isValidName() {
      const index = this.invoices.findIndex(
        (item: Invoice) => item.name === this.newInvoice.name?.trim()
      );
      return index == -1 || this.$i18n.t("validations.should_not_be_same");
    },
  },

  methods: {
    ...mapActions(["createNewInvoice"]),

    addNewInvoice() {
      if (!this.formIsValid) {
        return this.$refs.form.validate();
      }

      const { name, price, count } = this.newInvoice;

      this.createNewInvoice({
        ...this.newInvoice,
        name: name.trim(),
        sum: price * count,
        select: false,
      });

      this.newInvoice = {
        name: "",
        price: 0,
        count: 0,
      };

      return this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.add-btn {
  height: 56px !important;
  width: 100%;
}
</style>
