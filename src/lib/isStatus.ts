import { INVOICE_STATUS } from "@/data/constants";
import type { DraftStatus, InvoiceStatus } from "@/types/invoice";

export function isStatus(value: string): value is InvoiceStatus | DraftStatus {
  return value in INVOICE_STATUS;
}
