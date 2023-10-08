import { FC, PropsWithChildren } from "react";
import { motion, MotionStyle, VariantLabels } from "framer-motion";
import cx from "classnames";

export const MotionWrapper: FC<
  PropsWithChildren<{
    className?: string;
    style?: MotionStyle;
    whileHover?: VariantLabels | Record<string, unknown>;
  }>
> = ({ className, children, style, whileHover }) => {
  return (
    <motion.div style={style} whileHover={whileHover} className={cx(className)}>
      {children}
    </motion.div>
  );
};
