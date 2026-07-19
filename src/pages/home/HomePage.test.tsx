import { describe, expect, it } from "vitest";
import {
  createInvoice,
  createDraftInvoice,
} from "../../../test/invoiceFactory";
import { renderRoute } from "../../../test/renderRoute";
import { Homepage } from "./HomePage";
import { screen } from "@testing-library/react";

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
});
