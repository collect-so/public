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
import { DynamicApis } from "~/Sections/Hero/dynamic-apis";

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
const style1 = {
  boxShadow:
    "-4px 4px 0px 0px #cbee4c, -8px 8px 0px 0px #9b51e0, -12px 12px 0px 0px #ff6b6b",
};

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
            <h2 className={cx("typography-4xl")}>
              Turn <span className="text-accent-red">any data</span>
              <br />
              <span className="text-accent-yellow">into</span> powerful{" "}
              <span className="text-accent-blue">API</span>s
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
          <div className={cx("z-10 mb-8")}>
            <h2
              className={cx(
                "typography-4xl pb-60 underline decoration-accent-brand decoration-wavy decoration-[8px] underline-offset-[24px]",
              )}
            >
              Features
            </h2>

            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl mb-4")}>Zero-code database</h2>
            <p className="typography-base">
              Skip migrations, skip model configuration, skip JOINs. Focus on
              what is really important, not on the tools that help you get
              there.
            </p>
          </div>
          <div className={cx("grid grid-cols-2 z-10 gap-16", "md:grid-cols-1")}>
            <div className={cx("grid grid-rows-[1fr_auto]")}>
              <div className={"mb-8"}>
                <h2 className={cx("typography-3xl mb-4")}>Magic Fields</h2>
                <p className="typography-base">
                  Magic Fields automatically interconnect data with common
                  properties like color or size. Search and filter data across
                  the project, even if the Records are diverse in nature.
                </p>
              </div>
              <CodeBlock className="rounded-md md:m-auto" code={MagicFields} />
            </div>

            <div className={cx("grid grid-rows-[1fr_auto]")}>
              <div className={"mb-8"}>
                <h2 className={cx("typography-3xl mb-4")}>
                  No migrations, No *QL
                </h2>
                <p className="typography-base">
                  Modify your data models in real-time. Effortlessly add,
                  update, or delete fields without lengthy deployments, and free
                  up developers for more critical tasks.
                </p>
              </div>
              <CodeBlock
                className="rounded-md md:m-auto "
                code={NoMigrations}
              />
            </div>
          </div>
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <div className={"mb-8"}>
              <div className={cx("feature-tag")}>Feature</div>
              <h2 className={cx("typography-3xl mb-4")}>Dynamic APIs</h2>
              <p className="typography-base">
                Simply label what you push to Collect and retrieve it all using
                the automatically assigned "labeled" endpoint.
              </p>
            </div>
            <DynamicApis />
          </div>
        </div>

        {/**/}

        <div className={cx("feature-container")}>
          <div className={cx("z-10")}>
            <div className={cx("feature-tag")}>Feature</div>
            <h2 className={cx("typography-3xl mb-4")}>File storage</h2>
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
            <h2 className={cx("typography-3xl mb-4")}>
              Data types auto-detection
            </h2>
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

            <h2 className={cx("typography-3xl mb-4")}>Data nesting</h2>
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
            <h2 className={cx("typography-3xl mb-4")}>
              Data linking and retrieval
            </h2>
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
            <h2 className={cx("typography-3xl mb-4")}>Data processing</h2>
          </div>
          <div className={cx("grid grid-cols-3 z-10 gap-16")}>
            <div>
              <h2 className={cx("typography-3xl mb-4")}>Importing</h2>
              <p className="typography-base">
                Import your data with lightning speed. Up to 3000 records in
                less than 1 second.
              </p>
            </div>

            <div>
              <h2 className={cx("typography-3xl mb-4")}>Bulk operations</h2>
              <p className="typography-base">
                Process and normalize your data without writing a single line of
                code with dashboard.
              </p>
            </div>

            <div>
              <h2 className={cx("typography-3xl mb-4")}>Exporting</h2>
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
