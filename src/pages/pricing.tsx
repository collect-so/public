import { Layout } from "~/components/Layout";

import { Pricing } from "~/sections/Pricing";

export default function PricingPage() {
  return (
    <Layout title="Pricing">
      <div className="min-h-screen">
        <Pricing />
      </div>
    </Layout>
  );
}
