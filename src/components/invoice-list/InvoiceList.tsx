import styles from "./InvoiceList.module.scss";
import { useInvoiceValue } from "@/context/useInvoiceContext";
import { InvoiceListItem } from "./InvoiceListItem";
import { EmptyList } from "./EmptyList";
import type { FilterSet } from "@/types/invoice";

type InvoiceListProps = {
  filters: FilterSet;
};

export function InvoiceList({ filters }: InvoiceListProps) {
  const { invoices } = useInvoiceValue();

  if (invoices.length === 0) return <EmptyList />;

  const visibleInvoices = invoices.filter((invoice) => {
    return filters.has(invoice.status);
  });

  return (
    <ul className={styles.invoiceList}>
      {visibleInvoices.map((invoice) => (
        <InvoiceListItem key={invoice.id} invoice={invoice} />
      ))}
    </ul>
  );
}
