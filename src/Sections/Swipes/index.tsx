import { Section } from "~/components/section";

import { useState, useCallback, useRef, ReactNode } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import clsx from "classnames";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import { cards } from "./data";

const variants = {
  red: "bg-accent-red",
  purple: "bg-accent-purple",
  orange: "bg-accent-orange",
};

function StackableCard({
  idx,
  variant = "red",
  title,
  subtitle,
  imageSrc,
  ...props
}: {
  idx: number;
  variant: keyof typeof variants;
  title: ReactNode;
  subtitle: ReactNode;
  imageSrc: any;
}) {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = useCallback(() => {
    if (!ref.current) {
      return;
    }
    const { top } = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setElementTop(top + scrollTop);
  }, [ref]);

  const { height } = useWindowSize(0, 0);
  useIsomorphicLayoutEffect(() => {
    handleResize();
  }, [handleResize, height]);

  const scale = useTransform(
    scrollY,
    [elementTop, elementTop + height],
    [1, 0.9 + idx * 0.03],
    {
      clamp: true,
    },
  );

  const rotate = useTransform(
    scrollY,
    [elementTop + height * 0.5, elementTop + height],
    [0, (idx % 2 === 0 ? -1 : 1) * 8],
    {
      clamp: true,
    },
  );

  const offsetY = useTransform(
    scrollY,
    [elementTop + height * 0.5, elementTop + height],
    [0, -64 / (idx + 1)],
    {
      clamp: true,
    },
  );

  return (
    <div
      className={"sticky h-[100vh] w-full grid place-items-center top-0 px-5"}
      {...props}
      ref={ref}
    >
      <motion.div
        className={clsx(
          "max-h-[448px] max-w-[1024px] h-[70vh] overflow-clip sm:h-[72vh] w-full mx-auto rounded-[75px] sm:rounded-xl flex items-center",
          variants[variant],
        )}
        style={{ scale, y: offsetY, rotate }}
      >
        <div
          className={clsx("flex items-center sm:flex-col sm:items-start ", {
            "flex-row-reverse": idx % 2 === 0,
          })}
        >
          <div className="flex-shrink-0 sm:flex-shrink h-full">{imageSrc}</div>

          <div className="flex flex-col gap-4 sm:gap-2 p-[60px]">
            <h2 className="text-3xl sm:text-base text-content-primary-dark font-bold tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-xl sm:text-sm text-content-secondary-dark font-medium tracking-tight leading-snug">
              {subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function SwipesSection() {
  return (
    <Section className="flex flex-col z-10 py-24" data-theme="dark">
      <h1 className="text-center font-extrabold text-3xl text-content-primary-dark translate-y-32">
        Turn <span className="text-accent-brand">ideas</span> into fast and
        reliable <span className="text-accent-purple">APIs</span>
      </h1>
      {cards?.map((card, idx) => (
        <StackableCard {...card} idx={idx} key={idx} />
      ))}
    </Section>
  );
}
