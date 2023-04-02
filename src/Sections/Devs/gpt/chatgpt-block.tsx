import { ArrowRight } from "react-feather";

import Link from "next/link";
import { OutlineButton } from "~/components/button";
import { CollectChatgptIntegrations } from "./collect-chatgpt-integrations";

import { CodeBlock } from "~/components/codeblock";
import { Carousel, CarouselCard } from "~/components/carousel";
import { ComponentPropsWithoutRef, useState } from "react";
import classNames from "classnames";
import { examples } from "./data";

const cardWidth = "clamp(410px, 600px, 70vw)";

function Chip({ className, ...props }: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={classNames(
        "h-[36px] px-4 rounded-md aria-selected:bg-accent-brand aria-selected:text-base-white bg-[#35454e] text-content-primary-dark",
        className,
      )}
      {...props}
    />
  );
}

export function ChatGPTBlock() {
  const [selected, setSelected] = useState<keyof typeof examples>("Dating app");

  const data = examples[selected];

  return (
    <div className="flex flex-col">
      <div className=" text-center  flex flex-col items-center container">
        <CollectChatgptIntegrations />
        <h2 className="text-2xl sm:text-base font-bold mb-8 mt-8 text-content-primary-dark tracking-tight">
          ChatGPT integration
        </h2>
        <div className="text-base sm:text-sm font-medium text-content-secondary-dark mb-8 tracking-tight">
          <p>Bypass the boring part.</p>
          <p>
            Just type your application purpose and Collect API with ChatGPT
            utilize all the work.
          </p>
        </div>

        <div
          className="flex flex-col w-full gap-2"
          style={{ maxWidth: cardWidth }}
        >
          <div className="rounded-md bg-[#35454e] flex items-center w-full md:w-full justify-between p-4 ">
            <p className="text-base sm:text-sm font-medium text-content-secondary-dark tracking-tight">
              Make a {selected}
            </p>
            <Link href="/features/collect-and-chatgpt">
              <OutlineButton>
                Explore an Example
                <ArrowRight />
              </OutlineButton>
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(examples).map((key) => (
              <Chip
                aria-selected={key === selected}
                onClick={() => setSelected(key as keyof typeof examples)}
                key={key}
              >
                {key}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <Carousel cardWidth={cardWidth}>
        {data.map((card, idx) => (
          <CarouselCard className="py-5" key={idx}>
            <CodeBlock
              darkModeTrigger={false}
              className="border border-stroke-dark rounded-md"
              code={card.code}
            />
          </CarouselCard>
        ))}
      </Carousel>
    </div>
  );
}
