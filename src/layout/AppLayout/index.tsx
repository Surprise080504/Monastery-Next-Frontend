import React, { ReactNode } from "react";
// layout
import Footer from "./Footer";
// styled components
import { LayoutWrapper } from "./AppLayout.style";
import { useRouter } from "next/router";
// -----------------------------------------------------------

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  return (
    <LayoutWrapper>
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
