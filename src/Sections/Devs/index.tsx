import { Section } from "@common/section";
import Image from "next/image";
import { data, TData } from "~/Sections/Devs/data";
import code from "~/images/code.png";
import { CollectChatgptIntegrations } from "~/Sections/Devs/collect-chatgpt-integrations";
import { ChatgptInput } from "~/Sections/Devs/chatgpt-input";
import { CodeBlock } from "@common/codeblock";
import classNames from "classnames";
import { ArrowLeft, ArrowRight, CornerDownLeft } from "react-feather";
import Link from "next/link";

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
      className={classNames(
        "grid grid-cols-3 gap-16content-center items-center max-w-4xl",
        { "grid-flow-row-dense": index % 2 },
      )}
    >
      <div className="hidden md:block w-[200px]">
        <Image src={image} alt={title} />
      </div>
      <div className="col-span-2 md:col-span-3">
        <h2 className="text-2xl sm:text-base font-bold mb-8 text-content-primary-dark">
          {title}
        </h2>
        <h4 className="text-base sm:text-sm font-medium text-content-secondary-dark">
          {text}
        </h4>

        <CodeBlock code={code} />
        {link ? (
          <Link href={link}>
            <p className="text-base sm:text-sm text-accent-blue font-medium flex items-center gap-2 pt-8">
              Learn more
              <ArrowRight />
            </p>
          </Link>
        ) : null}
      </div>
      <div className="justify-self-end md:hidden">
        <Image src={image} alt={title} />
      </div>
    </div>
  );
};

export function DevsSection() {
  return (
    <Section
      className="min-h-screen mt-[70px] md:mt-[60px] grid place-content-center"
      data-theme="dark"
    >
      <div className="container grid gap-[160px] py-[160px]">
        <div className="basis-1/1 text-center items-center flex flex-col">
          <Image src={code} alt={"Developers Benefits"} />

          <h2 className="text-3xl sm:text-xl font-bold mb-8 text-content-primary-dark md:text-2xl">
            Batteries included
          </h2>
          <h4 className="text-xl sm:text-base font-medium text-content-secondary-dark">
            Seamless developer experience and streamlined workflow{" "}
            <br className="sm:hidden" /> enables your team focus on features,
            not on tech debt and bugs.
          </h4>
        </div>
        <div className="grid place-content-center gap-[160px]">
          {data.map((data, index) => (
            <DevsFeatureBlock {...data} index={index} key={index} />
          ))}
        </div>

        <h2 className="text-3xl sm:text-xl font-bold text-content-primary-dark md:text-2xl text-center py-[5vh]">
          ...And last but not least
        </h2>

        <div className="text-center flex flex-col items-center">
          <CollectChatgptIntegrations />
          <h2 className="text-2xl sm:text-base font-bold mb-8 mt-8 text-content-primary-dark">
            ChatGPT integration
          </h2>
          <p className="text-base sm:text-sm font-medium text-content-secondary-dark mb-8">
            Bypass the boring part. Just type your application idea:
          </p>
          <div className="rounded-md bg-[#35454e] flex items-center w-[50%] md:w-full justify-between p-4">
            <p className="text-base sm:text-sm font-medium text-content-secondary-dark ">
              Make a dating app
            </p>
            <CornerDownLeft color="#3f81ff" />
          </div>
          <p className="text-base sm:text-sm font-medium text-content-secondary-dark mb-8 mt-8">
            And Collect API with ChatGPT utilize all the work.
          </p>
          <Link href="/features/collect-and-chatgpt">
            <p className="text-base sm:text-sm text-accent-blue font-medium flex items-center gap-2 pt-8">
              Explore an example
              <ArrowRight />
            </p>
          </Link>
        </div>
      </div>
    </Section>
  );
}
