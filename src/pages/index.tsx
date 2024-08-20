import { Layout } from "~/components/Layout"
import { FeaturesCards } from "~/sections/FeaturesCards"
import { Hero } from "~/sections/Hero"
import { WorkflowSection } from "~/sections/Workflow"
import { CommunitySection } from "~/sections/Community"
import { Pricing } from "~/sections/Pricing"
import {CodingSample} from "~/sections/CodingSample";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <div className="relative z-10">
        <FeaturesCards />

        <WorkflowSection />

        {/* <BenchmarksSection /> */}
        <CodingSample />
        <CommunitySection />

        <Pricing />
      </div>
    </Layout>
  )
}
