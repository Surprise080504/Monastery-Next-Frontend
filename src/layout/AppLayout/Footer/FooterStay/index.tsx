import React from "react";
import Checkbox from "@mui/material/Checkbox";
import CustomButton from "component/CustomBtn";
import { FaDiscord, FaSteam } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import {
  FooterOut,
  Title,
  FooterBody,
  Left,
  MiddleImg,
  Right,
  LeftTitle,
  LeftText,
  LeftSocials,
  Footery,
  RightTitle,
  RightText,
  SubscribePart,
  CheckPart,
  RedGradient,
  ScribeInputContainer,
  ScribeInput,
} from "./Footer.style";
const FooterContainer = () => {
  return (
    <FooterOut>
      <RedGradient />
      <FooterBody>
        <Title>Stay up to date!</Title>
        <Footery>
          <Left>
            <LeftTitle>Join our community!</LeftTitle>
            <LeftText>
              Follow us on social media for exciting updates and sneak peeks!
            </LeftText>
            <LeftSocials>
              <FaDiscord className="socials" />
              <BsFacebook className="socials" />
              <BsTwitter className="socials" />
              <BsYoutube className="socials" />
              <FaSteam className="socials" />
            </LeftSocials>
          </Left>
          <MiddleImg src="img/stayupman.png" alt="" draggable={false} />
          <Right>
            <RightTitle>Subscribe to our newsletter!</RightTitle>
            <RightText>
              Be among the first who receives good news about the release. Do
              not miss your chance to the early access!
            </RightText>
            <SubscribePart>
              <ScribeInputContainer>
                <ScribeInput
                  type="text"
                  placeholder="Enter your email address"
                />
              </ScribeInputContainer>
              <CustomButton text="Subscribe" />
            </SubscribePart>
            <CheckPart>
              <Checkbox />
              <span>
                You agree to receive our Monastery newsletter. You may withdraw
                your consent at any time. For further information please check
                out our privacy policy.
              </span>
            </CheckPart>
          </Right>
        </Footery>
      </FooterBody>
    </FooterOut>
  );
};
export default FooterContainer;
