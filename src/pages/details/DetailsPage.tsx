import styles from "./DetailsPage.module.scss";
import { Button } from "@/components/utilities/button/Button";
import {
  useInvoiceDispatch,
  useInvoiceValue,
} from "@/context/useInvoiceContext";
import { getInvoice } from "@/lib/getInvoice";
import { NavLink, useParams } from "react-router";
import ArrowIcon from "@/assets/svg/icon-arrow-left.svg?react";
import { StatusTag } from "@/components/status-tag/StatusTag";
import { DetailsContent } from "@/components/details-content/DetailsContent";
import { NotFound } from "@/pages/not-found/NotFound";
import { Modal } from "@/components/modal/Modal";
import { useState } from "react";
import { DeleteInvoiceModal } from "@/components/modal/DeleteInvoiceModal";

export function DetailsPage() {
  const { invoices } = useInvoiceValue();
  const dispatch = useInvoiceDispatch();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { invoiceId } = useParams();
  if (invoiceId == null) return <NotFound />;

  const invoice = getInvoice(invoices, invoiceId);
  if (invoice == null) return <NotFound />;

  const { id, status } = invoice;

  return (
    <>
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
          <StatusTag status={status} />
        </div>

        {/* Details */}
        <DetailsContent invoice={invoice} />

        {/* Controls */}
        <div className={styles.controlsContainer}>
          <Button variant="secondary">Edit</Button>
          <Button variant="danger" onClick={() => setIsDeleteModalOpen(true)}>
            Delete
          </Button>
          {status === "pending" && (
            <Button
              variant="primary"
              onClick={() =>
                dispatch({
                  type: "markAsPaid",
                  payload: {
                    id,
                  },
                })
              }
            >
              Mark as Paid
            </Button>
          )}
        </div>
      </div>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <DeleteInvoiceModal
          id={id}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      </Modal>
    </>
  );
}
