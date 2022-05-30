import React from "react";
import Header from "layout/AppLayout/Header";
import Checkbox from "@mui/material/Checkbox";
import CustomButton from "component/CustomBtn";
import {
  Top,
  HomeTop,
  Title,
  ContactContainer,
  ContactImg,
  ContactRight,
  DoTitle,
  CustomInput,
  ContactBody,
  CustomTextarea,
  CheckPart,
} from "./income.style";
const AboutPage = () => {
  return (
    <Top>
      <Header />
      <HomeTop>
        <Title>About Us</Title>
        <ContactContainer>
          <ContactImg src="img/topImg.png" alt="" draggable={false} />
          <ContactRight>
            Lycan Studio is a team of aspiring game-enthusiasts and developers.
            We released numerous boardgames so far; Shardhunters, Ausonia, Bone
            to Pick. We are soon about to launch Unseen Domains on Kickstarter.
            <br />
            <br />
            We are currently testing our ideas and skills in the digital realms.
            The dark, low-fantasy universe of Shardhunters is the core of our
            works and each of our games explore another segment of the
            plague-ridden post apocalyptic world. The Monastery follows the fate
            of a lonely survivor who found shelter on the top of the mountains.
          </ContactRight>
        </ContactContainer>
      </HomeTop>
    </Top>
  );
};
export default AboutPage;
