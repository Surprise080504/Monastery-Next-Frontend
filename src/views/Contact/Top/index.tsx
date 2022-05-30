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
const ContactPage = () => {
  return (
    <Top>
      <Header />
      <HomeTop>
        <Title>Contact Us</Title>
        <ContactContainer>
          <ContactImg src="img/contactwolf.png" alt="" draggable={false} />
          <ContactRight>
            <DoTitle>Do not hesitate to reach out!</DoTitle>
            <ContactBody>
              <CustomInput type="text" placeholder="Name" />
              <CustomInput type="email" placeholder="Email" />
              <CustomTextarea placeholder="Message" />
            </ContactBody>
            <CheckPart>
              <Checkbox />
              <span>
                I accept the <span>Terms & Conditions</span>
              </span>
            </CheckPart>
            <CustomButton text="Send" />
          </ContactRight>
        </ContactContainer>
      </HomeTop>
    </Top>
  );
};
export default ContactPage;
