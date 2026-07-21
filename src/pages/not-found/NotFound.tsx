import styles from "./NotFound.module.scss";
import { Heading } from "@/components/utilities/heading/Heading";
import { NavLink } from "react-router";
import { Wrapper } from "@/components/utilities/wrapper/Wrapper";
import { Button } from "@/components/utilities/button/Button";

export function NotFound() {
  return (
    <Wrapper>
      <div className={styles.content}>
        <p className={styles.status}>404</p>

        <Heading tag="h1" size="h1">
          Page not found
        </Heading>

        <p>Sorry, we couldn't find the page you're looking for.</p>

        <Button As={NavLink} variant="primary" to="/">
          Back to Countries
        </Button>
      </div>
    </Wrapper>
  );
}
