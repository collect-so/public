import cx from "classnames"
import Link from "next/link"
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BookText,
  DatabaseIcon,
} from "lucide-react"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { motion } from "framer-motion"

import { Button, MainCta } from "~/components/Button"
import { defaultDescription } from "~/components/Meta"
import { links } from "~/config/urls"
import { CodeBlock } from "~/components/CodeBlock"

const code = `const db = new Collect("API_TOKEN")

// Any JSON is ok
await db.records.createMany("member", {
  email: "john.galt@example.com",
  verified: true,
  plan: {
    name: "pro",
    credits: 100,
    validTill: "2024-09-20T09:05:54"     
  }
})`

const code1 = `email: "string"
verified: "boolean"`

const code2 = `name: "string"
credits: "number"
validTill: "datetime"`

export const Hero = () => {
  const spacerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <>
      <div className="h-[90dvh] sm:hidden" aria-hidden ref={spacerRef} />

      <div className="flex">
        <motion.section
          className={cx(
            "h-dvh grid items-center container place-content-center fixed z-0 inset-0",
            "sm:place-content-start sm:pt-32 sm:pb-12 sm:static sm:h-auto sm:!opacity-100 md:!grid-cols-1",
          )}
          style={{ opacity }}
        >
          <div className="z-0 text-center w-full items-center mb-8">
            <h1
              role="heading"
              className={cx(
                "typography-4xl !tracking-tight !font-bold md:text-2xl mb-4",
              )}
            >
              Build{" "}
              <i>
                <span className="font-special relative text-[72px] md:text-[48px]">
                  better
                </span>
              </i>{" "}
              software{" "}
              <i>
                <span className="font-special text-[72px] md:text-[48px] relative">
                  faster
                </span>
              </i>
            </h1>
            <p
              className={cx(
                "text-xl !font-medium text-content2 !tracking-normal",
              )}
            >
              {defaultDescription}
            </p>
          </div>
          <div
            className={cx(
              "flex items-center justify-center w-full md:flex-col mb-8",
            )}
          >
            <CodeBlock
              code={code}
              className="lg:w-fit grid place-content-center md:!m-0 md:!mt-10 md:w-full"
              preClassName="md:w-full border-2 border-content3"
            />
            <div className="flex flex-col gap-28 text-content3 p-8 md:flex-row md:p-4">
              <ArrowRightIcon className="md:hidden" />
              <ArrowRightIcon className="md:hidden" />
              <ArrowRightIcon className="md:hidden" />

              <ArrowDownIcon className="hidden md:block" />
              <ArrowDownIcon className="hidden md:block" />
              <ArrowDownIcon className="hidden md:block" />
            </div>
            <div className="flex flex-col items-center md:flex-row md:gap-6 sm:flex-col sm:gap-0">
              <div
                className={"bg-[#131313] rounded-xl p-4 border-2 border-accent"}
              >
                <div className="bg-[#E8FFB9] text-[#131313] px-4 py-2 font-semibold rounded w-min flex items-center gap-2 mb-4">
                  <DatabaseIcon /> <span>member</span>
                </div>
                <CodeBlock
                  code={code1}
                  className="lg:w-fit lg:m-auto md:!m-0 md:!mt-10 md:w-full"
                  preClassName="md:w-full !p-0"
                />
              </div>
              <svg
                width="12"
                height="60"
                viewBox="0 0 12 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-accent scale-[1.3] md:rotate-90 sm:rotate-0"
              >
                <path
                  d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 59.7735L11.7735 54L6 48.2265L0.226495 54L6 59.7735ZM5 6L5 54L7 54L7 6L5 6Z"
                  fill="currentColor"
                />
              </svg>

              <div
                className={"bg-[#131313] rounded-xl p-4 border-2 border-accent"}
              >
                <div className="bg-[#F7E1FF] text-[#131313] px-4 py-2 font-semibold rounded flex w-min items-center gap-2 mb-4">
                  <DatabaseIcon /> <span>plan</span>
                </div>
                <CodeBlock
                  code={code2}
                  className="lg:w-fit lg:m-auto md:!m-0 md:!mt-10 md:w-full"
                  preClassName="md:w-full !p-0"
                />
              </div>
            </div>
          </div>

          <div className="justify-center flex gap-4 sm:flex-col">
            <MainCta
              variant="accent"
              className="min-w-[170px]"
              text="Create Project"
            />

            <Button
              className="min-w-[170px]"
              as={Link}
              href={links.getStarted}
              variant="secondary"
            >
              Documentation <BookText />
            </Button>
          </div>
        </motion.section>
      </div>
    </>
  )
}
