import styles from "./Modal.module.scss";
import { useEffect, useMemo, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import type { ComponentPropsWithoutRef, MouseEvent } from "react";

type ModalProps = {
  portalTarget?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
} & ComponentPropsWithoutRef<"dialog">;

export function Modal({
  portalTarget,
  isOpen,
  onClose,
  children,
  ...rest
}: ModalProps) {
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

  const portalRoot = useMemo(() => {
    if (portalTarget == null) return document.body;

    const el = document.querySelector(portalTarget);

    if (el == null) {
      console.error(`Portal root ${portalTarget} not found.`);
      return document.body;
    }

    return el;
  }, [portalTarget]);

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
      {...rest}
    >
      {children}
    </dialog>,
    portalRoot,
  );
}
