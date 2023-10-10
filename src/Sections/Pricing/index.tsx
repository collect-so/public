import {
  TComingFeature,
  TPresentFeature,
  TSubscriptionPlan,
  plans,
} from "./data";
import { Section } from "~/components/section";
import cx from "classnames";
import { Check, Disc } from "lucide-react";
import { Badge } from "~/components/badge";
import { JoinWaitlistButton } from "~/components/joinwaitlist-button";
import { useCycle } from "framer-motion";
import { Switch } from "~/components/switch";
import { Button, OutlineButton } from "~/components/button";

function PlanFeature({
  feature: { type, title, caption },
}: {
  feature: TPresentFeature | TComingFeature;
}) {
  const icon = type === "coming" ? <Disc size={16} /> : <Check size={16} />;

  return (
    <li className="mb-4 font-medium">
      <div className="flex gap-2 items-center text-base">
        {icon}
        {title}
        {type === "coming" && <Badge>SOON</Badge>}
      </div>

      <span className="pl-6 text-sm text-content-secondary-dark ">
        {caption}
      </span>
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
      {/*<h4 className="mb-4">{title}</h4>*/}
      <ul className="grid ">
        {features.map((feat) => (
          <PlanFeature feature={feat} key={feat.title} />
        ))}
      </ul>
    </div>
  );
}

function PriceBlock({
  plan,
  mode,
}: {
  plan: TSubscriptionPlan;
  mode: "monthly" | "annually";
}) {
  const ButtonComponent = plan.isFree || plan.isCustom ? OutlineButton : Button;
  return (
    <div
      className={cx(
        "flex flex-col justify-center px-4 text-center py-8 gap-[14px]",
      )}
    >
      <div className="flex flex-col gap-1 font-bold leading-snug  mb-4">
        <span
          className={cx(`text-sm uppercase`, {
            "text-accent-blue": plan.featured,
          })}
        >
          {plan.name}
        </span>
        <h3
          className={cx(
            "text-3xl leading-none uppercase tracking-tight font-special",
            {
              "text-content-primary-dark": true,
            },
            // {
            //   "line-through decoration-accent-red":
            //     !plan.isCustom &&
            //     !plan.isFree &&
            //     plan.annualPrice &&
            //     plan.monthPrice,
            // },
          )}
        >
          {plan.isCustom
            ? "Let's talk"
            : plan.isFree
            ? "FREE"
            : mode === "annually"
            ? `$${plan.annualPrice}`
            : `$${plan.monthPrice}`}
        </h3>
        <span className="text-sm">
          <span className="capitalize">{plan.period}</span>{" "}
          {!plan.isCustom && !plan.isFree ? "per Project" : null}
        </span>
      </div>
      {/*<JoinWaitlistButton outline={plan.name !== "PRO"} />*/}
      <ButtonComponent>{plan.buttonText}</ButtonComponent>
      {/*<span className="text-sm leading-snug font-bold">{plan.description}</span>*/}
    </div>
  );
}

function PricingCard({
  plan,
  idx,
  mode,
}: {
  plan: TSubscriptionPlan;
  idx: number;
  mode: "monthly" | "annually";
}) {
  return (
    <div
      className={cx("flex flex-col rounded-2xl border-2", {
        "text-content-primary-dark bg-background-dark": true,
        "mt-8 md:mt-0": idx !== 1,
        "pt-8 md:pt-0": idx === 1,
        "border-accent-yellow": plan.featured,
        "border-stroke-dark": !plan.featured,
      })}
    >
      <PriceBlock plan={plan} mode={mode} />
      <div
        className={cx("flex flex-col gap-6 px-6", {
          "text-content-primary-dark": true,
        })}
      >
        <PlanFeatureList title="General" features={plan.general} />
        {plan.features?.length ? (
          <PlanFeatureList title="Features" features={plan.features} />
        ) : null}
      </div>
    </div>
  );
}

export function PricingSection() {
  const [mode, cycleMode] = useCycle<"monthly" | "annually">(
    "annually",
    "monthly",
  );
  return (
    <Section className="" id="pricing" data-theme={"dark"}>
      <div className="py-[25vh]">
        <div className="container text-center mb-16">
          <h2 className="typography-3xl font-special">Pricing</h2>
        </div>
        <div className="grid grid-cols-3 place-items-center mb-16 z-10 relative z-10 justify-center max-w-sm m-auto">
          <p
            className={cx(
              "justify-self-end",
              "font-medium text-content-secondary-dark tracking-tight ",
              "text-base",
            )}
          >
            Monthly
          </p>
          <Switch onChange={() => cycleMode()} checked={mode === "annually"} />
          <p
            className={cx(
              "justify-self-start",
              "font-medium text-content-secondary-dark tracking-tight ",
              "text-base",
            )}
          >
            Yearly
          </p>
        </div>

        <div className="px-5 max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-1 items-start justify-center gap-4">
          {plans.map((plan, idx) => (
            <PricingCard plan={plan} key={plan.name} idx={idx} mode={mode} />
          ))}
        </div>
      </div>
    </Section>
  );
}
