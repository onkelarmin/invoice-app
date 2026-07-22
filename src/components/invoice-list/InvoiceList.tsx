import styles from "./InvoiceList.module.scss";
import { InvoiceListItem } from "./InvoiceListItem";
import { EmptyList } from "./EmptyList";
import type { Invoices } from "@/types/invoice";

type InvoiceListProps = {
  invoices: Invoices;
};

export function InvoiceList({ invoices }: InvoiceListProps) {
  if (invoices.length === 0) return <EmptyList />;

  return (
    <ul className={styles.invoiceList}>
      {invoices.map((invoice) => (
        <InvoiceListItem key={invoice.id} invoice={invoice} />
      ))}
    </ul>
  );
}
