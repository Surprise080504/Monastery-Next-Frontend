import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { ClientsView } from "views/Clients";
const Clients: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is Clients page" />
      <ClientsView />
    </>
  );
};

export default Clients;
