import cx from "classnames";
import { CodeBlock } from "~/components/codeblock";
import { FeatureContainer } from "~/components/feature-container";

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
  name: "Bruce Wayne" // Own properties criteria
},
{
  city: {  
    name: "Gotham" // Related data criteria
  } 
})

await person.update({
  ...person.data,
  // Add new properties instantly
  status: "missing",
  born: "1915-04-07T06:00:00Z",
  verified: true
})
`;

// @TOOD: Rewrite (zero-code backend)
export const ZeroCodeDb = () => {
  return (
    <FeatureContainer>
      <div className={cx("z-10 mb-8")}>
        <div className={cx("feature-tag")}>Feature</div>
        <h2 className={cx("typography-3xl mb-4 font-special")}>
          Zero-code database
        </h2>
        <p className="typography-base max-w-2xl ">
          Skip migrations, skip model configuration, skip JOINs. Focus on what
          is really important, not on the tools that help you get there.
        </p>
      </div>
      <div className={cx("grid grid-cols-2 z-10 gap-16", "md:grid-cols-1")}>
        <div className={cx("grid grid-rows-[1fr_auto]")}>
          <div className={"mb-8"}>
            <h2 className={cx("typography-2xl mb-4 font-special")}>
              Properties
            </h2>
            <p className="typography-base max-w-2xl ">
              Magic Fields automatically interconnect data with common
              properties like color or size. Search and filter data across the
              project, even if the Records are diverse in nature.
            </p>
          </div>
          <CodeBlock className="rounded-md md:m-auto" code={MagicFields} />
        </div>

        <div className={cx("grid grid-rows-[1fr_auto]")}>
          <div className={"mb-8"}>
            <h2 className={cx("typography-2xl mb-4")}>No migrations, No *QL</h2>
            <p className="typography-base max-w-2xl ">
              Modify your data models in real-time. Effortlessly add, update, or
              delete fields without lengthy deployments, and free up developers
              for more critical tasks.
            </p>
          </div>
          <CodeBlock className="rounded-md md:m-auto " code={NoMigrations} />
        </div>
      </div>
    </FeatureContainer>
  );
};
