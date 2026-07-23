import { describe, expect, it } from "vitest";
import { createDraftInvoice, createInvoice } from "@/test/invoiceFactory";
import { renderRoute } from "@/test/RenderRoute";
import { DetailsPage } from "./DetailsPage";
import { screen, within } from "@testing-library/react";
import { formatDate } from "@/lib/formatDate";
import userEvent from "@testing-library/user-event";
import { Homepage } from "@/pages/home/HomePage";

describe("Invoice details page", () => {
  it("renders the correct invoice information", () => {
    const invoice1 = createInvoice({
      id: "ID0001",
      status: "pending",
      description: "description-1",
      clientName: "client-1",
      clientEmail: "client-1@test.com",
      paymentDue: "2026-07-22",
      items: [
        { id: "1", name: "item-1-name", price: 100, quantity: 2 },
        { id: "2", name: "item-2-name", price: 200, quantity: 3 },
      ],
    });
    const invoice2 = createInvoice({
      id: "ID0002",
      status: "paid",
      description: "description-2",
      clientName: "client-2",
      clientEmail: "client-2@test.com",
      paymentDue: "2026-07-23",
      items: [],
    });

    renderRoute({
      routes: [{ path: "/invoices/:invoiceId", element: <DetailsPage /> }],
      initialEntries: [`/invoices/${invoice1.id}`],
      invoices: [invoice1, invoice2],
    });

    expect(
      screen.getByRole("heading", { name: new RegExp(invoice1.id) }),
    ).toBeInTheDocument();
    expect(screen.getByText("Status").nextElementSibling).toHaveTextContent(
      invoice1.status,
    );
    expect(screen.getByText(invoice1.description)).toBeInTheDocument();
    expect(screen.getByText(invoice1.clientName)).toBeInTheDocument();
    expect(screen.getByText(invoice1.clientEmail)).toBeInTheDocument();
    expect(
      screen.getByText(formatDate(invoice1.paymentDue)),
    ).toBeInTheDocument();

    const item = invoice1.items[0];
    const listItem = screen.getByRole("listitem", {
      name: item.name,
    });

    expect(within(listItem).getByText(item.name)).toBeInTheDocument();
    expect(within(listItem).getByLabelText("Quantity")).toHaveTextContent(
      new RegExp(String(item.quantity)),
    );
    expect(within(listItem).getByLabelText("Price")).toHaveTextContent(
      new RegExp(String(item.price)),
    );
    expect(within(listItem).getByLabelText("Total")).toHaveTextContent(
      new RegExp(String(item.price * item.quantity)),
    );
    expect(screen.getByText("Amount Due").nextElementSibling).toHaveTextContent(
      /800/,
    );

    expect(
      screen.queryByRole("heading", { name: new RegExp(invoice2.id) }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(invoice2.description)).not.toBeInTheDocument();
    expect(screen.queryByText(invoice2.clientName)).not.toBeInTheDocument();
    expect(screen.queryByText(invoice2.clientEmail)).not.toBeInTheDocument();
  });

  it("renders a draft invoice correctly including an empty invoice list message", () => {
    const draft = createDraftInvoice({
      id: "ID0003",
      description: "draft description",
      clientName: "",
      clientEmail: "",
      items: [],
    });

    renderRoute({
      routes: [{ path: "/invoices/:invoiceId", element: <DetailsPage /> }],
      initialEntries: [`/invoices/${draft.id}`],
      invoices: [draft],
    });

    expect(
      screen.getByRole("heading", { name: new RegExp(draft.id) }),
    ).toBeInTheDocument();
    expect(screen.getByText("Status").nextElementSibling).toHaveTextContent(
      "draft",
    );
    expect(screen.getByText(draft.description)).toBeInTheDocument();
    expect(
      screen.getByRole("paragraph", { name: "Client Name" }),
    ).toHaveTextContent("");
    expect(
      screen.getByRole("heading", { name: "Sent To" }).nextElementSibling,
    ).toHaveTextContent("");
    expect(screen.getByText("No items added yet")).toBeInTheDocument();
  });

  it("renders the 404 page if the invoice id is invalid", () => {
    const invoice1 = createInvoice({
      id: "ID0001",
    });
    const invoice2 = createInvoice({
      id: "ID0002",
    });

    renderRoute({
      routes: [{ path: "/invoices/:invoiceId", element: <DetailsPage /> }],
      initialEntries: [`/invoices/ID0003`],
      invoices: [invoice1, invoice2],
    });

    expect(
      screen.getByRole("heading", { name: "Page not found" }),
    ).toBeInTheDocument();
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("opens the confirmation dialog when clicking the delete button", async () => {
    const user = userEvent.setup();

    const invoice1 = createInvoice({
      id: "ID0001",
    });

    renderRoute({
      routes: [{ path: "/invoices/:invoiceId", element: <DetailsPage /> }],
      initialEntries: [`/invoices/${invoice1.id}`],
      invoices: [invoice1],
    });

    await user.click(screen.getByRole("button", { name: "Delete" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Confirm Deletion" }),
    ).toBeInTheDocument();
  });

  it("deletes the correct invoice and navigates to the homepage", async () => {
    const user = userEvent.setup();

    const invoice1 = createInvoice({ id: "ID0001" });
    const invoice2 = createInvoice({ id: "ID0002" });
    const invoice3 = createInvoice({ id: "ID0003" });

    renderRoute({
      routes: [
        { path: "/", element: <Homepage /> },
        { path: "/invoices/:invoiceId", element: <DetailsPage /> },
      ],
      initialEntries: [`/invoices/${invoice2.id}`],
      invoices: [invoice1, invoice2, invoice3],
    });

    await user.click(screen.getByRole("button", { name: "Delete" }));

    const dialog = screen.getByRole("dialog");

    await user.click(within(dialog).getByRole("button", { name: "Delete" }));

    expect(
      screen.getByRole("heading", { name: "Invoices" }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("total-count")).toHaveTextContent(
      "There are 2 total invoices",
    );

    expect(
      screen.getByRole("heading", { name: new RegExp(invoice1.id) }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: new RegExp(invoice3.id) }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: new RegExp(invoice2.id) }),
    ).not.toBeInTheDocument();
  });

  it("lets the user cancel the deleting process in the confirmation modal", async () => {
    const user = userEvent.setup();

    const invoice1 = createInvoice({
      id: "ID0001",
      status: "pending",
      description: "description-1",
    });

    renderRoute({
      routes: [{ path: "/invoices/:invoiceId", element: <DetailsPage /> }],
      initialEntries: [`/invoices/${invoice1.id}`],
      invoices: [invoice1],
    });

    await user.click(screen.getByRole("button", { name: "Delete" }));

    const dialog = screen.getByRole("dialog");

    await user.click(within(dialog).getByRole("button", { name: "Cancel" }));

    expect(
      screen.getByRole("heading", { name: new RegExp(invoice1.id) }),
    ).toBeInTheDocument();
    expect(screen.getByText("Status").nextElementSibling).toHaveTextContent(
      invoice1.status,
    );
    expect(screen.getByText(invoice1.description)).toBeInTheDocument();
  });
});
