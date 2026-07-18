import { Temporal } from "@js-temporal/polyfill";

export function formatDate(dateString: string): string {
  return Temporal.PlainDate.from(dateString).toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
