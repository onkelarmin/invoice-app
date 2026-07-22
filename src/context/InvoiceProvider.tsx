import type { Invoices, Invoice } from "@/types/invoice";
import { useEffect, useReducer, type ReactNode } from "react";
import {
  clearInvoices,
  getPlaceholderInvoices,
  loadInvoices,
  saveInvoices,
} from "./persistence";
import { InvoiceDispatchContext, InvoiceValueContext } from "./InvoiceContext";

export type State = {
  invoices: Invoices;
};

export type Action =
  | { type: "addInvoice"; payload: { invoice: Invoice } }
  | { type: "markAsPaid"; payload: { id: string } };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "addInvoice": {
      return state;
    }

    case "markAsPaid": {
      const { id } = action.payload;

      return {
        ...state,
        invoices: state.invoices.map((invoice) => {
          if (invoice.id !== id) return invoice;

          if (invoice.status !== "pending") return invoice;

          return { ...invoice, status: "paid" };
        }),
      };
    }

    default:
      throw new Error("Invalid reducer action");
  }
}

type InvoiceProviderProps = {
  children: ReactNode;
  initialInvoices?: Invoices;
};

export function InvoiceProvider({
  children,
  initialInvoices,
}: InvoiceProviderProps) {
  const [state, dispatch] = useReducer(
    reducer,
    initialInvoices,
    (initialInvoices) => ({
      invoices: initialInvoices ?? loadInvoices() ?? getPlaceholderInvoices(),
    }),
  );

  useEffect(() => {
    if (state.invoices.length === 0) {
      clearInvoices();
    } else {
      saveInvoices(state.invoices);
    }
  }, [state.invoices]);

  return (
    <InvoiceValueContext.Provider value={state}>
      <InvoiceDispatchContext.Provider value={dispatch}>
        {children}
      </InvoiceDispatchContext.Provider>
    </InvoiceValueContext.Provider>
  );
}
