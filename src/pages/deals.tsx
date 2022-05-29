import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { DealsView } from "views/Deals";
const Deals: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is Deals page" />
      <DealsView />
    </>
  );
};

export default Deals;
