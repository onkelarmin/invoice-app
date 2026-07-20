import styles from "./InvoiceList.module.scss";
import Illustration from "@/assets/svg/illustration-empty.svg?react";
import { Heading } from "@/components/utilities/heading/Heading";

export function EmptyList() {
  return (
    <section role="status" className={styles.emptyList}>
      <Illustration className={styles.illustration} aria-hidden="true" />
      <Heading tag="h2" size="h2" classes="mar-block-start-3xl">
        There is nothing here
      </Heading>
      <p className="font-body-variant mar-block-start-lg">
        Create an invoice by clicking the{" "}
        <strong className="font-body-variant-bold">New Invoice</strong> button
        and get started
      </p>
    </section>
  );
}
