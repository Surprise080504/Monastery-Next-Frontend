import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { LoginView } from "views/Login";
const Login: NextPage = () => {
  return (
    <>
      <SEO title="Underwiterfy" description="this is Login page" />
      <LoginView />
    </>
  );
};

export default Login;
