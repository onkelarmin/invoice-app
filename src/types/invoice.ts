import type { FILTER_STATUS } from "@/data/constants";
import type {
  InvoiceDraftSchema,
  InvoiceItemSchema,
  InvoiceSchema,
  InvoicesSchema,
} from "@/schemas/invoiceSchema";
import z from "zod";

export type FilterStatus = (typeof FILTER_STATUS)[keyof typeof FILTER_STATUS];
export type FilterSet = Set<FilterStatus>;

export type InvoiceItem = z.infer<typeof InvoiceItemSchema>;

export type InvoiceType = z.infer<typeof InvoiceSchema>;
export type InvoiceDraftType = z.infer<typeof InvoiceDraftSchema>;

export type InvoicesType = z.infer<typeof InvoicesSchema>;
