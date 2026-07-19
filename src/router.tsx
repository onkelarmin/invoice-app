import { createBrowserRouter } from "react-router";
import { Homepage } from "@/pages/home/HomePage";
import { BaseLayout } from "@/layouts/BaseLayout";

export const router = createBrowserRouter([
  { element: <BaseLayout />, children: [{ path: "/", element: <Homepage /> }] },
]);
