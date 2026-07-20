import styles from "./InvoiceList.module.scss";
import type { InvoiceDraftType, InvoiceType } from "@/types/invoice";
import { NavLink } from "react-router";
import { Heading } from "@/components/utilities/heading/Heading";
import { formatDate } from "@/lib/formatDate";
import { formatCurrency } from "@/lib/formatCurrency";
import StatusIcon from "@/assets/svg/icon-status.svg?react";
import ArrowIcon from "@/assets/svg/icon-arrow-right.svg?react";

type InvoiceListItemProps = {
  invoice: InvoiceType | InvoiceDraftType;
};

export function InvoiceListItem({ invoice }: InvoiceListItemProps) {
  const totalAmount = invoice.items.reduce((amount, item) => {
    return amount + item.price * item.quantity;
  }, 0);

  return (
    <li className={styles.invoiceListItem}>
      <NavLink to={`/invoices/${invoice.id}`} className={styles.navLink}>
        <article className={styles.inner}>
          {/* ID */}
          <Heading tag="h2" size="h4" classes={styles.id}>
            <span className="fg-text-hash">#</span>
            {invoice.id}
          </Heading>

          {/* Client name */}
          <p className={styles.name}>
            <span className="visually-hidden">Client:</span>
            {invoice.clientName === "" ? "No Client Name" : invoice.clientName}
          </p>

          {/* Due date */}
          <p className={styles.dueDate}>
            {invoice.paymentDue == null ? (
              "No Due Date"
            ) : (
              <span>
                Due{" "}
                <time
                  dateTime={invoice.paymentDue}
                  className="fg-text-emphasised"
                >
                  {formatDate(invoice.paymentDue)}
                </time>
              </span>
            )}
          </p>

          {/* Total amount */}
          <p className={styles.amount}>
            <span className="visually-hidden">Total amount:</span>
            {formatCurrency(totalAmount)}
          </p>

          {/* Status */}
          <p className={styles.status} data-status={invoice.status}>
            <span className="visually-hidden">Status:</span>
            <StatusIcon aria-hidden="true" />
            {invoice.status}
          </p>

          {/* Arrow */}
          <ArrowIcon
            className={`${styles.arrowIcon} hide-mobile`}
            aria-hidden="true"
          />
        </article>
      </NavLink>
    </li>
  );
}
