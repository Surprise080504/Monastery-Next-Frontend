import React from "react";
import { useRouter } from "next/router";
import {
  FooterOut,
  FooterLogoImg,
  MiddleText,
  Right,
  Terms,
} from "./Footer.style";
const FooterContainer = () => {
  const router = useRouter();
  return (
    <FooterOut>
      <FooterLogoImg
        src="img/logo.png"
        alt=""
        draggable={false}
        onClick={() => router.push("/")}
      />
      <Right>
        <Terms onClick={() => router.push("/terms")}>Terms of Use</Terms>
        <Terms onClick={() => router.push("/privacy")}>Privacy Policy</Terms>
        <Terms onClick={() => router.push("/contact")}>Contact</Terms>
      </Right>
      <MiddleText>© 2022 Monastery. All Rights Reserved</MiddleText>
    </FooterOut>
  );
};
export default FooterContainer;
