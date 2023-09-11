import { Section } from "~/components/section";
import cx from "classnames";
import { useObservedSize } from "~/components/hooks/useResizeObserver";
import { Background } from "~/components/background";
import { BlinkingRecords } from "~/Sections/Hero/blinking-records";
import { FlatAndNestedData } from "~/Sections/Hero/flat-and-nested-data";
import { FlexibleDataTypes } from "~/Sections/Hero/flexible-data-types";
import { FileStorage } from "~/Sections/Hero/file-storage";
import { DynamicApis } from "~/Sections/Hero/dynamic-apis";
import { FeaturesTitle } from "~/Sections/Hero/features-title";
import { ZeroCodeDb } from "~/Sections/Hero/zero-code-db";
import { Hero } from "~/Sections/Hero/hero";
import { DataProcessing } from "~/Sections/Hero/data-processing";

export function HeroSection() {
  const { ref, size } = useObservedSize<HTMLElement>();

  return (
    <>
      <Section ref={ref} className={cx("overflow-hidden")} data-theme="dark">
        {size ? <Background target={ref} targetHeight={size.height} /> : null}
        <Hero />
        <FeaturesTitle />
        <FlexibleDataTypes />
        <ZeroCodeDb />
        <DynamicApis />
        <FileStorage />
        <FlatAndNestedData />
        <BlinkingRecords />
        <DataProcessing />
      </Section>
    </>
  );
}
