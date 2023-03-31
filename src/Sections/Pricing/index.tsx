import { Button } from "~/components/button";
import {
  TComingFeature,
  TPresentFeature,
  TTSubscritionPlan,
  plans,
} from "./data";
import { Section } from "~/components/section";
import cx from "classnames";
import { Check, Disc } from "lucide-react";
import { ReactNode } from "react";

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex px-2 py-0.5 text-[14px] font-extrabold leading-normal rounded-[4px] bg-accent-brand text-base-white">
      {children}
    </div>
  );
}

function PlanFeature({
  feature: { type, title },
}: {
  feature: TPresentFeature | TComingFeature;
}) {
  const icon = type === "coming" ? <Disc size={16} /> : <Check size={16} />;

  return (
    <li className="flex gap-2 items-center font-medium">
      {icon}
      {title}
      {type === "coming" && <Badge>SOON</Badge>}
    </li>
  );
}

function PlanFeatureList({
  title,
  features,
}: {
  title: string;
  features: Array<TPresentFeature | TComingFeature>;
}) {
  return (
    <div className={cx("text-sm font-bold")}>
      <h6 className="mb-4">{title}</h6>
      <ul className="flex flex-col gap-[10px]">
        {features.map((feat) => (
          <PlanFeature feature={feat} key={feat.title} />
        ))}
      </ul>
    </div>
  );
}

function PriceBlock({ plan }: { plan: TTSubscritionPlan }) {
  return (
    <div
      className={cx(
        "flex flex-col justify-center px-4 text-center py-8 gap-[14px] border-b",
        {
          "border-stroke-light": plan.variant === "light",
          "border-stroke-dark": plan.variant === "dark",
        },
      )}
    >
      <div className="flex flex-col gap-1 font-bold leading-snug">
        <span
          className={cx(`text-sm uppercase`, {
            "text-accent-blue": plan.nameColor === "blue",
            "text-accent-green": plan.nameColor === "green",
            "text-accent-yellow": plan.nameColor === "yellow",
          })}
        >
          {plan.name}
        </span>
        <h4
          className={cx("text-4xl leading-none uppercase", {
            "text-content-primary-light": plan.variant === "light",
            "text-content-primary-dark": plan.variant === "dark",
          })}
        >
          {plan.price}
        </h4>
        <span className="text-sm capitalize">{plan.period}</span>
      </div>
      <Button>Join Waitlist</Button>
      <span className="text-sm leading-snug font-bold">{plan.description}</span>
    </div>
  );
}

function PricingCard({ plan }: { plan: TTSubscritionPlan }) {
  const { variant } = plan;

  return (
    <div
      className={cx("flex flex-col rounded-lg ", {
        "text-content-secondary-light bg-base-white border-stroke-light border border-b-2":
          variant === "light",
        "text-content-primary-dark bg-background-dark": variant === "dark",
      })}
    >
      <PriceBlock plan={plan} />
      <div
        className={cx("flex flex-col gap-6 p-6", {
          "text-content-primary-light": variant === "light",
          "text-content-primary-dark": variant === "dark",
        })}
      >
        <PlanFeatureList title="General" features={plan.general} />
        <PlanFeatureList title="Features" features={plan.features} />
      </div>
    </div>
  );
}

export function PricingSection() {
  return (
    <Section className="py-32">
      <h2 className="container text-3xl font-bold text-content-primary-light md:text-2xl text-center mb-24">
        Pricing
      </h2>
      <div className="px-5 max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-1 items-start justify-center gap-5">
        {plans.map((plan) => (
          <PricingCard plan={plan} key={plan.name} />
        ))}
      </div>
    </Section>
  );
}