import React from "react";
import {
    MainOut, Top, Toptitle, Toplines, CardWrapper, TopBody, Card, Cards, CardTitle, CardSub, Cardmoney, CardMleft, CardMRight, CardItem, CRTop, CRbottom, CardBtn
} from "./pricing.style";
const PricingContainer = () => {
    return (
        <MainOut>
            <Top>
                <TopBody>
                    <Toptitle>
                        Our Pricing Plans
                    </Toptitle>
                </TopBody>
                <Cards>
                    <Card>
                        <CardWrapper>
                            <CardTitle>Free</CardTitle>
                            <CardSub>Brief price Description</CardSub>
                            <Cardmoney>
                                <CardMleft>0</CardMleft>
                                <CardMRight>
                                    <CRTop>$</CRTop>
                                    <CRbottom>Per/ month</CRbottom>
                                </CardMRight>
                            </Cardmoney>
                            <CardItem>Price Item One</CardItem>
                            <CardItem>Price Item Two</CardItem>
                            <CardItem>Price Item Three</CardItem>
                            <CardBtn>Choose Plan</CardBtn>
                        </CardWrapper>
                    </Card>
                    <Card>
                        <CardWrapper>
                            <CardTitle>Standard</CardTitle>
                            <CardSub>Brief price Description</CardSub>
                            <Cardmoney>
                                <CardMleft>40</CardMleft>
                                <CardMRight>
                                    <CRTop>$</CRTop>
                                    <CRbottom>Per/ month</CRbottom>
                                </CardMRight>
                            </Cardmoney>
                            <CardItem>Price Item One</CardItem>
                            <CardItem>Price Item Two</CardItem>
                            <CardItem>Price Item Three</CardItem>
                            <CardBtn>Choose Plan</CardBtn>
                        </CardWrapper>
                    </Card>
                    <Card>
                        <CardWrapper>
                            <CardTitle>Premium</CardTitle>
                            <CardSub>Brief price Description</CardSub>
                            <Cardmoney>
                                <CardMleft>80</CardMleft>
                                <CardMRight>
                                    <CRTop>$</CRTop>
                                    <CRbottom>Per/ month</CRbottom>
                                </CardMRight>
                            </Cardmoney>
                            <CardItem>Price Item One</CardItem>
                            <CardItem>Price Item Two</CardItem>
                            <CardItem>Price Item Three</CardItem>
                            <CardBtn>Choose Plan</CardBtn>
                        </CardWrapper>
                    </Card>
                </Cards>
                <Toplines src="img/lineslong.png" alt='' draggable={false} />
            </Top>

        </MainOut>
    );
};
export default PricingContainer;
