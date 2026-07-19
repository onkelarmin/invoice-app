import styles from "./InvoiceList.module.scss";
import { useInvoiceValue } from "@/context/useInvoiceContext";
import { InvoiceListItem } from "./InvoiceListItem";
import { EmptyList } from "./EmptyList";

export function InvoiceList() {
  const { invoices } = useInvoiceValue();

  if (invoices.length === 0) return <EmptyList />;

  return (
    <ul className={styles.invoiceList}>
      {invoices.map((invoice) => (
        <InvoiceListItem key={invoice.id} invoice={invoice} />
      ))}
    </ul>
  );
}
