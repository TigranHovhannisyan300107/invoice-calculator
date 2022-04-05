import Vue from "vue";
import VueI18n from "vue-i18n";

export const requiredField = (i18n: VueI18n) => (value: string) =>
  value?.trim()?.length !== 0 || i18n.t("validations.required_field");

export const lessThan = (maxValue: number, i18n: VueI18n) => (value: number) =>
  value < maxValue || i18n.t("validations.should_be_less", { maxValue });

export const bigThan = (minValue: number, i18n: VueI18n) => (value: number) =>
  value > minValue || i18n.t("validations.should_be_greather", { minValue });

export const valueMaxLength =
  (valueMaxLenght: number, i18n: VueI18n) => (value: string | Array<never>) =>
    value?.length < valueMaxLenght ||
    i18n.t("validations.max_length", { valueMaxLenght });

Vue.prototype.$rules = {
  requiredField,
  lessThan,
  bigThan,
  valueMaxLength,
};
