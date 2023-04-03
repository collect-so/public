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
      className={cx(className, "font-bold", "w-max transition", "text-base", {
        "text-content-primary-light": child,
      })}
    >
      {children}
    </p>
  );
};
