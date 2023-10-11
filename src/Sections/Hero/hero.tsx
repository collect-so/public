import cx from "classnames";
import { ColoredChip } from "~/components/colored-chip";
import { Button, OutlineButton } from "~/components/button";
import { ArrowRight, Book } from "lucide-react";
import { FeatureContainer } from "~/components/feature-container";
import { CodeBlock } from "~/components/codeblock";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";
import Link from "next/link";

const code1 = `fetch("https://api.collect.so/api/v1/collect/json", {
  headers: {
    "Content-Type": "application/json",
    "token": $token
  },
  body: JSON.stringify(anyData)
})
`;

const code2 = `Collect.save("User", {
  id: 11,
  name: "Eva",
  books: [
    {
      title: "The Shining",
      year: 1977,
      author: "Stephen King"
    }
  ]
})`;

const code3 = `Collect.find("User", {
   id: 11
}).update({
  city: "Madrid",
  surname: "Gonzales"
})

Collect.find("books", {
   author: "Stephen King"
   year: { "GT": 1976 }
})
`;
export const Hero = () => {
  return (
    <FeatureContainer className={"min-h-[100vh] sm:min-h-[100vh] pt-32"}>
      <div className={cx("z-10 relative flex flex-col gap-12")}>
        {/*<ColoredChip*/}
        {/*  color="purple"*/}
        {/*  style={{ rotate: 20 }}*/}
        {/*  whileHover={{ rotate: 14 }}*/}
        {/*  className={cx(*/}
        {/*    "absolute",*/}
        {/*    "top-[-50px] right-[300px]",*/}
        {/*    "md:top-[-30px] md:right-[20px]",*/}
        {/*    "md:hidden",*/}
        {/*  )}*/}
        {/*>*/}
        {/*  instantly*/}
        {/*</ColoredChip>*/}
        {/*<ColoredChip*/}
        {/*  style={{ rotate: 5 }}*/}
        {/*  color="purple"*/}
        {/*  className={cx("mb-8 md:inline-flex hidden")}*/}
        {/*>*/}
        {/*  instantly*/}
        {/*</ColoredChip>*/}

        {/*<h2 className={cx("typography-4xl")}>*/}
        {/*  Turn any data*/}
        {/*  <br />*/}
        {/*  into powerful <span className="text-accent-yellow">API</span>s*/}
        {/*</h2>*/}

        {/*<p className={cx("typography-base mb-8 max-w-2xl ")}>*/}
        {/*  <span className="font-bold text-content-primary-dark">*/}
        {/*    Zero-code database*/}
        {/*  </span>{" "}*/}
        {/*  to build apps ridiculously fast. It comes with integrated{" "}*/}
        {/*  <span className="font-bold text-content-primary-dark">*/}
        {/*    file storage*/}
        {/*  </span>*/}
        {/*  , limitless{" "}*/}
        {/*  <span className="font-bold text-content-primary-dark">*/}
        {/*    data nesting*/}
        {/*  </span>{" "}*/}
        {/*  and enhanced with{" "}*/}
        {/*  <span className="font-bold text-content-primary-dark">*/}
        {/*    dynamic endpoints*/}
        {/*  </span>*/}
        {/*  .*/}
        {/*</p>*/}

        {/*<code className="z-10 text-sm inline-flex text-left items-center space-x-4 bg-[#1d1d1d] text-content-secondary-dark rounded-lg py-4 px-6 justify-self-center mb-8 sm:hidden">*/}
        {/*  <span className="flex gap-4">*/}
        {/*    <span className="shrink-0 text-accent-red">$</span>*/}
        {/*    <span className="flex-1">*/}
        {/*      <span>npm install </span>*/}
        {/*      <span className="text-base-white">*/}
        {/*        @collect.so/javascript-sdk*/}
        {/*      </span>*/}
        {/*      <span> --save</span>*/}
        {/*    </span>*/}
        {/*  </span>*/}
        {/*</code>*/}

        <h2 className={cx("typography-4xl mb-0 font-special")}>
          <span className="text-accent-yellow">Instant</span> backend
          <br /> for your next <span className="text-accent-red">SaaS</span>
          {/*<span className="text-accent-blue">Bot</span> /{" "}*/}
          {/*<span className="text-accent-green">App</span>*/}
        </h2>

        <div
          className={
            "grid grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-4 max-w-[70vw] m-auto sm:max-w-full"
          }
        >
          <CodeBlock
            code={code2}
            className={
              "justify-self-end sm:justify-self-center w-full sm:text-[14px]"
            }
          />
          <CodeBlock
            code={code3}
            className={
              "justify-self-start sm:justify-self-center w-full sm:text-[14px]"
            }
          />
        </div>

        <p
          className={cx("typography-lg max-w-2xl text-content-secondary-dark")}
        >
          Store and retrieve{" "}
          <span className="font-medium text-content-primary-dark">
            any data
          </span>{" "}
          with{" "}
          <span className="font-medium text-content-primary-dark">
            automated normalization
          </span>{" "}
          <br className="sm:hidden" />
          and{" "}
          <span className="font-medium text-content-primary-dark">
            instantly generated APIs
          </span>
        </p>

        <div className={"flex gap-8 justify-center"}>
          <Link href="https://docs.collect.so/">
            <OutlineButton>
              Docs
              <Book />
            </OutlineButton>
          </Link>
          {/*<JoinWaitlistButton />*/}

          <Link href="https://app.collect.so/signup">
            <Button>
              Get Started
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </FeatureContainer>
  );
};
