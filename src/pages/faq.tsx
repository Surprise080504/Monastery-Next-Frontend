import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { FAQView } from "views/FAQ";
const FAQ: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is FAQ page" />
      <FAQView />
    </>
  );
};

export default FAQ;
