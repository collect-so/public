import React, { FC, ReactNode } from "react";
import cx from "classnames";
import { motion, HTMLMotionProps } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "medium" | "small";
  icon?: boolean;
} & HTMLMotionProps<"button">;

const whileHover = {
  scale: 1.1,
};

const ButtonBase: FC<Props> = ({ children, className, icon, ...props }) => {
  return (
    <motion.button
      className={cx(
        className,
        "gap-2 flex items-center justify-center bg-accent-brand rounded-[8px] text-base font-bold duration-300",
        "py-[12px] px-[16px]",
        "md:py-[8px] md:px-[12px] md:text-sm",
      )}
      whileHover={whileHover}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const Button: FC<Props> = ({ children, className, icon, ...props }) => {
  return (
    <ButtonBase
      className={cx(className, "bg-accent-brand text-content-primary-light")}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export const OutlineButton: FC<Props> = ({
  children,
  className,
  icon,
  ...props
}) => {
  return (
    <ButtonBase
      className={cx(
        className,
        "border-2 bg-transparent border-accent-brand text-accent-brand",
      )}
      {...props}
    >
      {children}
    </ButtonBase>
  );
};

export const TransparentButton: FC<Props> = ({
  children,
  className,
  icon,
  ...props
}) => {
  return (
    <motion.button
      className={cx(
        className,
        "gap-2 flex font-bold items-center border-2 bg-transparent border-transparent  text-accent-brand rounded-[8px] duration-300",
        "py-[8px] px-[12px] text-base",
        "md:py-[8px] md:px-[12px] md:text-sm",
      )}
      whileHover={whileHover}
      {...props}
    >
      {children}
    </motion.button>
  );
};
