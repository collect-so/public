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
      animate={animate}
      className={cx(
        className,
        "leading-[1.2]",
        {
          "text-content-primary-light bg-accent-acid-yellow hover:shadow-md hover:shadow-accent-acid-yellow/60":
            color === "yellow",
          "text-content-primary-light bg-accent-blue hover:shadow-md hover:shadow-accent-blue/60":
            color === "blue",
          "text-content-primary-light bg-accent-pink hover:shadow-md hover:shadow-accent-pink/60":
            color === "pink",
          "text-content-primary-dark bg-accent-green hover:shadow-md hover:shadow-accent-green/60":
            color === "green",
          "text-content-primary-dark bg-accent-red hover:shadow-md hover:shadow-accent-red/60":
            color === "red",
          "text-content-primary-dark bg-accent-purple hover:shadow-md hover:shadow-accent-purple/60":
            color === "purple",
          "text-content-primary-dark bg-accent-orange hover:shadow-md hover:shadow-accent-orange/60":
            color === "orange",
          "text-[#6d6d6d] bg-[#1b1b1b]": color === "dark",
        },
        "h-[64px] px-8 rounded-full",
        "md:h-[40px] md:px-4",
        "sm:h-[28px] sm:px-2",
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
