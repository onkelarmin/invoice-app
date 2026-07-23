import { describe, expect, it } from "vitest";
import { createDraftInvoice, createInvoice } from "@/test/invoiceFactory";
import { reducer } from "./Reducer";

describe("Invoice Reducer", () => {
  it("marks the correct invoice as 'paid'", () => {
    const invoice1 = createInvoice({
      id: "ID0001",
      status: "pending",
    });
    const invoice2 = createInvoice({
      id: "ID0002",
      status: "pending",
    });

    const state = { invoices: [invoice1, invoice2] };

    const newState = reducer(state, {
      type: "markAsPaid",
      payload: { id: invoice1.id },
    });

    expect(newState.invoices[0]).toHaveProperty("status", "paid");
    expect(newState.invoices[1]).toBe(invoice2);
  });

  it("returns the old state if trying to mark a draft as 'paid'", () => {
    const draft = createDraftInvoice({
      id: "ID0001",
    });

    const state = { invoices: [draft] };

    const newState = reducer(state, {
      type: "markAsPaid",
      payload: { id: draft.id },
    });

    expect(newState).toEqual(state);
  });

  it("returns the old state if 'markAsPaid' is called with an invalid id", () => {
    const invoice1 = createInvoice({
      id: "ID0001",
      status: "pending",
    });
    const invoice2 = createInvoice({
      id: "ID0002",
      status: "pending",
    });

    const state = { invoices: [invoice1, invoice2] };

    const newState = reducer(state, {
      type: "markAsPaid",
      payload: { id: "ID0003" },
    });

    expect(newState).toEqual(state);
  });

  it("deletes the correct invoice", () => {
    const invoice1 = createInvoice({
      id: "ID0001",
    });
    const invoice2 = createInvoice({
      id: "ID0002",
    });

    const state = { invoices: [invoice1, invoice2] };

    const newState = reducer(state, {
      type: "deleteInvoice",
      payload: { id: invoice2.id },
    });

    expect(newState.invoices).toHaveLength(1);
    expect(newState.invoices[0]).toEqual(invoice1);
  });

  it("returns the old state if 'deleteInvoice' is called with an invalid id", () => {
    const invoice1 = createInvoice({
      id: "ID0001",
    });
    const invoice2 = createInvoice({
      id: "ID0002",
    });

    const state = { invoices: [invoice1, invoice2] };

    const newState = reducer(state, {
      type: "deleteInvoice",
      payload: { id: "invalid-id" },
    });

    expect(newState).toEqual(state);
  });
});
