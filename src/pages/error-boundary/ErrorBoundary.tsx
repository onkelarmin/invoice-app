import styles from "./ErrorBoundary.module.scss";
import { isRouteErrorResponse, NavLink, useRouteError } from "react-router";
import { Wrapper } from "@/components/utilities/wrapper/Wrapper";
import { Heading } from "@/components/utilities/heading/Heading";
import { Button } from "@/components/utilities/button/Button";
import { BaseLayout } from "@/layouts/BaseLayout";
import { NotFound } from "@/pages/not-found/NotFound";

export function ErrorBoundary() {
  const error = useRouteError();

  let title = "Something went wrong";
  let message =
    "An unexpected error occurred. Please try again or return to the Homepage.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) return <NotFound />;

    title = `${error.status} ${error.statusText}`;

    if (typeof error.data === "string") {
      message = error.data;
    } else if (
      error.data &&
      typeof error.data === "object" &&
      "message" in error.data &&
      typeof error.data.message === "string"
    ) {
      message = error.data.message;
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <BaseLayout>
      <Wrapper>
        <section
          className={styles.content}
          role="alert"
          aria-labelledby="error-title"
        >
          <div className={styles.header}>
            <p className={styles.eyebrow}>Application error</p>
            <Heading tag="h1" size="h1" id="error-title">
              {title}
            </Heading>
          </div>

          <p>{message}</p>

          <Button As={NavLink} variant="primary" to="/">
            Back to Invoices
          </Button>
        </section>
      </Wrapper>
    </BaseLayout>
  );
}
