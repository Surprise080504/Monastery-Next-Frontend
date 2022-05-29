import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { NewApplicantView } from "views/NewApplicant";
const NewApplicant: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is NewApplicant page" />
      <NewApplicantView />
    </>
  );
};

export default NewApplicant;
