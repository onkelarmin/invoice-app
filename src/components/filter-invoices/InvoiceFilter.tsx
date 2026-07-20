import styles from "./InvoiceFilter.module.scss";
import { Button } from "@/components/utilities/button/Button";
import ArrowIcon from "@/assets/svg/icon-arrow-down.svg?react";
import CheckIcon from "@/assets/svg/icon-check.svg?react";
import { FILTER_STATUS } from "@/data/constants";
import type { FilterSet } from "@/types/invoice";

type InvoiceFilterProps = {
  values: FilterSet;
  onChange: (value: string, isChecked: boolean) => void;
};

export function InvoiceFilter({ values, onChange }: InvoiceFilterProps) {
  return (
    <>
      {/* Button */}
      <Button
        variant="ghost"
        popoverTarget="filter-list"
        classes={styles.listButton}
      >
        <span>
          Filter <span className="hide-mobile">by status</span>
        </span>
        <ArrowIcon className={styles.arrowIcon} aria-hidden="true" />
      </Button>

      {/* Filter list */}
      <div className={styles.listContainer} id="filter-list" popover="auto">
        <fieldset className={styles.inner}>
          <legend className="visually-hidden">Filter invoices by status</legend>
          {Object.values(FILTER_STATUS).map((status) => (
            <label key={status} className={styles.formControl}>
              <input
                type="checkbox"
                value={status}
                checked={values.has(status)}
                onChange={(e) => onChange(e.target.value, e.target.checked)}
                className="visually-hidden"
              />
              <span className={styles.checkBox}>
                <CheckIcon className={styles.checkIcon} aria-hidden="true" />
              </span>
              <span className={styles.text}>{status}</span>
            </label>
          ))}
        </fieldset>
      </div>
    </>
  );
}
