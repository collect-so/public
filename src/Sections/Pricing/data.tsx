export type TPresentFeature = {
  type?: "present";
  title: string;
};

export type TComingFeature = {
  type: "coming";
  title: string;
};

export type TTSubscritionPlan = {
  price: string;
  name: string;
  period: string;
  description: string;
  general: TPresentFeature[];
  features: Array<TPresentFeature | TComingFeature>;
  nameColor: "yellow" | "blue" | "green";
  borderColor: "lightblue" | "brand" | "red";
};

const sdks: TPresentFeature = {
  title: "SDKs",
};

const rest: TPresentFeature = {
  title: "REST API",
};

const nesting: TPresentFeature = {
  title: "Data nesting",
};

const files: TPresentFeature = {
  title: "File storage",
};

const valueTypes: TPresentFeature = {
  title: "All value types",
};

const onboarding: TPresentFeature = {
  title: "Technical onboarding",
};

const automations: TComingFeature = {
  title: "Automations",
  type: "coming",
};

const dataImport: TComingFeature = {
  type: "coming",
  title: "Data import",
};

const realtime: TComingFeature = {
  type: "coming",
  title: "Realtime",
};

const graphql: TComingFeature = {
  type: "coming",
  title: "GraphQL API",
};

const webhooks: TComingFeature = {
  type: "coming",
  title: "Webhooks",
};

const regions: TComingFeature = {
  type: "coming",
  title: "Regions",
};

const gpt: TComingFeature = {
  type: "coming",
  title: "ChatGPT integration",
};

export const plans: TTSubscritionPlan[] = [
  {
    name: "free",
    price: "FREE",
    period: "Forever",
    description: "Most suitable for tiny projects",
    borderColor: "lightblue",
    nameColor: "yellow",
    general: [
      {
        title: "1 Project",
      },
      {
        title: "1.000 Records",
      },
      {
        title: "50 Magic Fields",
      },
      {
        title: "5 GB File Storage",
      },
    ],
    features: [
      sdks,
      rest,
      nesting,
      files,
      valueTypes,
      onboarding,
      {
        title: "1 API token",
      },
      {
        title: "3 developer seats",
      },
      automations,
      dataImport,
      realtime,
      graphql,
    ],
  },
  {
    name: "TEAM",
    price: "$249",
    period: "Monthly",
    description: "Your cloud backend teammate",
    borderColor: "brand",
    nameColor: "blue",
    general: [
      {
        title: "3 Projects",
      },
      {
        title: "100.000 Records",
      },
      {
        title: "100 Magic Fields",
      },
      {
        title: "500 GB File Storage",
      },
    ],
    features: [
      sdks,
      rest,
      nesting,
      files,
      valueTypes,
      onboarding,
      {
        title: "Unlimited API tokens",
      },
      {
        title: "Unlimited developers seats",
      },
      automations,
      dataImport,
      realtime,
      graphql,
      webhooks,
      regions,
      gpt,
    ],
  },
  {
    name: "BUSINESS",
    price: "$499",
    period: "Monthly",
    description: "For bigger products",
    nameColor: "green",
    borderColor: "red",
    general: [
      {
        title: "10 Projects",
      },
      {
        title: "1.000.000 Records",
      },
      {
        title: "500 Magic Fields",
      },
      {
        title: "2.000 GB File Storage",
      },
    ],
    features: [
      sdks,
      rest,
      nesting,
      files,
      valueTypes,
      onboarding,
      {
        title: "Unlimited API tokens",
      },
      {
        title: "Unlimited developers seats",
      },
      automations,
      dataImport,
      realtime,
      graphql,
      webhooks,
      regions,
      gpt,
      { title: "SSO" },
      {
        type: "coming",
        title: "Granular access control",
      },
      {
        type: "coming",
        title: "Custom endpoints",
      },
      {
        type: "coming",
        title: "Cloud functions",
      },
      {
        type: "coming",
        title: "Media files optimizations",
      },
    ],
  },
];
