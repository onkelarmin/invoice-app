import type {
  InvoiceDraftSchema,
  InvoiceSchema,
  InvoicesSchema,
} from "@/schemas/invoiceSchema";
import z from "zod";

export type InvoiceType = z.infer<typeof InvoiceSchema>;
export type InvoiceDraftType = z.infer<typeof InvoiceDraftSchema>;

export type InvoicesType = z.infer<typeof InvoicesSchema>;
