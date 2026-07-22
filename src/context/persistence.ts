import { initialData } from "@/data/initialData";
import { InvoicesSchema } from "@/schemas/invoiceSchema";
import type { Invoices } from "@/types/invoice";

export const STORAGE_KEY = "invoices";

export function loadInvoices() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (raw == null) return null;

  try {
    const result = InvoicesSchema.safeParse(JSON.parse(raw));
    return result.data;
  } catch {
    clearInvoices();
    return null;
  }
}

export function getPlaceholderInvoices(): Invoices {
  const result = InvoicesSchema.safeParse(initialData);

  if (!result.success) throw new Error("Invalid placeholder invoice data");

  return result.data;
}

export function saveInvoices(invoices: Invoices) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
}

export function clearInvoices() {
  localStorage.removeItem(STORAGE_KEY);
}
