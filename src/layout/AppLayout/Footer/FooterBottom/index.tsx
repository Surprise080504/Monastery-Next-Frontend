import React from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  FooterOut,
  FooterLogoImg,
  MiddleText,
  Right,
  Terms,
} from "./Footer.style";
const FooterContainer = () => {
  return (
    <FooterOut>
      <FooterLogoImg src="img/logo.png" alt="" draggable={false} />
      <Right>
        <Terms>Terms of Use</Terms>
        <Terms>Privacy Policy</Terms>
        <Terms>Contact</Terms>
      </Right>
      <MiddleText>© 2022 Monastery. All Rights Reserved</MiddleText>
    </FooterOut>
  );
};
export default FooterContainer;
