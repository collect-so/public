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
  green: "border-accent-green text-accent-green",
  blue: "border-accent-blue text-accent-blue",
  red: "border-accent-red text-accent-red",
  purple: "border-accent-purple text-accent-purple",
  orange: "border-accent-orange text-accent-orange",
};

const initializeCodeBlock = `// Simple as that
const Collect = new CollectAPI("API_TOKEN")`;

const initializeApiCodeBlock = `curl 'https://api.collect.so' \\
  -H 'Content-Type: application/json' \\
  -H 'Token: API_TOKEN' \\
  -H ... \\
`;

const initializeApiFetchCodeBlock = `fetch("https://api.collect.so", {
  "headers": {
    "content-type": "application/json",
    "token": "API_TOKEN",
    ...
  }
});`;

const definingModelCodeBlock = `// Optionally define Models 
const UserModel = new CollectModel("USER", {
  name: { type: 'string' },
  email: { type: 'string', uniq: true },
  age: { type: 'number', required: false },
  permissions: { type: 'string', multiple: true },
  createdAt: { 
    type: 'datetime',
    default: new Date().toISOString 
  }
})

const UserRepo = Collect.registerModel(UserModel)`;

const createCodeBlock = `// Create single Record
const user = await UserRepo.create({
  email: "paul.schmitz@mail.com",
  name: "Paul Schmitz",
  age: 47
})`;

const createManyCodeBlock = `// Create multiple Records at once
const catalog = await Collect.records.createMany(
  "CATEGORY", 
  [
    {
      title: "Sports and Travel",
      sidebarOrder: 5
      
      // Related Records
      PRODUCT: [
        {
          name: "Portable Gas Stove"
          price: 65
        },
        {
          name: "Sleeping Bag XL"
          price: 29
        },
      ]
    }
  ]
)`;

const basicSearchCodeBlock = `// Basic search 
const customers = await CustomerRepo.find({
  where: {
    createdAt: {
      $gte: { 
        $year: 2021,
        $month: 6
      }
    },
    name: {
      $startsWith: "P"
    }
  },
  orderBy: { balance: "asc" }
})`;

const relatedSearchCodeBlock = `// Related search 
const orders = await OrderRepo.find({
  where: {
    sum: { $gt: 641 },
    PRODUCT: {
      brand: "Apple",
      CATEGORY: {
        title: "Accessories"
      }
    }
  }
})`;

const transactionalAndSafeCodeBlock = `// Start Transaction
const tx = await Collect.tx.begin() 

try {
  const order = await OrderRepo.create(
    {...},
    tx  // <-- Transaction
  )
  
  const merchant = await MerchantRepo.findOne(
    {...},
    tx // <-- Transaction
  )
  
  const { balance } = merchant.data
  await merchant.update(
    {
      balance: balance + order.data.sum
    }, 
    tx // <-- Transaction
  )
  
  // Commit Transaction
  await tx.commit() 
} catch (error) {
  
  // Rollback Transaction if error occurred
  await tx.rollback() 
}
`;

const deleteComplexCodeBlock = `// Delete Records based on complex criteria 
await CommentsRepo.delete({
  where: {
    text: {
      $in: [ "^*%&#", "@#*%&#", "$#@&&%" ]
    },
    USER: {
      email: "rude.troll@mail.com"
    }
  }
})`;

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
    <div className="min-h-[500px] py-10 grid grid-cols-2 content-start justify-items-center gap-10 md:grid-cols-1">
      <div className="flex flex-col items-start col-span-1 pt-16 gap-3 justify-self-start sm:pt-0">
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
        "px-5 h-[44px] rounded-xl transition-colors sm:px-0 sm:text-[14px]",
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
    title: "Whole API in a Single Line",
    description:
      "Obtain an API Token through the Dashboard and you're good to go. Optionally, define Models to benefit from automated type inference. Collect is designed to process data of any shape.",
    subtitle: <Chip variant="purple">Setup</Chip>,
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
          <CodeBlock code={initializeCodeBlock} />
          <CodeBlock code={definingModelCodeBlock} />
        </div>
      ),
      API: (
        <div className="flex flex-col gap-3">
          <CodeBlock code={initializeApiCodeBlock} />
          <CodeBlock code={initializeApiFetchCodeBlock} />
        </div>
      ),
    },
  },
  {
    title: "Instant Records Creation",
    description:
      "Whether you're pushing a single Record or importing thousands of them, do it in milliseconds. Your data’s shape doesn’t constrain you because Collect adapts to it on the fly.",
    subtitle: <Chip variant="yellow">Create</Chip>,
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
          <CodeBlock code={createCodeBlock} />
          <CodeBlock code={createManyCodeBlock} />
        </div>
      ),
      API: <></>,
    },
  },
  {
    title: "Ultimately Powerful Search",
    description: (
      <>
        Precisely fetch any piece of data regardless of its complexity. Thanks
        to graph architecture and algos behind. Build complex queries
        effortlessly using Related Search capabilities, <code>$AND</code>,{" "}
        <code>$OR</code>,<code>$NOT</code>, <code>$XOR</code> operators and
        others.
      </>
    ),
    subtitle: <Chip variant="green">Read</Chip>,
    cta: "Explore Collect's Filtering System",
    examples: {
      Dashboard: <></>,
      SDK: (
        <div className="flex flex-col gap-3">
          <CodeBlock code={basicSearchCodeBlock} />
          <CodeBlock code={relatedSearchCodeBlock} />
        </div>
      ),
      API: <></>,
    },
  },
  {
    title: "Designed to be Transactional & Safe",
    description:
      "Having a CRUD is obvious. For complex changes, Collect's transaction feature safeguards data’s consistency and reliability, making intricate updates straightforward and predictable.",
    subtitle: <Chip variant="orange">Update</Chip>,
    cta: "Master Updates & Transactions",
    examples: {
      Dashboard: <></>,
      SDK: (
        <div className="flex flex-col gap-3">
          <CodeBlock code={transactionalAndSafeCodeBlock} />
        </div>
      ),
      API: <></>,
    },
  },
  {
    title: "Deleting is Not That Boring Too",
    description:
      "Like most other operations, Deletion also relies on the same API. It allows data to be wiped out precisely based on specific criteria.",
    subtitle: <Chip variant="red">Delete</Chip>,
    cta: "Explore Safe Deletion Practices",
    examples: {
      Dashboard: <></>,
      SDK: (
        <div className="flex flex-col gap-3">
          <CodeBlock code={deleteComplexCodeBlock} />
        </div>
      ),
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
          Collect aims to make development completely routine-free. Whether
          you've just started or are already working on something big, Collect
          seamlessly integrates into your existing development process. It
          adapts to your needs through the Dashboard, APIs, and SDKs.
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

        <div className="bottom-0 sticky pb-6 grid grid-cols-2 md:grid-cols-1">
          <div className="bg-fill/40 backdrop-blur-sm shadow-2xl border border-stroke-dark p-1 rounded-2xl w-full col-start-2 grid grid-cols-3 md:col-start-1 sm:px-0">
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
