import styles from "./Modal.module.scss";
import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import type { MouseEvent } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog == null) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (dialog == null) return;

    if (e.target === e.currentTarget) {
      dialog.close();
    }
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      className={styles.modal}
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      {children}
    </dialog>,
    document.body,
  );
}
