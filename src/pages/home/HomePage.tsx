import { InvoiceList } from "@/components/invoice-list/InvoiceList";
import styles from "./HomePage.module.scss";
import { Heading } from "@/components/utilities/heading/Heading";
import { Wrapper } from "@/components/utilities/wrapper/Wrapper";
import { useInvoiceValue } from "@/context/useInvoiceContext";
import { InvoiceFilter } from "@/components/filter-invoices/InvoiceFilter";
import { useState } from "react";
import type { FilterSet } from "@/types/invoice";
import { isStatus } from "@/lib/isStatus";

export function Homepage() {
  const { invoices } = useInvoiceValue();

  const [filters, setFilters] = useState<FilterSet>(
    new Set(["draft", "pending", "paid"]),
  );

  const handleFilterChange = (value: string, isChecked: boolean) => {
    if (!isStatus(value)) return;

    setFilters((prev) => {
      const next = new Set(prev);

      if (isChecked) {
        next.add(value);
      } else {
        next.delete(value);
      }

      return next;
    });
  };

  const visibleInvoices = invoices.filter((invoice) => {
    return filters.has(invoice.status);
  });

  return (
    <Wrapper>
      <div className={styles.pageLayout}>
        <div className={styles.headerLayout}>
          <div>
            <Heading tag="h1" size="h1">
              Invoices
            </Heading>
            <p
              className="font-body-variant mar-block-start-2xs"
              data-testid="total-count"
            >
              {visibleInvoices.length === 0 ? (
                "No invoices"
              ) : (
                <>
                  <span className="hide-mobile">There are</span>{" "}
                  {visibleInvoices.length}{" "}
                  <span className="hide-mobile">total</span> invoices
                </>
              )}
            </p>
          </div>

          <div className={styles.controls}>
            <InvoiceFilter values={filters} onChange={handleFilterChange} />
            <button>new Invoice</button>
          </div>
        </div>

        <InvoiceList invoices={visibleInvoices} />
      </div>
    </Wrapper>
  );
}
