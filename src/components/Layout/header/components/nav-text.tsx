import { FunctionComponent, PropsWithChildren } from "react";
import cx from "classnames";

export const NavText: FunctionComponent<
  PropsWithChildren<{
    child?: boolean;
    className?: string;
  }>
> = ({ children, child, className }) => {
  return (
    <p
      className={cx(
        className,
        "typography-menu-primary w-max transition hover:text-base-gray active:text-base-dark-gray",
        {
          "typography-menu-secondary": child,
        },
      )}
    >
      {children}
    </p>
  );
};
