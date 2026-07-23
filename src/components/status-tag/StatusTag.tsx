import styles from "./StatusTag.module.scss";
import type { DraftStatus, InvoiceStatus } from "@/types/invoice";
import StatusIcon from "@/assets/svg/icon-status.svg?react";

type StatusTagProps = {
  status: InvoiceStatus | DraftStatus;
};

export function StatusTag({ status }: StatusTagProps) {
  return (
    <p className={styles.statusTag} data-status={status}>
      <StatusIcon aria-hidden="true" />
      {status}
    </p>
  );
}
