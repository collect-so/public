import cx from "classnames";
import { FC, forwardRef, PropsWithChildren } from "react";

interface SectionProps {
  className?: string;

  [key: string]: unknown;
}

export const Section = forwardRef<HTMLElement, PropsWithChildren<SectionProps>>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cx(
          "section relative",
          { "bg-background-dark": props["data-theme"] === "dark" },
          { "bg-background-light": props["data-theme"] === "light" },
          className,
        )}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";
