import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { FC, PropsWithChildren, useRef } from "react";

export const AutoRotationWrapper: FC<
  PropsWithChildren<{
    baseVelocity?: number;
  }>
> = ({ children, baseVelocity = 100 }) => {
  const baseRotate = useMotionValue(0);
  const { scrollY } = useScroll({ layoutEffect: false });
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const rotate = useTransform(baseRotate, (v) => `${wrap(0, 360, v)}deg`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseRotate.set(baseRotate.get() + moveBy);
  });

  return <motion.div style={{ rotate: rotate }}>{children}</motion.div>;
};
