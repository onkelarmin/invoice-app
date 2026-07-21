import styles from "./DetailsPage.module.scss";
import { Button } from "@/components/utilities/button/Button";
import { useInvoiceValue } from "@/context/useInvoiceContext";
import { getInvoice } from "@/lib/getInvoice";
import { NavLink, useParams } from "react-router";
import ArrowIcon from "@/assets/svg/icon-arrow-left.svg?react";
import { StatusTag } from "@/components/StatusTag/StatusTag";
import { Heading } from "@/components/utilities/heading/Heading";
import { formatDate } from "@/lib/formatDate";
import { formatCurrency } from "@/lib/formatCurrency";
import { getTotalAmount } from "@/lib/getTotalAmount";

export function DetailsPage() {
  const { invoices } = useInvoiceValue();

  const { invoiceId } = useParams();
  if (invoiceId == null) throw new Response("Not Found", { status: 404 });

  const invoice = getInvoice(invoices, invoiceId);
  if (invoice == null) throw new Response("Invoice not found", { status: 404 });

  const {
    status,
    description,
    senderAddress,
    createdAt,
    paymentDue,
    clientAddress,
    clientEmail,
    items,
  } = invoice;

  return (
    <div className={styles.pageLayout}>
      {/* Back Link */}
      <div>
        <Button As={NavLink} to="/" variant="ghost" classes="mar-block">
          <ArrowIcon className={styles.arrowIcon} aria-hidden="true" />
          Go back
        </Button>
      </div>

      {/* Status */}
      <div className={styles.statusContainer}>
        <p>Status</p>
        <StatusTag status={status} />
      </div>

      {/* Details */}
      <section className={styles.detailsContainer} aria-labelledby="page-title">
        <div>
          <div>
            <Heading tag="h1" size="h3" id="page-title">
              <span className="visually-hidden">Details of invoice </span>
              {`#${invoice.id}`}
            </Heading>
            <p>{description}</p>
          </div>

          {/* Sender address */}
          <div>
            <Heading tag="h2" size="h5" classes="visually-hidden">
              Senders address
            </Heading>
            <p>{senderAddress.street}</p>
            <p>{senderAddress.city}</p>
            <p>{senderAddress.postCode}</p>
            <p>{senderAddress.country}</p>
          </div>

          {/* Dates */}
          <div>
            <div>
              <Heading tag="h2" size="h5">
                Invoice Date
              </Heading>
              <time dateTime={createdAt}>{formatDate(createdAt)}</time>
            </div>
            <div>
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

          {/* Client address */}
          <div>
            <Heading tag="h2" size="h5">
              Bill To
            </Heading>
            <p>{clientAddress.street}</p>
            <p>{clientAddress.city}</p>
            <p>{clientAddress.postCode}</p>
            <p>{clientAddress.country}</p>
          </div>

          {/* Client email */}
          <div>
            <Heading tag="h2" size="h5">
              Sent To
            </Heading>
            <p>{clientEmail}</p>
          </div>

          {/* Items */}
          <div>
            <Heading tag="h2" size="h5" classes="visually-hidden">
              Invoice items
            </Heading>
            <div className="hide-mobile" aria-hidden="true">
              <p>Item Name</p>
              <p>QTY.</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <Heading tag="h3" size="h4">
                    {item.name}
                  </Heading>
                  <p>
                    <span className="visualy-hidden">Quantity:</span>
                    {item.quantity}
                  </p>
                  <p>
                    <span className="visually-hidden">Price:</span>
                    {formatCurrency(item.price)}
                  </p>
                  <p>
                    <span className="visually-hidden">Total:</span>
                    {formatCurrency(item.quantity * item.price)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Total amount */}
          <div>
            <p>Amount Due</p>
            <p>{formatCurrency(getTotalAmount(items))}</p>
          </div>
        </div>
      </section>

      {/* Controls */}
      <div className={styles.controlsContainer}>
        <Button variant="secondary">Edit</Button>
        <Button variant="danger">Delete</Button>
        <Button variant="primary">Mark as Paid</Button>
      </div>
    </div>
  );
}
