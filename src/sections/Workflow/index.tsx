import { ComponentPropsWithoutRef, useRef, useState } from "react";
import {
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "~/components/Section";
import cx from "classnames";
import { CodeBlock } from "~/components/CodeBlock";
import { Chip } from "~/components/Chip";
import { VideoBlock } from "~/sections/Workflow/VideoBlock";
import { UsageScenario } from "~/sections/Workflow/UsageExample";
import { CodeWrapper } from "~/sections/Workflow/CodeWrapper";

const examples = ["API", "SDK", "Dashboard"] as const;

const initializeCodeBlock = `// Simple as that
const Collect = new CollectSDK("API_TOKEN")`;

const initializeApiCodeBlock = `curl 'https://api.collect.so/api/v1/...' \\
  -H 'Content-Type: application/json' \\
  -H "Token: $API_TOKEN" \\
  -d '...' \\
`;

const initializeApiFetchCodeBlock = `fetch("https://api.collect.so/api/v1/...", {
  "headers": {
    "Content-Type": "application/json",
    "Token": "API_TOKEN",
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

//
const createApiCodeBlock = `curl 
  -X POST 'https://api.collect.so/api/v1/records' \\
  -H 'Content-Type: application/json' \\
  -H "Token: $API_TOKEN" \\
  -d '{
    "label": "USER",
    "properties": {
      "email": {
        "type": "string",
        "value": "paul.schmitz@mail.com"
      },
      "name": {
        "type": "string",
        "value": "Paul Schmitz"
      },
      "age": {
        "type": "number",
        "value": 47
      }
    }
  }'`;

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

//

const basicSearchApiCodeBlock = `curl 
  -X POST 'https://api.collect.so/api/v1/records/search' \\
  -H 'Content-Type: application/json' \\
  -H "Token: $API_TOKEN" \\
  -d '{
    "labels": ["CUSTOMER"],
    "where": {
      "createdAt": {
        "$gte": { 
          "$year": 2021,
          "$month": 6
        }
      },
      "name": {
        "$startsWith": "P"
      }
    },
    "orderBy": { 
      "balance": "asc" 
    }
  }'`;

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

//

const transactionalAndSafeApiCodeBlock = `#!/bin/bash

# Obtain a Transaction
response=$(
  curl -X POST 'https://api.collect.so/api/v1/tx' \\
  -H 'Content-Type: application/json' \\
  -H "Token: $API_TOKEN" \\
  -d '{}'
)

# Extract an id from Transaction response
TX_ID=$(echo "$response" | jq -r '.id')

# Attach Transaction id to further requests
curl 'https://api.collect.so/api/v1/...' \\
  -H 'Content-Type: application/json' \\
  -H "Token: $API_TOKEN" \\
  -H "X-Transaction-Id: $TX_ID" \\
  -d '...'
  
# Commit Transaction
curl
  -X POST "https://api.collect.so/api/v1/tx/$TX_ID/commit" \\
  -H 'Content-Type: application/json' \\
  -H "Token: $API_TOKEN" \\
  -d '{}'
`;

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

//

const deleteComplexApiCodeBlock = `curl 
  -X DELETE 'https://api.collect.so/api/v1/records' \\
  -H 'Content-Type: application/json' \\
  -H "Token: $API_TOKEN" \\
  -d '{
    "labels": ["COMMENT"],
    "where": {
      "text": {
        "$in": [ "^*%&#", "@#*%&#", "$#@&&%" ]
      },
      "USER": {
        "email": "rude.troll@mail.com"
      }
    }
  }'`;

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
      Dashboard: <VideoBlock src="/videos/setup.mp4" />,
      SDK: (
        <CodeWrapper>
          <CodeBlock code={initializeCodeBlock} />
          <CodeBlock code={definingModelCodeBlock} />
        </CodeWrapper>
      ),
      API: (
        <CodeWrapper>
          <CodeBlock language="bash" code={initializeApiCodeBlock} />
          <CodeBlock code={initializeApiFetchCodeBlock} />
        </CodeWrapper>
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
      Dashboard: <VideoBlock src="/videos/create.mp4" />,
      SDK: (
        <CodeWrapper>
          <CodeBlock code={createCodeBlock} />
          <CodeBlock code={createManyCodeBlock} />
        </CodeWrapper>
      ),
      API: (
        <CodeWrapper>
          <CodeBlock language="bash" code={createApiCodeBlock} />
        </CodeWrapper>
      ),
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
      Dashboard: <VideoBlock src="/videos/search.mp4" />,
      SDK: (
        <CodeWrapper>
          <CodeBlock code={basicSearchCodeBlock} />
          <CodeBlock code={relatedSearchCodeBlock} />
        </CodeWrapper>
      ),
      API: (
        <CodeWrapper>
          <CodeBlock language="bash" code={basicSearchApiCodeBlock} />
        </CodeWrapper>
      ),
    },
  },
  {
    title: "Designed to be Transactional & Safe",
    description:
      "Having a CRUD is obvious. For complex changes, Collect's transaction feature safeguards data’s consistency and reliability, making intricate updates straightforward and predictable.",
    subtitle: <Chip variant="orange">Update</Chip>,
    cta: "Master Updates & Transactions",
    examples: {
      Dashboard: (
        <CodeWrapper className="aspect-[16/10] w-full bg-fill2 rounded-2xl grid place-content-center text-content3 text-lg">
          Coming Soon
        </CodeWrapper>
      ),
      SDK: (
        <CodeWrapper>
          <CodeBlock code={transactionalAndSafeCodeBlock} />
        </CodeWrapper>
      ),
      API: (
        <CodeWrapper>
          <CodeBlock language="bash" code={transactionalAndSafeApiCodeBlock} />
        </CodeWrapper>
      ),
    },
  },
  {
    title: "Deleting is Not That Boring, Too",
    description:
      "Like most other operations, deletion also relies on the same API. It allows data to be wiped out precisely based on specific criteria.",
    subtitle: <Chip variant="red">Delete</Chip>,
    cta: "Explore Safe Deletion Practices",
    examples: {
      Dashboard: <VideoBlock src="/videos/delete.mp4" />,
      SDK: (
        <CodeWrapper>
          <CodeBlock code={deleteComplexCodeBlock} />
        </CodeWrapper>
      ),
      API: (
        <CodeWrapper>
          <CodeBlock language="bash" code={deleteComplexApiCodeBlock} />
        </CodeWrapper>
      ),
    },
  },
];

export function WorkflowSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);

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

      <div className="relative" ref={wrapperRef}>
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
                  wrapperRef.current?.scrollIntoView({
                    behavior: "smooth",
                  });
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
