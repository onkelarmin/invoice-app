import styles from "./StatusTag.module.scss";
import type { FilterStatus } from "@/types/invoice";
import StatusIcon from "@/assets/svg/icon-status.svg?react";

type StatusTagProps = {
  status: FilterStatus;
};

export function StatusTag({ status }: StatusTagProps) {
  return (
    <p className={styles.statusTag} data-status={status}>
      <StatusIcon aria-hidden="true" />
      {status}
    </p>
  );
}
