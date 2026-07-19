const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "AUD",
});

export function formatCurrency(amount: number): string {
  return formatter.format(amount);
}
