import {
  createMemoryRouter,
  RouterProvider,
  type LoaderFunction,
} from "react-router";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import type { Invoices } from "../src/types/invoice";
import { InvoiceProvider } from "../src/context/InvoiceProvider";

type RenderRouteOptions = {
  routes: {
    path: string;
    element: ReactNode;
    loader?: LoaderFunction;
  }[];
  initialEntries?: string[];
  invoices: Invoices;
};

export function renderRoute({
  routes,
  initialEntries = ["/"],
  invoices,
}: RenderRouteOptions) {
  const router = createMemoryRouter(routes, { initialEntries });

  return render(
    <InvoiceProvider initialInvoices={invoices}>
      <RouterProvider router={router} />
    </InvoiceProvider>,
  );
}
