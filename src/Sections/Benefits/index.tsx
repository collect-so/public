import Image from "next/image";

import { TBenefit, benefits } from "./data";
import { Section } from "~/components/section";

function BenefitCard({ benefit }: { benefit: TBenefit }) {
  return (
    <figure className="p-2 max-w-md">
      <Image
        width={200}
        height={200}
        src={benefit.imageSrc}
        alt=""
        className="w-[200px] h-[200px] mb-10"
      />
      <figcaption>
        <h4 className="text-2xl text-content-primary-light font-bold mb-2 leading-snug">
          {benefit.title}
        </h4>
        <p className="text-base text-content-secondary-light font-medium">
          {benefit.subtitle}
        </p>
      </figcaption>
    </figure>
  );
}

export function BenefitsSection() {
  return (
    <Section className="pb-[20vh] container">
      <h2 className="text-3xl font-bold text-content-primary-light md:text-2xl text-center mb-[20vh]">
        Build backend <strong className="text-accent-brand">in days</strong> not
        in months
      </h2>
      <div className="grid place-items-center grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-20 sm:gap-10">
        {benefits.map((benefit, idx) => (
          <BenefitCard key={`benefit-${idx}`} benefit={benefit} />
        ))}
      </div>
    </Section>
  );
}
