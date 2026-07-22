import styles from "./ItemsList.module.scss";
import type { InvoiceItem } from "@/types/invoice";
import { Heading } from "@/components/utilities/heading/Heading";
import { formatCurrency } from "@/lib/formatCurrency";

type ItemsListProps = {
  items: InvoiceItem[];
};

export function ItemsList({ items }: ItemsListProps) {
  return (
    <div className={styles.itemsListContainer}>
      <Heading tag="h2" size="h5" classes="visually-hidden">
        Invoice items
      </Heading>
      {items.length === 0 ? (
        <p>No items added yet</p>
      ) : (
        <>
          <div className={`${styles.head} hide-mobile`} aria-hidden="true">
            <p>Item Name</p>
            <p className={styles.headQuantity}>QTY.</p>
            <p className={styles.headPrice}>Price</p>
            <p className={styles.headTotal}>Total</p>
          </div>
          <ul className={styles.list}>
            {items.map((item) => (
              <li
                key={item.id}
                className={styles.item}
                aria-labelledby={`item-${item.id}-title`}
              >
                <div className={styles.name}>
                  <Heading tag="h3" size="h4" id={`item-${item.id}-title`}>
                    {item.name}
                  </Heading>
                </div>
                <p className={styles.quantity} aria-label="Quantity">
                  {item.quantity}
                  <span className={styles.timesSign} aria-hidden="true">
                    {" "}
                    x
                  </span>
                </p>
                <p className={styles.price} aria-label="Price">
                  {formatCurrency(item.price)}
                </p>
                <p className={styles.total} aria-label="Total">
                  {formatCurrency(item.quantity * item.price)}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
