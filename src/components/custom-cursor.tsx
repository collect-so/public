import { forwardRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = forwardRef<HTMLElement>((props, ref) => {
  const moveCursor = (e: MouseEvent) => {
    cursorX.set(e.clientX - 16);
    cursorY.set(e.clientY - 16);
  };
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = {
    damping: 30,
    stiffness: 600,
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      variants={{
        default: {
          opacity: 1,
          height: 50,
          width: 50,
        },
      }}
      className="circle md:hidden"
      animate={"default"}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    ></motion.div>
  );
});

CustomCursor.displayName = "CustomCursor";
