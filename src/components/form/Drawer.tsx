import styles from "./Drawer.module.scss";
import type { ReactNode } from "react";

type DrawerProps = {
  isOpen: boolean;
  children: ReactNode;
};

export function Drawer({ isOpen, children }: DrawerProps) {
  return (
    <>
      <div className={styles.backdrop} data-open={isOpen}></div>
      <div className={styles.drawer} data-open={isOpen}>
        {children}
      </div>
    </>
  );
}
