import { describe, expect, it } from "vitest";
import { createDraftInvoice, createInvoice } from "@/test/invoiceFactory";
import { renderRoute } from "@/test/RenderRoute";
import { Homepage } from "@/pages/home/HomePage";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Invoice filter", () => {
  it("shows only the paid invoices when the paid filter is selected", async () => {
    const user = userEvent.setup();

    const invoices = [
      createInvoice({ id: "ID0001", status: "paid" }),
      createInvoice({ id: "ID0002", status: "pending" }),
      createDraftInvoice({ id: "ID0003", status: "draft" }),
      createInvoice({ id: "ID0004", status: "paid" }),
    ];

    renderRoute({
      routes: [{ path: "/", element: <Homepage /> }],
      invoices,
    });

    expect(screen.getByTestId("total-count")).toHaveTextContent(
      `There are ${invoices.length} total invoices`,
    );

    expect(screen.getByRole("heading", { name: /ID0001/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ID0002/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ID0003/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ID0004/ })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Filter by status" }));
    await user.click(screen.getByRole("checkbox", { name: "paid" }));

    expect(screen.getByTestId("total-count")).toHaveTextContent(
      "There are 2 total invoices",
    );
    expect(screen.getByRole("heading", { name: /ID0001/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ID0004/ })).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: /ID0002/ }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /ID0003/ }),
    ).not.toBeInTheDocument();
  });

  it("shows both paid and pending invoices when their filter are selected", async () => {
    const user = userEvent.setup();

    const invoices = [
      createInvoice({ id: "ID0001", status: "paid" }),
      createInvoice({ id: "ID0002", status: "pending" }),
      createDraftInvoice({ id: "ID0003", status: "draft" }),
      createInvoice({ id: "ID0004", status: "paid" }),
    ];

    renderRoute({
      routes: [{ path: "/", element: <Homepage /> }],
      invoices,
    });

    await user.click(screen.getByRole("button", { name: "Filter by status" }));
    await user.click(screen.getByRole("checkbox", { name: "paid" }));
    await user.click(screen.getByRole("checkbox", { name: "pending" }));

    expect(screen.getByTestId("total-count")).toHaveTextContent(
      "There are 3 total invoices",
    );
    expect(screen.getByRole("heading", { name: /ID0001/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ID0002/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ID0004/ })).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: /ID0003/ }),
    ).not.toBeInTheDocument();
  });

  it("restores all invoices after removing the draft filter again", async () => {
    const user = userEvent.setup();

    const invoices = [
      createInvoice({ id: "ID0001", status: "paid" }),
      createInvoice({ id: "ID0002", status: "pending" }),
      createDraftInvoice({ id: "ID0003", status: "draft" }),
      createInvoice({ id: "ID0004", status: "paid" }),
    ];

    renderRoute({
      routes: [{ path: "/", element: <Homepage /> }],
      invoices,
    });

    await user.click(screen.getByRole("button", { name: "Filter by status" }));
    await user.click(screen.getByRole("checkbox", { name: "draft" }));

    expect(screen.getByTestId("total-count")).toHaveTextContent(
      "There is 1 total invoice",
    );

    expect(screen.getByRole("heading", { name: /ID0003/ })).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /ID0001/ }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /ID0002/ }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /ID0004/ }),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Filter by status" }));
    await user.click(screen.getByRole("checkbox", { name: "draft" }));

    expect(screen.getByTestId("total-count")).toHaveTextContent(
      "There are 4 total invoices",
    );

    expect(screen.getByRole("heading", { name: /ID0001/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ID0002/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ID0003/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ID0004/ })).toBeInTheDocument();
  });

  it("shows the empty state when no invoices match", async () => {
    const user = userEvent.setup();

    const invoices = [
      createInvoice({ id: "ID0001", status: "paid" }),
      createDraftInvoice({ id: "ID0002", status: "draft" }),
      createDraftInvoice({ id: "ID0003", status: "draft" }),
    ];

    renderRoute({
      routes: [{ path: "/", element: <Homepage /> }],
      invoices,
    });

    await user.click(screen.getByRole("button", { name: "Filter by status" }));
    await user.click(screen.getByRole("checkbox", { name: "pending" }));

    const heading = screen.getByRole("heading", {
      name: "There is nothing here",
    });

    expect(heading).toBeInTheDocument();
    expect(heading.nextElementSibling).toHaveTextContent(
      "Create an invoice by clicking the New Invoice button and get started",
    );
  });
});
