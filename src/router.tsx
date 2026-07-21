import { createBrowserRouter } from "react-router";
import { Homepage } from "@/pages/home/HomePage";
import { BaseLayout } from "@/layouts/BaseLayout";
import { DetailsPage } from "@/pages/details/DetailsPage";
import { NotFound } from "@/pages/not-found/NotFound";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/invoices/:invoiceId", element: <DetailsPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
