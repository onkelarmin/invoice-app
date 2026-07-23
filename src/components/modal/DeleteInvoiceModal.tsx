import { Heading } from "@/components/utilities/heading/Heading";
import styles from "./Modal.module.scss";
import { Button } from "@/components/utilities/button/Button";
import { useInvoiceDispatch } from "@/context/useInvoiceContext";
import { useNavigate } from "react-router";

type DeleteInvoiceModalProps = {
  id: string;
  onClose: () => void;
};

export function DeleteInvoiceModal({ id, onClose }: DeleteInvoiceModalProps) {
  const dispatch = useInvoiceDispatch();

  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch({ type: "deleteInvoice", payload: { id } });

    navigate("/");
  };

  return (
    <section
      className={styles.deleteInvoice}
      aria-labelledby="delete-invoice-title"
    >
      <Heading tag="h2" size="h2" id="delete-invoice-title">
        Confirm Deletion
      </Heading>
      <p className="fg-text-base mar-block-start-sm">
        Are you sure you want to delete invoice #<span>{id}</span>? This action
        cannot be undone.
      </p>
      <div className={styles.buttonContainer}>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </section>
  );
}
