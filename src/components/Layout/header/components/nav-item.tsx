import { ComponentPropsWithoutRef, FunctionComponent } from "react";

import cx from "classnames";

interface INavItem extends ComponentPropsWithoutRef<"div"> {
  active?: boolean;
  child?: boolean;
}

export const NavItem: FunctionComponent<INavItem> = ({
  children,
  child,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        className,
        "md:w-full md:grow w-max md:flex-col flex flex-row items-center  cursor-pointer relative px-[20px] py-[12px] md:px-[3px] md:py-0 text-center",
        child
          ? "md:min-h-[30px] md:mb-[10px] md:ml-[20px]"
          : "md:border-b border-transparent",
      )}
      {...props}
    >
      {children}
    </div>
  );
};
