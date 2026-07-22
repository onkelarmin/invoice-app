import styles from "./DetailsContent.module.scss";
import { Heading } from "@/components/utilities/heading/Heading";
import { formatCurrency } from "@/lib/formatCurrency";
import { formatDate } from "@/lib/formatDate";
import { getTotalAmount } from "@/lib/getTotalAmount";
import type { InvoiceDraft, Invoice } from "@/types/invoice";
import { ItemsList } from "./ItemsList";

type DetailsContentProps = {
  invoice: Invoice | InvoiceDraft;
};

export function DetailsContent({ invoice }: DetailsContentProps) {
  const {
    description,
    senderAddress,
    createdAt,
    paymentDue,
    clientName,
    clientAddress,
    clientEmail,
    items,
  } = invoice;
  return (
    <section className={styles.detailsContent} aria-labelledby="page-title">
      {/* Header */}
      <div className={styles.headerContainer}>
        <Heading tag="h1" size="h3" id="page-title">
          <span className="visually-hidden">Details of invoice </span>
          <span className={styles.hash}>#</span>
          <span>{invoice.id}</span>
        </Heading>
        <p className="font-body-variant mar-block-start-2xs">{description}</p>
      </div>

      {/* Sender address */}
      <div className={styles.senderAddress}>
        <Heading tag="h2" size="h5" classes="visually-hidden">
          Senders address
        </Heading>
        <p>{senderAddress.street}</p>
        <p>{senderAddress.city}</p>
        <p>{senderAddress.postCode}</p>
        <p>{senderAddress.country}</p>
      </div>

      {/* Dates */}
      <div className={styles.datesContainer}>
        <div className={styles.date}>
          <Heading tag="h2" size="h5">
            Invoice Date
          </Heading>
          <time dateTime={createdAt}>{formatDate(createdAt)}</time>
        </div>
        <div className={styles.date}>
          <Heading tag="h2" size="h5">
            Payment Due
          </Heading>

          {paymentDue == null ? (
            <p>No Due Date</p>
          ) : (
            <time dateTime={paymentDue}>{formatDate(paymentDue)}</time>
          )}
        </div>
      </div>

      {/* Client details */}
      <div className={styles.clientAddress}>
        <Heading tag="h2" size="h5">
          Bill To
        </Heading>
        <p className={styles.clientName} aria-label="Client Name">
          {clientName}
        </p>
        <p>{clientAddress.street}</p>
        <p>{clientAddress.city}</p>
        <p>{clientAddress.postCode}</p>
        <p>{clientAddress.country}</p>
      </div>

      {/* Client email */}
      <div className={styles.clientEmail}>
        <Heading tag="h2" size="h5">
          Sent To
        </Heading>
        <p className={styles.email}>{clientEmail}</p>
      </div>

      {/* Items */}
      <ItemsList items={items} />

      {/* Total amount */}
      <div className={styles.amountDue}>
        <p className="fg-text-total-amount">Amount Due</p>
        <p className="font-heading-md fg-text-total-amount">
          {formatCurrency(getTotalAmount(items))}
        </p>
      </div>
    </section>
  );
}
