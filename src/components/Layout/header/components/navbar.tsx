import { FunctionComponent, PropsWithChildren, useContext } from "react";

import cx from "classnames";
import { Container } from "~/components/container";
import { NavigationContext } from "~/components/Layout/header";

export const Navbar: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { scrollStarted, intersectDarkContainers, isOpen } =
    useContext(NavigationContext);

  const lightMode = scrollStarted && !intersectDarkContainers;
  const darkMode = intersectDarkContainers;

  return (
    <nav
      className={cx(
        {
          "bg-background-light": scrollStarted && !intersectDarkContainers,
          "text-content-primary-light":
            (lightMode && !isOpen) || !scrollStarted,
          "text-content-primary-dark": isOpen || darkMode,
          "bg-background-dark": isOpen || intersectDarkContainers,
        },
        "flex flex-row justify-between items-center fixed z-30 w-full top-0 ",
      )}
    >
      <Container className="flex flex-row justify-between items-center h-[100px] md:h-[60px]">
        {children}
      </Container>
    </nav>
  );
};
