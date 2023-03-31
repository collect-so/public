import * as React from "react";
import { FunctionComponent, useContext } from "react";
import { motion } from "framer-motion";
import { NavigationContext } from "@common/Layout/header";

const Path = (props: any) => (
  <motion.path
    fill="currentColor"
    strokeWidth="2"
    stroke="currentColor"
    {...props}
  />
);

export const MenuToggle: FunctionComponent = () => {
  const { close, open, isOpen } = useContext(NavigationContext);

  return (
    <button
      onClick={isOpen ? close : open}
      className={"w-[60px] h-[60px] md:w-[24px]"}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        preserveAspectRatio="none"
      >
        <Path
          variants={{
            closed: { d: "M 2 8.5 L 20 8.5" },
            open: { d: "M 5 20 L 20 5", strokeLinecap: "round" },
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.5 L 20 16.5" },
            open: { d: "M 5 5 L 20 20", strokeLinecap: "round" },
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};
