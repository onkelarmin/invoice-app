import styles from "./InvoiceList.module.scss";
import { InvoiceListItem } from "./InvoiceListItem";
import { EmptyList } from "./EmptyList";
import type { InvoicesType } from "@/types/invoice";

type InvoiceListProps = {
  invoices: InvoicesType;
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
