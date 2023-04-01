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
          "bg-background-light": !scrollStarted && !intersectDarkContainers,
          "backdrop-blur": scrollStarted,
          // "bg-base-light-black/90": !isOpen && darkMode,
          // "bg-base-white/60": !isOpen && lightMode,
          "shadow-[0px_0px_15px_rgba(0,0,0,0.1)]": !isOpen && lightMode,
          "text-content-primary-light": lightMode && !isOpen,
          "text-content-primary-dark": isOpen || darkMode,
          "bg-background-dark": isOpen,
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
