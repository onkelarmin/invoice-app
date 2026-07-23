import type { Invoices } from "@/types/invoice";
import { useEffect, useReducer, type ReactNode } from "react";
import {
  clearInvoices,
  getPlaceholderInvoices,
  loadInvoices,
  saveInvoices,
} from "./persistence";
import { InvoiceDispatchContext, InvoiceValueContext } from "./Context";
import { reducer } from "./Reducer";

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
