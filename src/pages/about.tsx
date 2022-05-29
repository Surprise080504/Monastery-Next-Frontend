import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { Downfull, Full, Abouttitle } from "views/About";
const About: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is About page" />
      <Abouttitle />
      <Full />
      <Downfull />
    </>
  );
};

export default About;
