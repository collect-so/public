import { FC, PropsWithChildren } from "react";
import {
  HTMLMotionProps,
  motion,
  MotionStyle,
  VariantLabels,
} from "framer-motion";
import cx from "classnames";

export type ColoredChipColor =
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "pink"
  | "purple"
  | "dark"
  | "orange";

export interface ColoredChipProps extends HTMLMotionProps<"div"> {
  className?: string;
  color: ColoredChipColor;
  whileHover?: VariantLabels | Record<string, unknown>;
}

export const ColoredChip: FC<PropsWithChildren<ColoredChipProps>> = ({
  className,
  children,
  color,
  style,
  whileHover,
  layoutId,
  animate,
  ...props
}) => {
  return (
    <motion.div
      style={style}
      whileHover={whileHover}
      layoutId={layoutId}
      animate={animate ?? true}
      className={cx(
        className,
        "cursor-pointer items-center flex",
        {
          "text-content-primary-light bg-accent-yellow": color === "yellow",
          "text-content-primary-light bg-accent-blue": color === "blue",
          "text-content-primary-light bg-accent-pink ": color === "pink",
          "text-content-primary-dark bg-accent-green": color === "green",
          "text-content-primary-dark bg-accent-red ": color === "red",
          "text-content-primary-dark bg-accent-purple ": color === "purple",
          "text-content-primary-light bg-accent-orange ": color === "orange",
          "text-[#6d6d6d] bg-[#1b1b1b]": color === "dark",
        },
        "min-h-[48px] px-6 rounded-full",
        "md:min-h-[32px] md:px-5",
        "sm:min-h-[32px] sm:px-3",
      )}
      {...props}
    >
      <p
        className={cx(
          "text-xl leading-1 pb-1 font-medium font-special",
          "md:text-xl md:pb-1",
          "sm:text-base md:pb-1",
        )}
      >
        {children}
      </p>
    </motion.div>
  );
};
