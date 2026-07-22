import { createContext, type Dispatch } from "react";
import type { Action, State } from "./InvoiceReducer";

type ValueContext = State;
type DispatchContext = Dispatch<Action>;

export const InvoiceValueContext = createContext<ValueContext | null>(null);
export const InvoiceDispatchContext = createContext<DispatchContext | null>(
  null,
);
