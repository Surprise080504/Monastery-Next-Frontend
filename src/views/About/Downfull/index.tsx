import React from "react";
import {
    AboutPart, AboutPartOut, ALRight, ALLeft, AImg, ARSubTitle, ARTitle, ARText, ARRRight, ARRLeft, AboutImg, AboutOut
} from "./down.style";
const AboutUsContainer = () => {
    return (
        <>
            <AboutPartOut>
                <AboutPart>
                    <ARRRight>
                        <ARTitle>ABOUT US</ARTitle>
                        <ARSubTitle>The Full <span>Financial</span> Picture</ARSubTitle>
                        <ARText>
                            Credit checks miss 85% of data that property owners need to make informed decisions about prospective residents. Rentify links with bank data to create instant insight into the full picture of an applicant's financial health to reduce the risk of non-payments and evictions. Rentify breaks down their bank verified information into an easy to read report.
                        </ARText>
                    </ARRRight>
                    <ARRLeft>
                        <ALLeft>
                            <AImg src="img/r1.png" alt='' />
                            <AImg src="img/r3.png" alt='' />
                        </ALLeft>
                        <ALRight>
                            <AImg src="img/r2.png" alt='' />
                        </ALRight>
                    </ARRLeft>
                </AboutPart>
            </AboutPartOut>
            <AboutOut>
                <AboutImg src="img/aboutmoney.png" alt='' />
            </AboutOut>
        </>
    );
};
export default AboutUsContainer;
