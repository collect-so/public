import {
  TComingFeature,
  TPresentFeature,
  TTSubscritionPlan,
  plans,
} from "./data";
import { Section } from "~/components/section";
import cx from "classnames";
import { Check, Disc } from "lucide-react";
import { Badge } from "~/components/badge";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";

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
      <h4 className="mb-4">{title}</h4>
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
        "flex flex-col justify-center px-4 text-center py-8 gap-[14px]",
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
        <h3
          className={cx(
            "text-4xl leading-none uppercase tracking-tight font-special",
            {
              "text-content-primary-dark": true,
            },
          )}
        >
          {plan.price}
        </h3>
        <span className="text-sm capitalize">{plan.period}</span>
      </div>
      <JoinWaitlistButton outline={plan.name !== "TEAM"} />
      <span className="text-sm leading-snug font-bold">{plan.description}</span>
    </div>
  );
}

function PricingCard({ plan, idx }: { plan: TTSubscritionPlan; idx: number }) {
  return (
    <div
      className={cx("flex flex-col rounded-lg border-[3px]", {
        "text-content-primary-dark bg-background-dark": true,
        "mt-8 md:mt-0": idx !== 1,
        "pt-8 md:pt-0": idx === 1,
        "border-accent-red": plan.borderColor === "red",
        "border-accent-brand": plan.borderColor === "brand",
        "border-accent-blue": plan.borderColor === "lightblue",
      })}
    >
      <PriceBlock plan={plan} />
      <div
        className={cx("flex flex-col gap-6 p-6", {
          "text-content-primary-dark": true,
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
    <Section className="" id="pricing" data-theme={"dark"}>
      <div className=" container">
        <h2 className="text-3xl font-extrabold mb-32 text-content-primary-dark md:text-2xl text-center tracking-tight">
          Pricing
        </h2>
      </div>
      <div className="px-5 max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-1 items-start justify-center gap-5">
        {plans.map((plan, idx) => (
          <PricingCard plan={plan} key={plan.name} idx={idx} />
        ))}
      </div>
    </Section>
  );
}
