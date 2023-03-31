import { Section } from "@common/section";

export function DevsSection() {
  return (
    <Section
      className="min-h-screen mt-[70px] md:mt-[60px] grid place-content-center"
      data-theme="dark"
    >
      <div className="container">
        <div className="basis-1/1 text-center">
          <h2 className="text-3xl font-bold mb-8 text-content-primary-dark md:text-2xl">
            Batteries included
          </h2>
          <h4 className="text-xl font-medium text-content-secondary-dark">
            Seamless developer experience and streamlined workflow{" "}
            <br className="sm:hidden" /> enables your team focus on features,
            not on tech debt and bugs.
          </h4>
        </div>
        <div className="basis-1/1 text-center">
          <h2 className="text-3xl font-bold mb-8 text-content-primary-dark md:text-2xl">
            Magic Fields
          </h2>
          <h4 className="text-xl font-medium text-content-secondary-dark">
            Magic Fields automatically interconnect data entities with common
            properties like color or size. This facilitates efficient searching
            and filtering of data across your store, even if the entities are
            diverse in nature.
          </h4>
        </div>
      </div>
    </Section>
  );
}
