import { Temporal } from "@js-temporal/polyfill";
import z from "zod";

const MAX_LENGTHS = {
  description: 100,
  name: 100,
  street: 150,
  city: 100,
  postCode: 20,
  country: 100,
  itemName: 100,
};

export function refineDate(value: string): boolean {
  try {
    Temporal.PlainDate.from(value);
    return true;
  } catch {
    return false;
  }
}

const AddressSchema = z.object({
  street: z.string().max(MAX_LENGTHS.street),
  city: z.string().max(MAX_LENGTHS.city),
  postCode: z.string().max(MAX_LENGTHS.postCode),
  country: z.string().max(MAX_LENGTHS.country),
});

const InvoiceItemSchema = z.object({
  id: z.uuid(),
  name: z.string().max(MAX_LENGTHS.itemName),
  quantity: z.int().positive(),
  price: z.number().positive(),
});

export const InvoiceSchema = z.object({
  id: z
    .string()
    .regex(
      /^[A-Z]{2}\d{4}$/,
      "Invoice id must consist of 2 uppercase letters followed by 4 digits",
    ),
  createdAt: z.string().refine((val) => refineDate(val), "Invalid date"),
  paymentDue: z.string().refine((val) => refineDate(val), "Invalid date"),
  description: z.string().max(MAX_LENGTHS.description),
  paymentTerms: z.int().positive(),
  clientName: z.string().max(MAX_LENGTHS.name),
  clientEmail: z.email(),
  status: z.enum(["pending", "paid"]),
  senderAddress: AddressSchema,
  clientAddress: AddressSchema,
  items: z.array(InvoiceItemSchema),
});

export const InvoiceDraftSchema = z.object({
  id: z
    .string()
    .regex(
      /^[A-Z]{2}\d{4}$/,
      "Invoice id must consist of 2 uppercase letters followed by 4 digits",
    ),
  createdAt: z.string().refine((val) => refineDate(val), "Invalid date"),
  paymentDue: z
    .string()
    .refine((val) => refineDate(val), "Invalid date")
    .optional(),
  description: z.string().max(MAX_LENGTHS.description),
  paymentTerms: z.union([z.int().positive(), z.literal("Not decided yet")]),
  clientName: z.string().max(MAX_LENGTHS.name),
  clientEmail: z.union([z.email(), z.literal("")]),
  status: z.literal("draft"),
  senderAddress: AddressSchema,
  clientAddress: AddressSchema,
  items: z.array(InvoiceItemSchema),
});

export const InvoicesSchema = z.array(
  z.union([InvoiceSchema, InvoiceDraftSchema]),
);
