import { beforeEach, describe, expect, it } from "vitest";
import { createInvoice } from "@/test/invoiceFactory";
import {
  clearInvoices,
  loadInvoices,
  saveInvoices,
  STORAGE_KEY,
} from "./persistence";

describe("loadInvoices", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns stored invoices", () => {
    const invoices = [
      createInvoice({ id: "ID0001" }),
      createInvoice({ id: "ID0002" }),
    ];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));

    const loaded = loadInvoices();

    expect(loaded).toEqual(invoices);
  });

  it("returns null if there aren't any invoices stored", () => {
    const loaded = loadInvoices();

    expect(loaded).toBeNull();
  });

  it("clears the localstorage and returns null if the stored invoices are invalid", () => {
    localStorage.setItem(STORAGE_KEY, "Invalid-data");

    const loaded = loadInvoices();

    expect(loaded).toBeNull();

    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });
});

describe("saveInvoices", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("saves invoices correctly", () => {
    const invoices = [
      createInvoice({ id: "ID0001" }),
      createInvoice({ id: "ID0002" }),
    ];

    saveInvoices(invoices);

    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!)).toEqual(invoices);
  });
});

describe("clearInvoices", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("saves invoices correctly", () => {
    const invoices = [
      createInvoice({ id: "ID0001" }),
      createInvoice({ id: "ID0002" }),
    ];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));

    clearInvoices();

    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();
  });
});
