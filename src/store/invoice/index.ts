import { ActionContext } from "vuex";
import { Invoices, Invoice } from "../../utils/types/invoices";

export const allInvoicesStore = {
  state: {
    invoicesList: [],
  },

  getters: {
    getAllInvoices(state: Invoices) {
      return state.invoicesList;
    },

    getAllIsSelected(state: Invoices) {
      const index =
        state.invoicesList.length &&
        state.invoicesList.findIndex((invoice: Invoice) => !invoice.select);
      return index == -1;
    },
  },

  mutations: {
    createNewInvoice(state: Invoices, invoice: Invoice): void {
      state.invoicesList = [...state.invoicesList, invoice];
    },

    removeSelectedInvoices(state: Invoices): void {
      state.invoicesList = state.invoicesList.filter(
        (invoice: Invoice) => !invoice.select
      );
    },

    changeInvoiceSelectionState(state: Invoices, index: number): void {
      const currentSelected = state.invoicesList[index].select;
      state.invoicesList[index].select = !currentSelected;
    },

    selectAllInvoices(state: Invoices, isSelected: boolean): void {
      state.invoicesList.map(
        (invoice: Invoice) => (invoice.select = isSelected)
      );
    },
  },

  actions: {
    createNewInvoice(
      context: ActionContext<Invoices, Invoices>,
      invoice: Invoice
    ): void {
      context.commit("createNewInvoice", invoice);
    },

    removeSelectedInvoices(context: ActionContext<Invoices, Invoices>): void {
      context.commit("removeSelectedInvoices");
    },

    changeInvoiceSelectionState(
      context: ActionContext<Invoices, Invoices>,
      index: number
    ): void {
      context.commit("changeInvoiceSelectionState", index);
    },

    selectAllInvoices(
      context: ActionContext<Invoices, Invoices>,
      isSelected: boolean
    ): void {
      context.commit("selectAllInvoices", isSelected);
    },
  },
};
