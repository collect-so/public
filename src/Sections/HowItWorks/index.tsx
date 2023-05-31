import { CodeBlock } from "~/components/codeblock";
import { Section } from "~/components/section";

export function HowItWorksSection() {
  return (
    <Section data-theme="dark" className="py-24 mx-auto max-w-6xl px-5">
      <h2 className="pb-24 text-3xl font-extrabold text-content-primary-dark sm:text-2xl tracking-tight  sm:leading-[2.5rem] mx-auto text-center">
        How It Works
      </h2>
      <div className="sticky top-0 flex items-start gap-4">
        {/* 50% - nav height */}
        <div className="sticky top-[calc(50%-100px)] flex-1 h-full flex items-center max-w-md">
          <h3 className="text-xl leading-snug font-medium text-content-primary-dark">
            Push <span className="font-bold text-accent-brand">any data</span>{" "}
            to Collect API and get it{" "}
            <span className="font-bold text-accent-red">
              automatically organized
            </span>{" "}
            and <span className="font-bold text-accent-purple">accessible</span>{" "}
            with SDK. Or throughout dynamically built Endpoints.
          </h3>
        </div>
        <div className="flex-[1.5] max-w-xl">
          <CodeBlock
            code={`// Just push whatever you need to be saved:
const booking = await CollectSDK.create(
  // New Record Label:
  "booking", 
  // New Record Data:
  { 
    startDate: "2023-04-15T12:00:00Z",
    endDate: "2023-04-20T12:00:00Z",
    guestsCount: 4,
    info: {
      // Nested Record
      // with Label “info”
      // and Data:
      message: "We will arrive slightly earlier. At 11AM."
    }
  }
)`}
          />

          <CodeBlock
            code={`// Link with existing Record:
await booking.link("property", {
  id: "ec5bbf01d821498391683bbf01",
})
`}
          />

          <CodeBlock
            code={`// Now you able to create, read,
// update and delete those Data:
await booking.update("booking", {
  ...booking.data,
  // Add extra Data
  withPet: true,
})
`}
          />

          <CodeBlock
            code={`// Or achieve the same by using Endpoints:
const bookingEndpoint = "/api/v1/label/booking"
const propertyEndpoint = "/api/v1/label/property"
`}
          />
        </div>
      </div>
    </Section>
  );
}
