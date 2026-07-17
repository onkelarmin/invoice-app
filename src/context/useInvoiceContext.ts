import { useContext } from "react";
import { InvoiceDispatchContext, InvoiceValueContext } from "./InvoiceContext";

export function useInvoiceValue() {
  const value = useContext(InvoiceValueContext);

  if (value == null) throw new Error("Should be used inside Provider");

  return value;
}

export function useInvoiceDispatch() {
  const value = useContext(InvoiceDispatchContext);

  if (value == null) throw new Error("Should be used inside Provider");

  return value;
}
