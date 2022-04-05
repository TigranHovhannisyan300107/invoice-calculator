export type Invoice = {
  select: boolean;
  name: string;
  price: number;
  count: number;
  sum: number;
};

export type Invoices = {
  invoicesList: Invoice[];
};
