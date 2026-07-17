import type { InvoicesType, InvoiceType } from "@/types/invoice";
import { useReducer, type ReactNode } from "react";
import { getInitialInvoices } from "./initialInvoices";
import { InvoiceDispatchContext, InvoiceValueContext } from "./InvoiceContext";

export type State = {
  invoices: InvoicesType;
};

export type Action = { type: "addInvoice"; payload: { invoice: InvoiceType } };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "addInvoice": {
      return state;
    }

    default:
      throw new Error("Invalid reducer action");
  }
}

const initialState = {
  invoices: getInitialInvoices(),
};

type InvoiceProviderProps = {
  children: ReactNode;
};

export function InvoiceProvider({ children }: InvoiceProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InvoiceValueContext.Provider value={state}>
      <InvoiceDispatchContext.Provider value={dispatch}>
        {children}
      </InvoiceDispatchContext.Provider>
    </InvoiceValueContext.Provider>
  );
}
