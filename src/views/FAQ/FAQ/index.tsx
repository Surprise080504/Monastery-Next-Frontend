import React from "react";
import {
    MainOut, Top, Toptitle, Toplines, AnswerLeft, AnswerRight, TopBody, TextGrp, TextTitle, TextContent, TextOne, Main, Answer, AnswerOut, AnswerText, AnswerTitle, AnswerImg
} from "./faq.style";
const FAQContainer = () => {
    return (
        <MainOut>
            <Top>
                <TopBody>
                    <Toptitle>
                        Frequently Asked <span>Questions</span>
                    </Toptitle>
                </TopBody>
                <Toplines src="img/lines.png" alt='' />
            </Top>
            <Main>
                <TextGrp>
                    {[...new Array(6)].map((e, v) =>
                        <TextOne key={v}>
                            <TextTitle>Why should I use Underwriting services?  </TextTitle>
                            <TextContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing élit. Scelerisque amet, facilisi in habitasse bibendum odio vestibulum. Ullamcorper rutrum aliquam quam tortor. Senectus nisl sapien, euismod eu in eleifend pulvinar aliquet scelerisque. Dignissim pharetra viverra vitae risus. Areu sapien, pellentesque tristique cras ultrices cras. Aliquet vulputate scelerisque nulla diam congue tellus mattis diam. Euismod eget faucibus mattis fermentum eu est nulla. Tristique tincidunt nulla vel augue ut quam.
                                Pharetra vitae molestie orci commodo. Sagittis, pellentesque nisl, vulputate sapien. Amet cum sed semper donec mi. Bibendum porta ullamcorper sed suspendisse consequat felis, ut. Felis non aliquet id diam. Sit accumsan volutpat pellentesque donec dis. Dolor accumsan integer congue.
                            </TextContent>
                        </TextOne>
                    )}
                </TextGrp>
            </Main>
            <AnswerOut>
                <Answer>
                    <AnswerLeft>
                        <AnswerTitle>
                            Didn't find your answer?
                        </AnswerTitle>
                        <AnswerText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing élit, sed do eiusmod tempor incididunt.
                        </AnswerText>
                    </AnswerLeft>
                    <AnswerRight>Contact Experts</AnswerRight>
                </Answer>
                <AnswerImg src='img/moon.png' alt='' />
            </AnswerOut>
        </MainOut>
    );
};
export default FAQContainer;
