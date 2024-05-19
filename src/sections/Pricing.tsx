import { useState } from "react"
import {
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "~/components/Section"

import { ComponentPropsWithoutRef, FunctionComponent, ReactNode } from "react"
import cx from "classnames"
import { Button } from "~/components/Button"
import { ArrowUpRight, CalendarCheck, Check, Github } from "lucide-react"

import Link from "next/link"
import { links, socials } from "~/config/urls"
import { Tab, Tabs, TabsList } from "~/components/Tabs"

function Feat({ title, subtitle }: { title: ReactNode; subtitle?: ReactNode }) {
  return (
    <li className="py-3 text-start">
      <div>
        <span className="text-start text-base font-medium">
          <Check className="w-4 h-4 shrink-0 mr-3" />

          {title}
        </span>
      </div>

      {subtitle && (
        <div className="pl-7 text-content2 text-sm text-start">{subtitle}</div>
      )}
    </li>
  )
}

function PricingCard({
  title,
  description,
  action,
  className,
  price,
  children,
  featured,
  ...props
}: ComponentPropsWithoutRef<"div"> & {
  title?: ReactNode
  description: ReactNode
  action: ReactNode
  price?: number | "free"
  featured?: boolean
}) {
  return (
    <article
      className={cx(
        "flex flex-col items-center text-center bg-secondary rounded-xl first:rounded-l-3xl last:rounded-r-3xl [&:first-child>div]:rounded-l-[20px] [&:last-child>div]:rounded-r-[20px] shadow-lg p-1 sm:!rounded-xl",
        featured
          ? "bg-gradient-to-br from-accent-hover to-accent-orange"
          : "bg-secondary",
        className,
      )}
      {...props}
    >
      <div
        className={cx(
          "flex h-full w-full flex-col items-center rounded-lg p-5 sm:!rounded-lg",
          featured ? "bg-fill" : "bg-secondary",
        )}
      >
        <h3 className="font-bold typography-sm h-5">{title}</h3>

        <span className="font-bold typography-2xl uppercase">
          {price !== "free" && price !== undefined && "$"}
          {price ?? "Custom"}
        </span>

        <p className="mb-3 text-content2">{description}</p>

        <div className="grid w-full">{action}</div>

        <ul className="flex flex-col w-full mt-5 divide-y">{children}</ul>
      </div>
    </article>
  )
}

enum Variants {
  Cloud = "cloud",
  OnPremise = "on-premise",
}

export function Pricing() {
  const [variant, setVariant] = useState<Variants>(Variants.Cloud)

  return (
    <Section className="container">
      <SectionHeader>
        <SectionTitle className="max-w-3xl">Pricing for everyone</SectionTitle>

        {/*<Tabs onValueChange={(v) => setVariant(v as Variants)} value={variant}>*/}
        {/*  <TabsList>*/}
        {/*    <Tab value={Variants.Cloud}>Cloud</Tab>*/}
        {/*    <Tab value={Variants.OnPremise}>On-Premise</Tab>*/}
        {/*  </TabsList>*/}
        {/*</Tabs>*/}

        <SectionSubtitle>
          {variant === Variants.Cloud &&
            "Choose Collect's cloud platform for a straightforward start to your projects. It's ready to use immediately, eliminating the need for initial configurations and ongoing infrastructure management. Suitable for developers of any skill level, this option allows you to concentrate fully on development, with scalability to match your project's growth. Discover our cloud pricing plans for a solution that simplifies your workflow from the outset."}
          {variant === Variants.OnPremise &&
            "Our on-premise solution caters to developers and teams requiring tailored data management setups. It provides the control necessary for custom configurations while still offering a quick setup process. If your project demands specific handling or integration within your existing infrastructure, explore our on-premise pricing to see how Collect can align with your unique requirements."}
        </SectionSubtitle>
      </SectionHeader>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-3">
        {variant === Variants.Cloud && (
          <>
            <PricingCard
              price="free"
              description="Forever"
              action={
                <Button
                  size="small"
                  variant="secondary"
                  as={Link}
                  href={links.appPricing}
                >
                  Start Building
                  <ArrowUpRight />
                </Button>
              }
            >
              <Feat title="3 projects" />
              <Feat title="1000 Records" />
              <Feat title="Up to 10 API requests per second" />
              <Feat title="1Gb File Storage" />
              <Feat title="Community Support" />
            </PricingCard>
            <PricingCard
              price={5}
              featured
              title="Pro"
              description="Monthly"
              action={
                <Button
                  size="small"
                  variant="accent"
                  as={Link}
                  href={links.appPricing}
                >
                  Start Building
                  <ArrowUpRight />
                </Button>
              }
            >
              <Feat title="Unlimited Projects" />
              <Feat
                title="100.000 Records"
                subtitle="then $1 per 10.000 Records"
              />
              <Feat title="Unlimited API requests" />
              <Feat title="10Gb File Storage" />
              <Feat title="Dedicated Support" />
            </PricingCard>
            <PricingCard
              title="Business"
              description="Contact sales"
              action={
                <Button
                  size="small"
                  variant="primary"
                  as={Link}
                  href={links.introMeeting}
                >
                  Set up a call
                  <CalendarCheck />
                </Button>
              }
            >
              <Feat title="Unlimited Everything" />
              <Feat title="Whitelabeling & Customizations" />
              <Feat
                title="On-premises deployment"
                subtitle="Lifetime updates on demand"
              />
              <Feat title="Own S3 Storage" />
              <Feat title="Priority support" />
            </PricingCard>
          </>
        )}

        {/*{variant === Variants.OnPremise && (*/}
        {/*  <PricingCard*/}
        {/*    price="free"*/}
        {/*    title="Self-Hosted"*/}
        {/*    description="Forever"*/}
        {/*    action={*/}
        {/*      <Button*/}
        {/*        size="small"*/}
        {/*        variant="primary"*/}
        {/*        as={Link}*/}
        {/*        href={socials.github}*/}
        {/*      >*/}
        {/*        Join Github*/}
        {/*        <ArrowUpRight />*/}
        {/*      </Button>*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <Feat title="Unlimited Projects" />*/}
        {/*    <Feat*/}
        {/*      title="100.000 Records"*/}
        {/*      subtitle="then $1 per 10.000 Records"*/}
        {/*    />*/}
        {/*    <Feat*/}
        {/*      title="Every extra 100.000 records for $5"*/}
        {/*      subtitle="Additional usage-based Records at $0.19 per 1000 Records"*/}
        {/*    />*/}
        {/*    <Feat title="10Gb File Storage" />*/}
        {/*    <Feat title="Dedicated Support" />*/}
        {/*  </PricingCard>*/}
        {/*)}*/}
      </div>
    </Section>
  )
}
