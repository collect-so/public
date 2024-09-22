const email = "hello@collect.so" as const

const emailUrl = `mailto:${email}` as const

export const socials = {
  discord: "https://discord.gg/bdjTEybp",
  github: "https://github.com/collect-so",
  email,
  emailUrl,
  x: "https://twitter.com/CollectAPI",
  linkedIn: "https://www.linkedin.com/company/collect-so/",
  blog: "/blog",
} as const

export const links = {
  docs: "https://docs.collect.so",
  getStarted: "https://docs.collect.so/quick-start/installation",
  tutorials: "https://docs.collect.so",
  pricing: "/pricing",
  app: "https://app.collect.so",
  appPricing: "https://app.collect.so/pricing",
  contactUs: "mailto:hello@collect.so",
} as const
