import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { Top, SubMenu, WorldWhere } from "views/Main";
const Home: NextPage = () => {
  return (
    <>
      <SEO title="Monastery" description="this is home page" />
      <Top />
      <SubMenu />
      <WorldWhere />
    </>
  );
};

export default Home;
