import type { Invoice, Invoices } from "@/types/invoice";

export type State = {
  invoices: Invoices;
};

export type Action =
  | { type: "addInvoice"; payload: { invoice: Invoice } }
  | { type: "markAsPaid"; payload: { id: string } }
  | { type: "deleteInvoice"; payload: { id: string } };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "addInvoice": {
      return state;
    }

    case "markAsPaid": {
      const { id } = action.payload;

      if (id == null) return state;

      return {
        ...state,
        invoices: state.invoices.map((invoice) => {
          if (invoice.id !== id) return invoice;

          if (invoice.status !== "pending") return invoice;

          return { ...invoice, status: "paid" };
        }),
      };
    }

    case "deleteInvoice": {
      const { id } = action.payload;

      if (id == null) return state;

      return {
        ...state,
        invoices: state.invoices.filter((invoice) => invoice.id !== id),
      };
    }

    default:
      throw new Error("Invalid reducer action");
  }
}
