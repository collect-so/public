import { Section } from "~/components/section";
import cx from "classnames";

import { useObservedSize } from "~/components/hooks/useResizeObserver";

import { Background } from "~/components/background";
import { ColoredChip } from "~/components/colored-chip";
import { BlinkingRecords } from "~/Sections/Hero/blinking-records";
import { FlatAndNestedData } from "~/Sections/Hero/flat-and-nested-data";
import { FlexibleDataTypes } from "~/Sections/Hero/flexible-data-types";
import { CodeBlock } from "~/components/codeblock";
import { FileStorage } from "~/Sections/Hero/file-storage";

const MagicFields = `const person = await CollectSDK.save("person", {
  // Magic Field "name"
  name: "Bruce Wayne",
  // Magic Field "location"
  location: "40.7485, -73.9857"
})

const vehicle = await CollectSDK.save("vehicle", {
  // Existing Magic Field "name"
  name: "Batmobile",
  // Existing Magic Field "location"
  location: "40.8602, -73.9014",
  // Magic Field "color"
  color: ["black", "darkgray"],
  ...
})
`;

const NoMigrations = `const person = await CollectSDK.find("person", {
  // Own properties criteria
  name: "Bruce Wayne"
},
{ 
  // Related data criteria
  live_in: "Gotham" 
})

// Add new properties instantly
await person.update({
  ...person.data,
  status: "missing",
  born: "1915-04-07T06:00:00Z",
  verified: true
})
`;

export function HeroSection() {
  const { ref, size } = useObservedSize<HTMLElement>();

  return (
    <>
      <Section ref={ref} className={cx("overflow-hidden")} data-theme="dark">
        {size ? <Background target={ref} targetHeight={size.height} /> : null}
        <div className={cx("feature-container")}>
          <div className={cx("z-10 relative")}>
            <ColoredChip
              color="purple"
              style={{ rotate: 20 }}
              whileHover={{ rotate: 14 }}
              className={cx(
                "absolute",
                "top-[-70px] right-[85px]",
                "md:top-[-30px] md:right-[20px]",
                " md:hidden",
              )}
            >
              instantly
            </ColoredChip>
            <ColoredChip
              style={{ rotate: 5 }}
              color="purple"
              className={cx("mb-8 md:inline-flex hidden")}
            >
              instantly
            </ColoredChip>

            {/*<h2 className={cx("typography-4xl")}>*/}
            {/*  Build powerful <span className="text-accent-brand">API</span>s*/}
            {/*  <br />*/}
            {/*  like never before*/}
            {/*</h2>*/}
            <h2 className={cx("typography-4xl")}>
              Turn <span className="text-accent-red">any data</span>
              <br />
              into powerful <span className="text-accent-brand">API</span>s
            </h2>

            <p className={cx("typography-base")}>
              <span className="font-bold text-content-primary-dark">
                Zero-code database
              </span>{" "}
              to build apps ridiculously fast. It comes with integrated{" "}
              <span className="font-bold text-content-primary-dark">
                file storage
              </span>
              , limitless{" "}
              <span className="font-bold text-content-primary-dark">
                data nesting
              </span>{" "}
              and enhanced with{" "}
              <span className="font-bold text-content-primary-dark">
                dynamic endpoints
              </span>
              .
            </p>
          </div>
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <h2
              className={cx(
                "typography-4xl pb-60 underline decoration-accent-brand decoration-wavy decoration-[8px] underline-offset-[24px]",
              )}
            >
              Features
            </h2>
            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl")}>Zero-code database</h2>
            <p className="typography-base">
              Skip migrations, skip model configuration, skip JOINs. Focus on
              what is really important, not on the tools that help you get
              there.
            </p>
          </div>
          <div className={cx("grid grid-cols-2 z-10 gap-16", "md:grid-cols-1")}>
            <div>
              <h2 className={cx("typography-2xl")}>Magic Fields</h2>
              <p className="typography-base">
                Magic Fields automatically interconnect data with common
                properties like color or size. Search and filter data across the
                project, even if the Records are diverse in nature.
              </p>
              <CodeBlock
                className="rounded-md p-8 md:max-w-xl m-auto"
                code={MagicFields}
              />
            </div>

            <div>
              <h2 className={cx("typography-2xl")}>No migrations, No *QL</h2>
              <p className="typography-base">
                Modify your data models in real-time. Effortlessly add, update,
                or delete fields without lengthy deployments, and free up
                developers for more critical tasks.
              </p>
              <CodeBlock
                className="rounded-md p-8 md:max-w-xl m-auto"
                code={NoMigrations}
              />
            </div>
          </div>
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl")}>Dynamic APIs</h2>
            <p className="typography-base">
              Simply label what you push to Collect and retrieve it all using
              the automatically assigned "labeled" endpoint.
            </p>
          </div>
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl")}>File storage</h2>
            <p className="typography-base">
              Create a structured file storage tailored to your requirements .
              Benefit from easily accessible, dependable, and customizable
              storage for binary data.
            </p>
          </div>
          <FileStorage />
        </div>

        {/**/}

        <div className={cx("feature-container")} id="features">
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl")}>Data types auto-detection</h2>
            <p className="typography-base">
              Ensure that anything you push to Collect is appropriately arranged
              and securely stored.
            </p>
          </div>
          <FlexibleDataTypes />
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>

            <h2 className={cx("typography-3xl")}>Data nesting</h2>
            <p className="typography-base">
              Simply store any data the way you think about it. Give more sense
              to your data with natively nested storage.
            </p>
          </div>
          <FlatAndNestedData />
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl")}>Data linking and retrieval</h2>
            <p className="typography-base">
              Build complex scenarios in a matter of double-digit minutes.
              Retrieve data the way you need it.
            </p>
          </div>
          <BlinkingRecords />
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl")}>Data processing</h2>
          </div>
          <div className={cx("grid grid-cols-3 z-10 gap-16")}>
            <div>
              <h2 className={cx("typography-2xl")}>Importing</h2>
              <p className="typography-base">
                Import your data with lightning speed. Up to 3000 records in
                less than 1 second.
              </p>
            </div>

            <div>
              <h2 className={cx("typography-2xl")}>Bulk operations</h2>
              <p className="typography-base">
                Process and normalize your data without writing a single line of
                code with dashboard.
              </p>
            </div>

            <div>
              <h2 className={cx("typography-2xl")}>Exporting</h2>
              <p className="typography-base">
                Need your data elsewhere? Export it all.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
