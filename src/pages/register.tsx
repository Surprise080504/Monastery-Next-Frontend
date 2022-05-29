import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { RegisterView } from "views/Register";
const Register: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is Register page" />
      <RegisterView />
    </>
  );
};

export default Register;
