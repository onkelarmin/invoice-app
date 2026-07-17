import { useInvoiceValue } from "@/context/useInvoiceContext";

export function Homepage() {
  const { invoices } = useInvoiceValue();

  return (
    <h1>
      {invoices.map((invoice) => (
        <p>{invoice.clientEmail}</p>
      ))}
    </h1>
  );
}
