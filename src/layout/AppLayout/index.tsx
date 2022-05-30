import React, { ReactNode, useEffect } from "react";
// layout
import Footer from "./Footer";
// styled components
import { LayoutWrapper } from "./AppLayout.style";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
// -----------------------------------------------------------

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    AOS.init({ duration: 1500 });
    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <LayoutWrapper>
      {children}
      {router.pathname !== "/gallery" &&
        router.pathname !== "/privacy" &&
        router.pathname !== "/terms" && <Footer />}
    </LayoutWrapper>
  );
};

export default Layout;
