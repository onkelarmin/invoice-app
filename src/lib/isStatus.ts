import { FILTER_STATUS } from "@/data/constants";
import type { FilterStatus } from "@/types/invoice";

export function isStatus(value: string): value is FilterStatus {
  return value in FILTER_STATUS;
}
