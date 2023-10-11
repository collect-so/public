import { FC, MutableRefObject, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import cx from "classnames";
import { GridShaft } from "~/components/grid-shaft";

export const Background: FC<{
  target: MutableRefObject<HTMLElement>;
  sectionHeight: number;
}> = ({ sectionHeight, target }) => {
  const { scrollYProgress } = useScroll({
    target,
    layoutEffect: true,
  });
  const ref = useRef<SVGSVGElement>(null);

  // @KEK
  const gridHeight =
    ref.current?.getBoundingClientRect().height ??
    4392 / (1279 / window.innerWidth);

  const endOfRange = useMemo(
    () =>
      sectionHeight >= gridHeight
        ? sectionHeight - gridHeight
        : -(gridHeight - sectionHeight),
    [gridHeight, sectionHeight],
  );
  const y = useTransform(scrollYProgress, [0, 1], [0, endOfRange]);

  return (
    <motion.div
      style={{ top: y }}
      initial={{
        opacity: 0,
      }}
      transition={{ type: "inertia", velocity: 50, power: 5 }}
      whileInView={{
        opacity: 1,
      }}
      className={cx("absolute z-0 w-full")}
    >
      <GridShaft color={"#1f1f1f"} ref={ref} />
    </motion.div>
  );
};
