import { ComponentPropsWithoutRef, ReactNode, useState } from "react";
import {
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "~/components/Section";
import cx from "classnames";
import { CodeBlock } from "~/components/CodeBlock";
import { LetterTypingText } from "~/components/LetterTypingText";

const examples = ["API", "SDK", "Dashboard"] as const;

const chipVariants = {
  yellow: "border-accent-yellow text-accent-yellow",
  blue: "border-accent-blue text-accent-blue",
  red: "border-accent-red text-accent-red",
  purple: "border-accent-purple text-accent-purple",
  orange: "border-accent-orange text-accent-orange",
};

const Chip = ({
  variant = "yellow",
  ...props
}: ComponentPropsWithoutRef<"h4"> & {
  variant: keyof typeof chipVariants;
}) => (
  <h4
    className={cx(
      "rounded-full border px-2 uppercase text-xs font-mono",
      chipVariants[variant],
    )}
    {...props}
  />
);

function UsageScenario({
  title,
  description,
  subtitle,
  example,
}: {
  title: ReactNode;
  subtitle: ReactNode;
  description: ReactNode;
  example: ReactNode;
}) {
  return (
    <div className="min-h-[500px] py-10 grid grid-cols-2 content-start justify-items-center gap-10">
      <div className="flex flex-col items-start col-span-1 pt-16 gap-3 justify-self-start">
        {subtitle}

        {typeof title === "string" ? (
          <LetterTypingText as="h3" className="typography-xl" animateInView>
            {title}
          </LetterTypingText>
        ) : (
          <h3 className="typography-xl">{title}</h3>
        )}

        <p className="typography-base text-content2">{description}</p>
      </div>

      {example}
    </div>
  );
}

const Option = ({
  className,
  selected,
  ...props
}: ComponentPropsWithoutRef<"button"> & { selected?: boolean }) => {
  return (
    <button
      className={cx(
        "px-5 h-[44px] rounded-xl transition-colors",
        selected
          ? "bg-accent text-accent-contrast hover:bg-accent-hover font-semibold"
          : "text-content hover:bg-secondary font-medium",
        className,
      )}
      {...props}
    />
  );
};

// Every app starts with Create, Read, Update, Delete (CRUD). Collect lets you define and modify your data entries with ease. Just add your data, and start building from there.

const scenarios = [
  {
    title: "Quick Data Entry and Bulk Imports",
    description:
      "Whether you're crafting individual records or importing millions, do it in milliseconds. Your data’s format doesn’t constrain you; Collect adapts to it, paving the way for immediate building.",
    subtitle: <Chip variant="purple">Create</Chip>,
    // cta: "Learn About Data Import",
    examples: {
      Dashboard: (
        <div
          className="relative w-full aspect-video"
          // style={{ perspective: "100px" }}
        >
          <video
            className="absolute inset-0 w-full aspect-video object-contain hover:opacity-50 cursor-pointer rounded-lg border-[5px] border-stroke-dark/10 bg-fill shadow-2xl"
            // style={{ transform: "rotateY(-1deg)" }}
            width="1920  "
            height="1072"
            preload="none"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/create.mov" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
      SDK: (
        <div className="flex flex-col gap-3">
          <CodeBlock
            code={`const user = await Collect.save("user", {
    name: "Wolfgang Bogdanov"
  )`}
          />
          <CodeBlock
            code={`const user = await Collect.save("user", {
    name: "Wolfgang Bogdanov"
  )`}
          />
          <CodeBlock
            code={`const user = await Collect.save("user", {
    name: "Wolfgang Bogdanov"
  )`}
          />
        </div>
      ),
      API: <></>,
    },
  },
  {
    title: "Tailored Data Fetching",
    description:
      "Seamlessly fetch a specific entry or filter through complex datasets—all within 50ms. Collect also supports queries for related and nested data, ensuring comprehensive access for your application's needs",
    subtitle: <Chip variant="blue">Read</Chip>,
    cta: "Explore Collect's Filtering System",
    examples: {
      Dashboard: <></>,
      SDK: <></>,
      API: <></>,
    },
  },
  {
    title: "Update Records and Manage Transactions",
    description:
      "Apply changes to multiple records at once using our SearchDto, or target individual records. For complex changes, our transaction feature safeguards your data’s consistency and reliability, making intricate updates straightforward.",
    subtitle: <Chip variant="orange">Update</Chip>,
    cta: "Master Updates & Transactions",
    examples: {
      Dashboard: <></>,
      SDK: <></>,
      API: <></>,
    },
  },
  {
    title: "Safely Remove Data",
    description:
      "Collect offers a secure way to delete data, whether you're removing a single record or clearing multiple entries. Utilize our detailed criteria for targeted deletions, ensuring only the intended data is removed, while our transaction system provides an extra layer of safety for bulk operations.",
    subtitle: <Chip variant="red">Delete</Chip>,
    cta: "Explore Safe Deletion Practices",
    examples: {
      Dashboard: <></>,
      SDK: <></>,
      API: <></>,
    },
  },
];

export function WorkflowSection() {
  const [currentExample, setCurrentExample] =
    useState<(typeof examples)[number]>("SDK");

  return (
    <Section className="container">
      <SectionHeader>
        <SectionTitle>Transform Your Workflow</SectionTitle>{" "}
        <SectionSubtitle>
          Discover how Collect seamlessly integrates into your development
          process, adapting to your needs through Dashboard, API, or SDK.
          Whether you're creating data, managing projects, or integrating
          complex systems, explore usage scenarios that highlight Collect's
          versatility in action.
          {/* 
          (Every app starts with Create, Read, Update, Delete (CRUD). Collect
          lets you define and modify your data entries with ease. Just add your
          data, and start building from there.) */}
        </SectionSubtitle>
      </SectionHeader>

      <div className="relative">
        <div className="divide-y divide-stroke-dark">
          {scenarios.map(({ title, description, subtitle, examples }) => (
            <UsageScenario
              title={title}
              description={description}
              key={title}
              example={examples[currentExample]}
              subtitle={subtitle}
            />
          ))}
        </div>

        <div className="bottom-0 sticky pb-6 grid grid-cols-2">
          <div className="bg-fill/40 backdrop-blur-sm shadow-2xl border border-stroke-dark p-1 rounded-2xl w-full col-start-2 grid grid-cols-3">
            {examples.map((example) => (
              <Option
                key={example}
                onClick={() => {
                  setCurrentExample(example);
                }}
                selected={example === currentExample}
              >
                {example}
              </Option>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
