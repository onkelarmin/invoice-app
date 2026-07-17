import { initialData } from "@/data/initialData";
import { InvoicesSchema } from "@/schemas/invoiceSchema";
import type { InvoicesType } from "@/types/invoice";

export function getInitialInvoices(): InvoicesType {
  const result = InvoicesSchema.safeParse(initialData);

  if (!result.success) throw new Error("Invalid initial data");

  return result.data;
}
