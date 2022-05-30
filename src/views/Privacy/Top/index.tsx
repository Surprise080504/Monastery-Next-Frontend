import React from "react";
import Header from "layout/AppLayout/Header";
import Footer from "layout/AppLayout/Footer/FooterBottom";

import {
  Top,
  HomeTop,
  Title,
  ContactContainer,
  ContactRight,
} from "./income.style";
const PrivacyPage = () => {
  return (
    <Top>
      <Header />
      <HomeTop>
        <Title>Privacy Policy</Title>
        <ContactContainer>
          <ContactRight>
            1. Lycan Studio takes the security of personal data seriously. The
            Customer's documents, information, materials will not be used or
            shared with unauthorized third parties without the Customer's
            consent. Consent may be given in writing, by e-mail, or by other
            electronic means.
            <br />
            <br />
            2. The Customer consents to the processing of his or her data by
            Lycan Studio. The scope of controlled data are (1) email address,
            (2) name (3) shipping address. The purpose of data control is to
            provide and ship the product that was purchased by the Customer from
            our webstore. As a data controller, we respect the Customer's
            personal rights.
            <br />
            <br />
            3. Lycan Studio is entitled to get acquainted with the processed
            personal data. We will take all necessary steps in order to ensure
            the security of the personal data provided to us by the Customer
            during the storage and preservation of the data.
            <br />
            <br />
            4. The Customer has access to his or her personal data, can correct
            or delete them and she or he has the right to restrict the data
            processing.
            <br />
            <br />
            5. In the event of a breach of the Customer's personal data, he or
            she may apply to the data controller, or to the competent data
            protection authority, or enforce his or her rights in court, in
            accordance with GDPR, Act No. 112 of 2011 on the Right of
            Informational Self-Determination and Freedom of Information and Act
            No. 5 of 2013 on the Civil Code. If the Customer requests additional
            information regarding data management, he or she may contact the
            following person: Zsófia Diósi, + 36 30 849 6101,
            unseendomains.en@gmail.com.
          </ContactRight>
        </ContactContainer>
      </HomeTop>
      <Footer />
    </Top>
  );
};
export default PrivacyPage;
