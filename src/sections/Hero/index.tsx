import cx from "classnames"
import Link from "next/link"
import { BookText } from "lucide-react"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"

import { Button, MainCta } from "~/components/Button"
import { defaultDescription, defaultTitle } from "~/components/Meta"
import { LetterTypingText } from "~/components/LetterTypingText"
import { links } from "~/config/urls"
import { CodeBlock } from "~/components/CodeBlock"

const code = `const Collect = new CollectSDK("TOKEN")
// Done ✅`

export const Hero = () => {
  const spacerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <>
      <div className="h-[70dvh] sm:hidden" aria-hidden ref={spacerRef} />

      <div className="flex">
        <motion.section
          className={cx(
            "h-[100dvh] container grid pb-36 place-content-center fixed z-0 inset-0 grid-cols-5",
            "sm:place-content-start sm:pt-32 sm:pb-12 sm:static sm:h-auto sm:!opacity-100 md:!grid-cols-1",
          )}
          style={{ opacity }}
        >
          <div className="col-span-3 flex flex-col gap-10 relative z-0 sm:h-auto m-auto">
            <div className="flex flex-col gap-5 ">
              <LetterTypingText
                as="h1"
                className={cx(
                  "typography-4xl !tracking-tight !font-black !mb-0 md:text-2xl max-w-[48rem]",
                )}
                animate
              >
                {defaultTitle}
              </LetterTypingText>

              <p
                className={cx(
                  "typography-lg text-content2 !tracking-normal max-w-[32rem]",
                )}
              >
                {defaultDescription}
              </p>
            </div>

            <div className=" flex gap-4 sm:flex-col">
              <MainCta variant="accent" className="min-w-[170px]" />

              <Button
                className="min-w-[170px]"
                as={Link}
                href={links.getStarted}
                variant="secondary"
              >
                Documentation <BookText />
              </Button>
            </div>
          </div>
          <CodeBlock
            code={code}
            className="col-span-2 lg:w-fit lg:m-auto grid place-content-center md:!m-0 md:!mt-10 md:w-full "
            preClassName="md:w-full drop-shadow-[0px_0px_60px_rgba(63,129,255,0.3)]"
          />
        </motion.section>
      </div>
    </>
  )
}
