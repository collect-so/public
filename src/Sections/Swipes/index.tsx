import { Section } from "~/components/section";

import { useState, useCallback, useRef, ReactNode } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import clsx from "classnames";
import { useIsomorphicLayoutEffect, useWindowSize } from "react-use";
import Image, { StaticImageData } from "next/image";
import { cards } from "./data";

const variants = {
  primary:
    "bg-base-white border border-b-2 border-[#00000014] text-primary-contrast",
};

function StackableCard({
  idx,
  variant = "primary",
  title,
  subtitle,
  image,
  ...props
}: {
  idx: number;
  variant: keyof typeof variants;
  title: ReactNode;
  subtitle: ReactNode;
  image: StaticImageData;
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
          "max-h-[560px] max-w-[1024px] h-[72vh] sm:h-[72vh] w-full mx-auto rounded-3xl sm:rounded-xl px-16 py-24 sm:px-8 sm:py-8 flex items-center",
          variants[variant],
        )}
        style={{ scale, y: offsetY }}
      >
        <div className="flex gap-10 items-center sm:flex-col sm:items-start">
          <Image
            className="flex-shrink-0 sm:flex-shrink h-[250px] sm:h-[200px] w-[250px] sm:w-[200px]"
            alt=""
            src={image}
            width={250}
            height={250}
            quality={100}
          />

          <div className="flex flex-col gap-4 sm:gap-2">
            <h4 className="text-2xl sm:text-base text-content-primary-light font-bold">
              {title}
            </h4>
            <p className="text-base sm:text-sm text-content-secondary-light font-medium">
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
    <Section className="flex flex-col" data-theme="light">
      {cards?.map((card, idx) => (
        <StackableCard {...card} idx={idx} key={idx} />
      ))}
    </Section>
  );
}
