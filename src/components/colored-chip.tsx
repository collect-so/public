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
        "leading-[1.2] cursor-default items-center flex",
        {
          "text-content-primary-light bg-accent-acid-yellow":
            color === "yellow",
          "text-content-primary-light bg-accent-blue": color === "blue",
          "text-content-primary-light bg-accent-pink ": color === "pink",
          "text-content-primary-dark bg-accent-green": color === "green",
          "text-content-primary-dark bg-accent-red ": color === "red",
          "text-content-primary-dark bg-accent-purple ": color === "purple",
          "text-content-primary-dark bg-accent-orange ": color === "orange",
          "text-[#6d6d6d] bg-[#1b1b1b]": color === "dark",
        },
        "min-h-[64px] px-8 rounded-full",
        "md:min-h-[40px] md:px-4",
        "sm:min-h-[28px] sm:px-2",
      )}
      {...props}
    >
      <p
        className={cx(
          "text-3xl font-medium font-special",
          "md:text-xl",
          "sm:text-base",
        )}
      >
        {children}
      </p>
    </motion.div>
  );
};
