import styles from "./MainWrapper.module.scss";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type MainProps = {
  disableScroll?: boolean;
  children: ReactNode;
} & ComponentPropsWithoutRef<"main">;

export function Main({ disableScroll = false, children }: MainProps) {
  return (
    <main className={styles.main} data-disable-scroll={disableScroll}>
      {children}
    </main>
  );
}
