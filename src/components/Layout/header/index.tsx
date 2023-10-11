import { createContext, useEffect, useState } from "react";

import { Navbar } from "~/components/Layout/header/components/navbar";
import { useIntersectionByQuery } from "~/components/hooks/useIntersectionByQuery";
import { useResizeEffect } from "~/components/hooks/useResizeEffect";
import { menuData } from "~/components/Layout/header/data";
import { motion } from "framer-motion";
import { MenuToggle } from "~/components/Layout/header/components/menu-toggle";
import { MenuItem } from "~/components/Layout/header/components/menu-item";
import cx from "classnames";
import { Logo } from "~/components/Layout/header/components/logo";
import Link from "next/link";
import { Button, OutlineButton } from "~/components/button";
import { ArrowRight } from "lucide-react";

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
});

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
      }}
    >
      <Navbar className="bg-transparent">
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex md:flex-col gap-8 md:hidden">
            {menuData.map((item) => (
              <MenuItem item={item} key={item.name} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8 sm:gap-4">
          <Link href="https://app.collect.so/signin" className={"sm:hidden"}>
            <OutlineButton>Sign in</OutlineButton>
          </Link>
          {/*<JoinWaitlistButton />*/}
          <Link href="https://app.collect.so/signup">
            <Button>
              Get Started
              <div className="md:hidden">
                <ArrowRight />
              </div>
            </Button>
          </Link>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="hidden md:block"
          >
            <MenuToggle />
          </motion.div>
          <motion.div
            initial="collapsed"
            animate={isOpen ? "open" : "collapsed"}
            exit="collapsed"
            variants={{
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
            }}
            className={cx(
              "md:top-[60px] md:left-0 md:w-full md:min-h-[calc(100vh_-_60px)]",
              {
                "bg-background-dark absolute hidden md:block": isOpen,
              },
            )}
          >
            <div className="flex md:flex-col gap-8">
              {menuData.map((item) => (
                <MenuItem item={item} key={item.name} />
              ))}
            </div>
          </motion.div>
        </div>
      </Navbar>
    </NavigationContext.Provider>
  );
};
