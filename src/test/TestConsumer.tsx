import {
  useInvoiceDispatch,
  useInvoiceValue,
} from "@/context/useInvoiceContext";

export function TestConsumer() {
  const { invoices } = useInvoiceValue();
  const dispatch = useInvoiceDispatch();

  return (
    <>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>{invoice.id}</li>
        ))}
      </ul>
      <button
        onClick={() =>
          dispatch({ type: "markAsPaid", payload: { id: invoices[0].id } })
        }
      >
        Mark first invoice as paid
      </button>
    </>
  );
}
