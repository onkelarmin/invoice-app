import type { InvoicesType } from "@/types/invoice";

export function getInvoice(invoices: InvoicesType, id: string) {
  return invoices.find((invoice) => invoice.id === id);
}
