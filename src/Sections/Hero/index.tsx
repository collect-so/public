import cx from "classnames";
import Link from "next/link";
import { BookText } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

import { Button, MainCta } from "~/components/Button";
import { defaultDescription, defaultTitle } from "~/components/Meta";
import { LetterTypingText } from "~/components/LetterTypingText";
import { links } from "~/config/urls";

/* Simplify, Scale, Succeed
Create, your way
Your Backend, setup in minutes
 10x Your Backend Development
 Effortless Backend Brilliance
 10x Your Engineering 
 Your Shortcut to Robust Backend Development */

export const Hero = () => {
  const spacerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <div className="h-[70dvh]" aria-hidden ref={spacerRef} />

      <motion.section
        className={"h-[100dvh] grid place-content-center fixed z-0 inset-0"}
        style={{ opacity }}
      >
        {/* <ShaftContainer> */}
        <div className="flex flex-col gap-10 relative z-0">
          <div className="flex flex-col gap-5">
            {/* <h1
              className={cx("typography-4xl !mb-0 font-special md:text-2xl ")}
            >
              {defaultTitle}
            </h1> */}

            <LetterTypingText
              as="h1"
              className={cx("typography-4xl !mb-0 font-special md:text-2xl ")}
              animate
            >
              {defaultTitle}
            </LetterTypingText>

            <p className={cx("typography-base max-w-3xl text-content2")}>
              {defaultDescription}
            </p>

            {/* <LetterTypingText
              as="p"
              className="typography-base max-w-3xl text-content2"
              animate
            >
              {defaultDescription}
            </LetterTypingText> */}
          </div>

          <div className="flex gap-4">
            <Button
              className="min-w-[170px]"
              as={Link}
              href={links.getStarted}
              variant="secondary"
            >
              Read the Docs <BookText />
            </Button>

            <MainCta variant="accent" className="min-w-[170px]" />
          </div>
        </div>
        {/* </ShaftContainer> */}
      </motion.section>
    </>
  );
};
