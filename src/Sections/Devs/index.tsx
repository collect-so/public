import { Section } from "~/components/section";
import Image from "next/image";
import { data, TData } from "~/Sections/Devs/data";
import code from "~/images/code.png";
import { CollectChatgptIntegrations } from "~/Sections/Devs/collect-chatgpt-integrations";
import { CodeBlock } from "~/components/codeblock";
import classNames from "classnames";
import { ArrowRight, CornerDownLeft } from "react-feather";
import Link from "next/link";
import { OutlineButton } from "~/components/button";

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
      <div className="hidden md:block w-[200px] m-auto col-span-3">
        <Image src={image} alt={title} />
      </div>
      <div className="col-span-2 md:col-span-3">
        <h2 className="text-2xl sm:text-base font-bold mb-8 text-content-primary-dark tracking-tight">
          {title}
        </h2>
        <h4 className="text-base sm:text-sm font-medium text-content-secondary-dark tracking-tight">
          {text}
        </h4>

        <CodeBlock code={code} darkModeTrigger={false} />
        {link ? (
          <Link href={link}>
            <OutlineButton className="mt-8">
              Learn more
              <ArrowRight />
            </OutlineButton>
          </Link>
        ) : null}
      </div>
      <div
        className={classNames(
          { "justify-self-end": !(index % 2), "justify-self-start": index % 2 },
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
      className="min-h-screen grid place-content-center"
      data-theme="dark"
    >
      <div className="container grid gap-[160px] py-[160px]">
        <div className="basis-1/1 text-center items-center flex flex-col">
          <Image src={code} alt={"Developers Benefits"} />

          <h2 className="text-3xl sm:text-xl font-bold mb-8 text-content-primary-dark md:text-2xl tracking-tight">
            Batteries included
          </h2>
          <h4 className="text-xl sm:text-base font-medium text-content-secondary-dark tracking-tight">
            Seamless developer experience and streamlined workflow{" "}
            <br className="sm:hidden" /> enables your team focus on features,
            not on tech debt and bugs
          </h4>
        </div>
        <div className="grid place-content-center gap-[160px]">
          {data.map((data, index) => (
            <DevsFeatureBlock {...data} index={index} key={index} />
          ))}
        </div>

        <h2 className="text-3xl sm:text-xl font-bold text-content-primary-dark md:text-2xl text-center py-[5vh] tracking-tight">
          ...And last but not least
        </h2>

        <div className="text-center flex flex-col items-center">
          <CollectChatgptIntegrations />
          <h2 className="text-2xl sm:text-base font-bold mb-8 mt-8 text-content-primary-dark tracking-tight">
            ChatGPT integration
          </h2>
          <p className="text-base sm:text-sm font-medium text-content-secondary-dark mb-8 tracking-tight">
            Bypass the boring part. Just type your application purpose:
          </p>
          <div className="rounded-md bg-[#35454e] flex items-center w-[50%] md:w-full justify-between p-4">
            <p className="text-base sm:text-sm font-medium text-content-secondary-dark tracking-tight">
              Make a dating app
            </p>
            <CornerDownLeft color="#3f81ff" />
          </div>
          <p className="text-base sm:text-sm font-medium text-content-secondary-dark mb-8 mt-8 tracking-tight">
            And Collect API with ChatGPT utilize all the work.
          </p>
          <Link href="/features/collect-and-chatgpt">
            <OutlineButton>
              Explore an Example
              <ArrowRight />
            </OutlineButton>
          </Link>
        </div>
      </div>
    </Section>
  );
}
