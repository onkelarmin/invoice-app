import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { createInvoice } from "@/test/invoiceFactory";
import { InvoiceProvider } from "./Provider";
import { TestConsumer } from "@/test/TestConsumer";
import { STORAGE_KEY } from "./persistence";
import { initialData } from "@/data/initialData";
import userEvent from "@testing-library/user-event";
import type { Invoices } from "@/types/invoice";

describe("Invoice Context Provider", () => {
  it("initializes from injected invoices if provided", () => {
    const invoice1 = createInvoice({ id: "ID0001" });
    const invoice2 = createInvoice({ id: "ID0002" });
    const invoice3 = createInvoice({ id: "ID0003" });

    localStorage.setItem(STORAGE_KEY, JSON.stringify([invoice3]));

    render(
      <InvoiceProvider initialInvoices={[invoice1, invoice2]}>
        <TestConsumer />
      </InvoiceProvider>,
    );

    expect(screen.getByText(invoice1.id)).toBeInTheDocument();
    expect(screen.getByText(invoice2.id)).toBeInTheDocument();
    expect(screen.queryByText(invoice3.id)).not.toBeInTheDocument();
  });

  it("uses localstorage if no invoices are passed in", () => {
    const invoice1 = createInvoice({ id: "ID0001" });
    const invoice2 = createInvoice({ id: "ID0002" });

    localStorage.setItem(STORAGE_KEY, JSON.stringify([invoice1, invoice2]));

    render(
      <InvoiceProvider>
        <TestConsumer />
      </InvoiceProvider>,
    );

    expect(screen.getByText(invoice1.id)).toBeInTheDocument();
    expect(screen.getByText(invoice2.id)).toBeInTheDocument();
  });

  it("falls bacl to placeholder invoices if no invoices are passed in and the localstorage is empty", () => {
    localStorage.clear();

    render(
      <InvoiceProvider>
        <TestConsumer />
      </InvoiceProvider>,
    );

    expect(screen.getByText(initialData[0].id)).toBeInTheDocument();
    expect(screen.getByText(initialData[1].id)).toBeInTheDocument();
  });

  it("persists invoices after reducer dispatch", async () => {
    const user = userEvent.setup();

    const invoice1 = createInvoice({ id: "ID0001", status: "pending" });
    const invoice2 = createInvoice({ id: "ID0002", status: "paid" });

    localStorage.setItem(STORAGE_KEY, JSON.stringify([invoice1, invoice2]));

    render(
      <InvoiceProvider>
        <TestConsumer />
      </InvoiceProvider>,
    );

    await user.click(screen.getByText("Mark first invoice as paid"));

    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)!) as Invoices;

    expect(stored[0]).toHaveProperty("status", "paid");
    expect(stored[1]).toEqual(invoice2);
  });
});
