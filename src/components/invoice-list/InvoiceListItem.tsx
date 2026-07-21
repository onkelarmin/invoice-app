import styles from "./InvoiceList.module.scss";
import type { InvoiceDraft, Invoice } from "@/types/invoice";
import { NavLink } from "react-router";
import { Heading } from "@/components/utilities/heading/Heading";
import { formatDate } from "@/lib/formatDate";
import { formatCurrency } from "@/lib/formatCurrency";
import ArrowIcon from "@/assets/svg/icon-arrow-right.svg?react";
import { StatusTag } from "@/components/StatusTag/StatusTag";
import { getTotalAmount } from "@/lib/getTotalAmount";

type InvoiceListItemProps = {
  invoice: Invoice | InvoiceDraft;
};

export function InvoiceListItem({ invoice }: InvoiceListItemProps) {
  const { id, clientName, paymentDue, status, items } = invoice;

  return (
    <li className={styles.invoiceListItem}>
      <NavLink to={`/invoices/${id}`} className={styles.navLink}>
        <article className={styles.inner}>
          {/* ID */}
          <Heading tag="h2" size="h4" classes={styles.id}>
            <span className="fg-text-hash">#</span>
            {id}
          </Heading>

          {/* Client name */}
          <p className={styles.name}>
            <span className="visually-hidden">Client:</span>
            {clientName === "" ? "No Client Name" : clientName}
          </p>

          {/* Due date */}
          <p className={styles.dueDate}>
            {paymentDue == null ? (
              "No Due Date"
            ) : (
              <span>
                Due{" "}
                <time dateTime={paymentDue} className="fg-text-emphasised">
                  {formatDate(paymentDue)}
                </time>
              </span>
            )}
          </p>

          {/* Total amount */}
          <p className={styles.amount}>
            <span className="visually-hidden">Total amount:</span>
            {formatCurrency(getTotalAmount(items))}
          </p>

          {/* Status */}
          <div className={styles.status}>
            <StatusTag status={status} />
          </div>

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
