import { ReactNode } from "react";
import cx from "classnames";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "inline-flex px-2 py-0.5 text-sm sm:text-sm font-extrabold leading-normal rounded-[4px] text-content-primary-light",
        { "bg-accent-brand": !className },
        className,
      )}
    >
      {children}
    </div>
  );
}
