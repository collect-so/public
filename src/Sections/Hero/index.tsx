import { Section } from "~/components/section";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";
import cx from "classnames";
import { CodeBlock } from "~/components/codeblock";
import { Badge } from "~/components/badge";

const TextGradient = {
  background: "linear-gradient(281deg, #FF0099, #EC7E19)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
};

const Code = `// Job you do
const record = await CollectSDK
  .save("booking", {  // New record
    startDate: "2023-04-15T12:00:00Z",
    endDate: "2023-04-20T12:00:00Z"
  })
  .link("property", { // Existing record
    _id: "ec5bbf01d821498391683bbf01"
  })
  
// What you get
// 1. Endpoints to work with: 
const bookingEndpoint = "/api/v1/records/booking"
const propertyEndpoint = "/api/v1/records/property"

// 2. Recognition of record types "booking" and "property":
const booking = await CollectSDK.get("booking", {...})
const property = await CollectSDK.update("property", {...})`;

export function HeroSection() {
  return (
    <>
      <Section
        className="min-h-[80vh] mt-[100px] md:mt-[60px] grid place-content-center"
        data-theme="light"
      >
        <div
          className={cx(
            "md:container lg:max-w-7xl lg:w-full md:py-20 lg:px-8",
            "text-left grid grid-cols-[3fr_2fr] gap-8 items-center",
            "md:text-center md:grid-rows-2 md:grid md:grid-cols-1",
          )}
        >
          <div
            className={cx(
              "grid gap-4 justify-items-start center relative",
              "md:justify-items-center md:order-2 md:row-span-2",
            )}
          >
            <h2 className="text-3xl font-bold  text-content-primary-light sm:text-2xl tracking-tight leading-[3.5rem] sm:leading-[2.5rem]">
              Turn <span className="text-accent-red">ideas</span> into
              <br className="md:hidden" /> fast and reliable{" "}
              <span className="text-accent-brand">API</span>s
            </h2>
            <p className="text-xl sm:text-base font-medium text-content-secondary-light sm:text-base tracking-tight">
              Collect Platform is your low-code swiss-knife{" "}
              <br className="md:hidden" /> to <b>get things done</b> without any
              hassle
            </p>
            <div className="flex gap-4 sm:hidden flex-wrap">
              <Badge className="bg-background-dark">Built for people</Badge>
              <Badge className="bg-background-dark">Powered by graphs</Badge>
              <Badge className="bg-background-dark">Enhanced by AI</Badge>
            </div>
            <JoinWaitlistButton className="mt-8 sm:hidden" />
          </div>
          <div className="md:row-span-1 md:order-2 grid gap-4">
            <CodeBlock code={Code} className=" md:relative left-0 " />
          </div>
        </div>
      </Section>
    </>
  );
}
