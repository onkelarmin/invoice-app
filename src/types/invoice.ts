import type { INVOICE_STATUS } from "@/data/constants";
import type {
  InvoiceDraftSchema,
  InvoiceItemSchema,
  InvoiceSchema,
  InvoicesSchema,
} from "@/schemas/invoiceSchema";
import z from "zod";

export type DraftStatus = (typeof INVOICE_STATUS)["draft"];

export type InvoiceStatus = (typeof INVOICE_STATUS)["pending" | "paid"];
export type FilterSet = Set<InvoiceStatus | DraftStatus>;

export type InvoiceItem = z.infer<typeof InvoiceItemSchema>;

export type Invoice = z.infer<typeof InvoiceSchema>;
export type InvoiceDraft = z.infer<typeof InvoiceDraftSchema>;

export type Invoices = z.infer<typeof InvoicesSchema>;
