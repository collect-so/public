import { createContext, useEffect, useState } from "react";

import { Navbar } from "~/components/Layout/header/components/navbar";
import { useIntersectionByQuery } from "~/components/hooks/useIntersectionByQuery";
import { useResizeEffect } from "~/components/hooks/useResizeEffect";
import { menuData } from "~/components/Layout/header/data";
import { motion } from "framer-motion";
import { MenuToggle } from "~/components/Layout/header/components/menu-toggle";
import { MenuItem } from "~/components/Layout/header/components/menu-item";
import cx from "classnames";
import { useMediaMatcher } from "~/components/hooks/useMediaMatcher";
import { Logo } from "~/components/Layout/header/components/logo";
import Link from "next/link";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";
import { OutlineButton, TransparentButton } from "~/components/button";

export const NavigationContext = createContext({
  intersectDarkContainers: true,
  scrollStarted: false,

  isOpen: false,
  close: () => {},
  open: () => {},

  currentItem: "",
  closeMenuItem: () => {},
  openMenuItem: (key: string) => {},

  data: menuData,

  isTablet: false,
});

const mobileNavigationAnimationVariants = (isTablet: boolean) =>
  isTablet
    ? {
        open: {
          transition: {
            duration: 0.3,
          },
          display: "block",
          opacity: 1,
          height: "auto",
          paddingBottom: "30px",
        },
        collapsed: {
          display: "none",
          transition: {
            duration: 0.3,
          },
          opacity: 0,
          height: 0,
          paddingBottom: 0,
        },
      }
    : {
        collapsed: {
          opacity: 1,
          height: "auto",
        },
        open: {
          opacity: 1,
          height: "auto",
        },
      };

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  const [currentItem, setCurrentItem] = useState("");
  const closeMenuItem = () => setCurrentItem("");

  const intersectDarkContainers = useIntersectionByQuery("[data-theme=dark]");
  const [scrollStarted, setScrollStarted] = useState(false);
  const resetNav = () => {
    close();
    closeMenuItem();
  };

  useResizeEffect(resetNav);

  const scrollCallback = () => setScrollStarted(window.scrollY > 70);
  useEffect(() => {
    document.addEventListener("scroll", scrollCallback);
    return () => document.removeEventListener("scroll", scrollCallback);
  }, []);

  const isTablet = useMediaMatcher("(max-width: 1080px)");

  return (
    <NavigationContext.Provider
      value={{
        isOpen,
        data: menuData,
        close,
        open,
        currentItem,
        closeMenuItem,
        openMenuItem: setCurrentItem,
        intersectDarkContainers,
        scrollStarted,
        isTablet,
      }}
    >
      <Navbar className="bg-transparent">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
          <motion.div
            initial="collapsed"
            animate={isOpen ? "open" : "collapsed"}
            exit="collapsed"
            variants={mobileNavigationAnimationVariants(isTablet)}
            className={cx(
              "md:block md:absolute md:top-[60px] md:left-0 md:w-full md:min-h-[calc(100vh_-_60px)]",
              { "bg-background-dark": isOpen },
            )}
            style={{ display: !isOpen && isTablet ? "none" : "" }}
          >
            <div className="flex md:flex-col gap-8">
              {menuData.map((item) => (
                <MenuItem item={item} key={item.name} />
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex items-center gap-8 sm:gap-4">
          <TransparentButton>Sign in</TransparentButton>
          <JoinWaitlistButton>Playground</JoinWaitlistButton>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="hidden md:block"
          >
            <MenuToggle />
          </motion.div>
        </div>
      </Navbar>
    </NavigationContext.Provider>
  );
};
