import styles from "./DetailsPage.module.scss";
import { Button } from "@/components/utilities/button/Button";
import { useInvoiceValue } from "@/context/useInvoiceContext";
import { getInvoice } from "@/lib/getInvoice";
import { NavLink, useParams } from "react-router";
import ArrowIcon from "@/assets/svg/icon-arrow-left.svg?react";
import { StatusTag } from "@/components/StatusTag/StatusTag";
import { DetailsContent } from "@/components/details-content/DetailsContent";

export function DetailsPage() {
  const { invoices } = useInvoiceValue();

  const { invoiceId } = useParams();
  if (invoiceId == null) throw new Response("Not Found", { status: 404 });

  const invoice = getInvoice(invoices, invoiceId);
  if (invoice == null) throw new Response("Invoice not found", { status: 404 });

  return (
    <div className={styles.pageLayout}>
      {/* Back Link */}
      <div className={styles.backLinkContainer}>
        <Button As={NavLink} to="/" variant="ghost" classes="mar-block">
          <ArrowIcon className={styles.arrowIcon} aria-hidden="true" />
          Go back
        </Button>
      </div>

      {/* Status */}
      <div className={styles.statusContainer}>
        <p>Status</p>
        <StatusTag status={invoice.status} />
      </div>

      {/* Details */}
      <DetailsContent invoice={invoice} />

      {/* Controls */}
      <div className={styles.controlsContainer}>
        <Button variant="secondary">Edit</Button>
        <Button variant="danger">Delete</Button>
        <Button variant="primary">Mark as Paid</Button>
      </div>
    </div>
  );
}
