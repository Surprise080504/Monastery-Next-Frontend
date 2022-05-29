import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { ApplicantView } from "views/Applicant";
const Applications: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is Applications page" />
      <ApplicantView />
    </>
  );
};

export default Applications;
