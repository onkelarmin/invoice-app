import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps<T extends ElementType> = {
  As?: T;
  variant:
    | "primary"
    | "secondary"
    | "danger"
    | "ghost"
    | "new-invoice"
    | "save-as-draft";
  classes?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const DEFAULT_TYPE = "button";

export function Button<T extends ElementType = typeof DEFAULT_TYPE>({
  As,
  variant,
  classes,
  children,
  ...rest
}: ButtonProps<T>) {
  const Component = As ?? DEFAULT_TYPE;

  return (
    <Component
      className={`${styles.button} ${classes ? classes : ""}`}
      data-variant={variant}
      {...rest}
    >
      {children}
    </Component>
  );
}
