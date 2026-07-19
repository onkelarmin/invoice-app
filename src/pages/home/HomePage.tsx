import { InvoiceList } from "@/components/invoice-list/InvoiceList";
import styles from "./HomePage.module.scss";
import { Heading } from "@/components/utilities/heading/Heading";
import { Wrapper } from "@/components/utilities/wrapper/Wrapper";
import { useInvoiceValue } from "@/context/useInvoiceContext";

export function Homepage() {
  const { invoices } = useInvoiceValue();

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
              {invoices.length === 0 ? (
                "No invoices"
              ) : (
                <>
                  <span className="hide-mobile">There are</span>{" "}
                  {invoices.length} <span className="hide-mobile">total</span>{" "}
                  invoices
                </>
              )}
            </p>
          </div>

          <div>Filter and new button</div>
        </div>

        <InvoiceList />
      </div>
    </Wrapper>
  );
}
