import React from "react";
import {
    Top, TopBody, Toptitle, TopText, Toplines
} from "./title.style";
const AboutUsContainer = () => {
    return (
        <Top>
            <TopBody>
                <Toptitle>
                    About us
                </Toptitle>
                <TopText>
                    The Rentify bank check can reduce your risk and Instantly verify renter's income, payroll, past rent payments, NSF & overdraft in one report to avoid non-payments and evictions. Only $9.99 per report.
                </TopText>
            </TopBody>
            <Toplines src="img/lines.png" alt='' />
        </Top>
    );
};
export default AboutUsContainer;
