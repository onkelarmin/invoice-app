import type { InvoiceDraft, Invoice } from "../src/types/invoice";

export function createInvoice(overrides: Partial<Invoice> = {}): Invoice {
  return {
    id: "ID1234",
    createdAt: "2026-07-19",
    paymentDue: "2026-07-20",
    description: "Re-branding",
    paymentTerms: 1,
    clientName: "Test client",
    clientEmail: "test-client@mail.com",
    status: "pending",
    senderAddress: {
      street: "123 Sender Street",
      city: "London",
      postCode: "E1 3EZ",
      country: "United Kingdom",
    },
    clientAddress: {
      street: "123 Client Street",
      city: "Sharrington",
      postCode: "NR24 5WQ",
      country: "United Kingdom",
    },
    items: [
      {
        id: "e0ad41b8-043b-421b-85a6-38423d5a1784",
        name: "Item 1",
        quantity: 1,
        price: 1000,
      },
    ],
    ...overrides,
  };
}

export function createDraftInvoice(
  overrides: Partial<InvoiceDraft> = {},
): InvoiceDraft {
  return {
    id: "ID9876",
    createdAt: "2026-07-19",
    paymentDue: "2026-07-20",
    description: "Re-branding",
    paymentTerms: 1,
    clientName: "Draft client",
    clientEmail: "draft-client@mail.com",
    status: "draft",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [],
    ...overrides,
  };
}
