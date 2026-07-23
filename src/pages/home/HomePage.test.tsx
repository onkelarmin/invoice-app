import { describe, expect, it } from "vitest";
import { createInvoice, createDraftInvoice } from "@/test/invoiceFactory";
import { renderRoute } from "@/test/RenderRoute";
import { Homepage } from "./HomePage";
import { screen } from "@testing-library/react";
import { DetailsPage } from "@/pages/details/DetailsPage";
import userEvent from "@testing-library/user-event";

describe("Home page", () => {
  it("renders the available invoices", () => {
    const invoice1 = createInvoice();
    const invoice2 = createDraftInvoice();

    const invoices = [invoice1, invoice2];

    renderRoute({
      routes: [
        {
          path: "/",
          element: <Homepage />,
        },
      ],
      invoices,
    });

    expect(screen.getByTestId("total-count")).toHaveTextContent(
      `There are ${invoices.length} total invoices`,
    );

    expect(
      screen.getByRole("heading", { name: new RegExp(invoice1.id) }),
    ).toBeInTheDocument();
    expect(screen.getByText(invoice1.clientName)).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: new RegExp(invoice2.id) }),
    ).toBeInTheDocument();
    expect(screen.getByText(invoice2.clientName)).toBeInTheDocument();
  });

  it("renders the empty state if there are no invoices", () => {
    renderRoute({
      routes: [
        {
          path: "/",
          element: <Homepage />,
        },
      ],
      invoices: [],
    });

    expect(screen.getByTestId("total-count")).toHaveTextContent("No invoices");

    const heading = screen.getByRole("heading", {
      name: "There is nothing here",
    });

    expect(heading).toBeInTheDocument();
    expect(heading.nextElementSibling).toHaveTextContent(
      "Create an invoice by clicking the New Invoice button and get started",
    );
  });

  it("navigates to the correct details page when clicking on the link", async () => {
    const user = userEvent.setup();

    const invoice1 = createInvoice({
      id: "ID0001",
      status: "pending",
      description: "description-1",
      clientName: "client-1",
      clientEmail: "client-1@test.com",
    });
    const invoice2 = createInvoice({
      id: "ID0002",
      status: "paid",
      description: "description-2",
      clientName: "client-2",
      clientEmail: "client-2@test.com",
    });

    renderRoute({
      routes: [
        { path: "/", element: <Homepage /> },
        { path: "/invoices/:invoiceId", element: <DetailsPage /> },
      ],
      initialEntries: ["/"],
      invoices: [invoice1, invoice2],
    });

    await user.click(
      screen.getByRole("link", { name: `See details for ${invoice2.id}` }),
    );

    expect(
      screen.getByRole("heading", { name: new RegExp(invoice2.id) }),
    ).toBeInTheDocument();
    expect(screen.getByText("Status").nextElementSibling).toHaveTextContent(
      invoice2.status,
    );
    expect(screen.getByText(invoice2.description)).toBeInTheDocument();
    expect(screen.getByText(invoice2.clientName)).toBeInTheDocument();
    expect(screen.getByText(invoice2.clientEmail)).toBeInTheDocument();
  });
});
