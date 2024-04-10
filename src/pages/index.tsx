import { Layout } from "~/components/Layout";

import { Hero } from "~/sections/Hero";
import { FeaturesCards } from "~/sections/FeaturesCards";
import { WorkflowSection } from "~/sections/Workflow";
import { CommunitySection } from "~/sections/Community";
import { Pricing } from "~/sections/Pricing";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <div className="relative z-10">
        <FeaturesCards />

        <WorkflowSection />

        {/* <BenchmarksSection /> */}

        <CommunitySection />

        <Pricing />
      </div>
    </Layout>
  );
}
