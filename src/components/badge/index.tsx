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
        "inline-flex px-2 py-0.5 text-[14px] font-extrabold leading-normal rounded-[4px] bg-accent-brand text-base-white",
        className,
      )}
    >
      {children}
    </div>
  );
}
