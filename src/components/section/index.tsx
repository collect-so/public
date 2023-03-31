import cx from "classnames";
import { FC, PropsWithChildren } from "react";

interface SectionProps {
  className?: string;

  [key: string]: unknown;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section
      className={cx(
        "section",
        { "bg-background-dark": props["data-theme"] === "dark" },
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};
