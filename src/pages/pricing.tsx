import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { PricingView } from "views/Pricing";
const Pricing: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is Pricing page" />
      <PricingView />
    </>
  );
};

export default Pricing;
