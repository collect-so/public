import { FC, MutableRefObject, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import cx from "classnames";
import { GridShaft } from "~/components/grid-shaft";

export const Background: FC<{
  target: MutableRefObject<HTMLElement>;
  targetHeight: number;
}> = ({ targetHeight: sectionHeight, target }) => {
  const { scrollYProgress } = useScroll({
    target,
    layoutEffect: false,
  });

  const ref = useRef<SVGSVGElement>(null);
  const gridHeight = ref.current?.getBoundingClientRect().height ?? 0;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [
      0,
      sectionHeight >= gridHeight
        ? sectionHeight - gridHeight
        : -(gridHeight - sectionHeight),
    ],
  );

  const top = useSpring(y, {
    stiffness: 400,
    damping: 100,
  });

  return (
    <motion.div style={{ top }} className={cx("absolute z-0")}>
      <GridShaft color={"#262626"} ref={ref} />
    </motion.div>
  );
};
