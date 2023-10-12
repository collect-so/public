import { bool } from "prop-types";

export type TPresentFeature = {
  type?: "present";
  title: string;
  caption?: string;
};

export type TComingFeature = {
  type: "coming";
  title: string;
  caption?: string;
};

export type TSubscriptionPlan = {
  annualPrice: number;
  monthPrice: number;
  name: string;
  period: string;
  buttonText: string;
  buttonLink: string;
  general: TPresentFeature[];
  features?: Array<TPresentFeature | TComingFeature>;
  featured?: boolean;
  isFree?: boolean;
  isCustom?: boolean;
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

export const plans: TSubscriptionPlan[] = [
  {
    name: "starter",
    annualPrice: 0,
    monthPrice: 0,
    period: "Forever",
    buttonText: "Get Started",
    buttonLink: "https://app.collect.so/signup",
    featured: false,
    isFree: true,
    general: [
      {
        title: "3 Projects",
      },
      {
        title: "1.000 Records",
        caption: "Per Project",
      },
      // {
      //   title: "30 Magic Fields",
      // },
      {
        title: "2 GB File Storage",
        caption: "Up to 5mb per file",
      },
      // {
      //   title: "Single-tenant architecture",
      // },
      // {
      //   title: "Manual backups",
      // },
      {
        title: "Community support",
      },
    ],
    // features: [
    //   sdks,
    //   rest,
    //   nesting,
    //   files,
    //   valueTypes,
    //   onboarding,
    //   {
    //     title: "1 API token",
    //   },
    //   {
    //     title: "3 developer seats",
    //   },
    //   // automations,
    //   // dataImport,
    //   // realtime,
    //   // graphql,
    // ],
  },
  {
    name: "PRO",
    annualPrice: 11.99,
    monthPrice: 19.99,
    period: "Monthly",
    buttonText: "Get Started",
    buttonLink: "https://app.collect.so/signup",
    featured: true,
    general: [
      {
        title: "Unlimited projects",
      },
      {
        title: "100.000 Records",
        caption: "Next 1.000 Records for $0.19",
      },
      // {
      //   title: "100 Magic Fields",
      //   caption: "Next 10 Magic Fields for $0.69",
      // },
      {
        title: "Connect own S3",
        // caption: "Next 10 GB for $0.99",
      },
      // {
      //   title: "Multi-tenant architecture",
      // },
      // {
      //   title: "Biweekly backups",
      // },
      {
        title: "Dedicated support",
      },
    ],

    // features: [
    //   sdks,
    //   rest,
    //   nesting,
    //   files,
    //   valueTypes,
    //   onboarding,
    //   {
    //     title: "Unlimited API tokens",
    //   },
    //   {
    //     title: "Unlimited developers seats",
    //   },
    //   automations,
    //   dataImport,
    //   realtime,
    //   graphql,
    //   webhooks,
    //   regions,
    //   gpt,
    // ],
  },
  {
    name: "CUSTOM",
    annualPrice: 0,
    monthPrice: 0,
    period: "custom",
    buttonText: "Schedule a call",
    buttonLink: "https://app.collect.so/signup",
    featured: false,
    isCustom: true,
    general: [
      {
        title: "Unlimited projects",
      },
      {
        title: "Unlimited Records",
      },
      // {
      //   title: "Unlimited Magic Fields",
      // },
      // {
      //   title: "Multi-tenant architecture",
      // },
      {
        title: "On-premises deployment",
      },
      // {
      //   title: "Daily backups",
      // },
      {
        title: "Priority support",
      },
      // {
      //   title: "White labeling",
      // },
    ],
    // features: [
    //   sdks,
    //   rest,
    //   nesting,
    //   files,
    //   valueTypes,
    //   onboarding,
    //   {
    //     title: "Unlimited API tokens",
    //   },
    //   {
    //     title: "Unlimited developers seats",
    //   },
    //   automations,
    //   dataImport,
    //   realtime,
    //   graphql,
    //   webhooks,
    //   regions,
    //   gpt,
    //   { title: "SSO" },
    //   {
    //     type: "coming",
    //     title: "Granular access control",
    //   },
    //   {
    //     type: "coming",
    //     title: "Custom endpoints",
    //   },
    //   {
    //     type: "coming",
    //     title: "Cloud functions",
    //   },
    //   {
    //     type: "coming",
    //     title: "Media files optimizations",
    //   },
    // ],
  },
];
