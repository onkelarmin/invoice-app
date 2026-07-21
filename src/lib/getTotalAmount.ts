import type { InvoiceItem } from "@/types/invoice";

export function getTotalAmount(invoiceItems: InvoiceItem[]): number {
  return invoiceItems.reduce((amount, item) => {
    return amount + item.price * item.quantity;
  }, 0);
}
