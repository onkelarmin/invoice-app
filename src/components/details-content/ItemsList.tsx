import styles from "./ItemsList.module.scss";
import type { InvoiceItem } from "@/types/invoice";
import { Heading } from "@/components/utilities/heading/Heading";
import { formatCurrency } from "@/lib/formatCurrency";

type ItemsListProps = {
  items: InvoiceItem[];
};

export function ItemsList({ items }: ItemsListProps) {
  return (
    <div className={styles.itemsList}>
      <Heading tag="h2" size="h5" classes="visually-hidden">
        Invoice items
      </Heading>
      <div className="hide-mobile" aria-hidden="true">
        <p>Item Name</p>
        <p>QTY.</p>
        <p>Price</p>
        <p>Total</p>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Heading tag="h3" size="h4">
              {item.name}
            </Heading>
            <p>
              <span className="visualy-hidden">Quantity:</span>
              {item.quantity}
            </p>
            <p>
              <span className="visually-hidden">Price:</span>
              {formatCurrency(item.price)}
            </p>
            <p>
              <span className="visually-hidden">Total:</span>
              {formatCurrency(item.quantity * item.price)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
