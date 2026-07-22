import type { Invoices } from "@/types/invoice";

export function getInvoice(invoices: Invoices, id: string) {
  return invoices.find((invoice) => invoice.id === id);
}
