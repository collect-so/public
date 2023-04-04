import { Section } from "~/components/section";
import Image from "next/image";
import { data, TData } from "~/Sections/Devs/data";
import code from "~/images/code.png";
import { CodeBlock } from "~/components/codeblock";
import classNames from "classnames";
import { ArrowRight } from "react-feather";
import Link from "next/link";
import { OutlineButton } from "~/components/button";
import { ChatGPTBlock } from "~/Sections/Devs/gpt/chatgpt-block";
import { VisuallyHidden } from "~/components/visually-hidden";

const DevsFeatureBlock = ({
  text,
  title,
  code,
  image,
  index,
  link,
}: TData & { index: number }) => {
  return (
    <div
      className={"grid grid-cols-3 gap-16content-center items-center max-w-5xl"}
    >
      <div className="hidden md:block w-[200px] m-auto col-span-3 mb-8">
        <Image src={image} alt={title} />
      </div>
      <div className="col-span-2 md:col-span-3">
        <h3 className="text-2xl sm:text-base font-bold mb-8 text-content-primary-dark tracking-tight">
          {title}
        </h3>
        <h4 className="text-base sm:text-sm font-medium text-content-secondary-dark tracking-tight">
          {text}
        </h4>

        <CodeBlock code={code} darkModeTrigger={false} />
        {link ? (
          <Link href={link}>
            <OutlineButton className="mt-8">
              Learn more <VisuallyHidden>about {title}</VisuallyHidden>
              <ArrowRight />
            </OutlineButton>
          </Link>
        ) : null}
      </div>
      <div
        className={classNames(
          {
            "justify-self-end": !(index % 2),
            "justify-self-start ": index % 2,
          },
          " md:hidden",
        )}
        style={index % 2 ? { gridRow: 1 } : {}}
      >
        <Image src={image} alt={title} />
      </div>
    </div>
  );
};

export function DevsSection() {
  return (
    <Section
      id="features"
      className="min-h-screen flex flex-col place-content-center py-[160px]"
      data-theme="dark"
    >
      <div className="container grid gap-[160px]">
        <div className="basis-1/1 text-center items-center flex flex-col">
          <Image src={code} alt={"Developers Benefits"} />

          <h2 className="text-3xl sm:text-xl font-bold mb-8 text-content-primary-dark md:text-2xl tracking-tight">
            Batteries included
          </h2>
          <h3 className="text-xl sm:text-base font-medium text-content-secondary-dark tracking-tight">
            Seamless developer experience and streamlined workflow{" "}
            <br className="sm:hidden" /> enables your team focus on features,
            not on tech debt and bugs
          </h3>
        </div>
        <div className="grid place-content-center gap-[160px]">
          {data.map((data, index) => (
            <DevsFeatureBlock {...data} index={index} key={index} />
          ))}
        </div>

        <h2 className="text-3xl sm:text-xl font-bold text-content-primary-dark md:text-2xl text-center py-[5vh] tracking-tight">
          ...And last but not least
        </h2>
      </div>
      <ChatGPTBlock />
    </Section>
  );
}
