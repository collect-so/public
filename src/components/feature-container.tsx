import { FC, PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import cx from "classnames";

export const FeatureContainer: FC<
  PropsWithChildren<HTMLMotionProps<"div">>
> = ({ children, className, ...props }) => {
  return (
    <motion.div
      // initial={{ opacity: 0, y: 200 }}
      // whileInView={{
      //   opacity: 1,
      //   y: 0,
      //   transition: {
      //     type: "spring",
      //     stiffness: 100,
      //   },
      // }}
      // viewport={{ once: true }}
      className={cx("feature-container", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};
