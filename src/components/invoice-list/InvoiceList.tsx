import styles from "./InvoiceList.module.scss";
import { useInvoiceValue } from "@/context/useInvoiceContext";
import { InvoiceListItem } from "./InvoiceListItem";

export function InvoiceList() {
  const { invoices } = useInvoiceValue();

  return (
    <ul className={styles.invoiceList}>
      {invoices.map((invoice) => (
        <InvoiceListItem key={invoice.id} invoice={invoice} />
      ))}
    </ul>
  );
}
