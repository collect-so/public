import { Layout } from "~/components/Layout";
import { FeaturesCards } from "~/Sections/FeaturesCards";
import { Hero } from "~/Sections/Hero";
import { WorkflowSection } from "~/Sections/Workflow";
import { CommunitySection } from "~/Sections/Community";
import { Pricing } from "~/Sections/Pricing";

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
