import { FunctionComponent, PropsWithChildren, useContext } from "react";

import cx from "classnames";
import { NavigationContext } from "~/components/Layout/header";

export const Navbar: FunctionComponent<
  PropsWithChildren<{ className: string }>
> = ({ children, className }) => {
  const { scrollStarted, intersectDarkContainers, isOpen } =
    useContext(NavigationContext);

  const lightMode = scrollStarted && !intersectDarkContainers;
  const darkMode = intersectDarkContainers;

  return (
    <nav
      className={cx(
        {
          [className + " text-content-primary-dark"]: !scrollStarted,
          "text-content-primary-light":
            (lightMode && !isOpen) || !scrollStarted,
          "text-content-primary-dark": isOpen || darkMode,
          "bg-background-dark/80 backdrop-blur-sm": isOpen || scrollStarted,
        },
        "flex flex-row justify-between items-center fixed z-30 w-full top-0 ",
      )}
    >
      <div className="container flex flex-row justify-between items-center h-[100px] md:h-[60px]">
        {children}
      </div>
    </nav>
  );
};
