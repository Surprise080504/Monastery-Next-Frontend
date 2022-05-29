import React, { useState } from "react";
import SideBar from "layout/AppLayout/Sidebar";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import {
    MainOut, MainRightOut, MainRight, TitlePart, Btns, Title, TiitleRight, ResBack, NewAppBtn, ContentPart, CtitleLeft, Ctitle, Csub, CtitleRight, CEmail, CMobile, TopPart, BorderLine, InputPart, InputLabel, SelectItem, InputItem, InputOne, ApplicantPart, ContactPart, LongText, IncomePart, CheckPart, CheckItem, CusCheckbox, ConsentPart, ContinumBtn, IComePart
} from "./applicant.style";
const DashboardContainer = () => {
    const router = useRouter();
    const [sidebarshow, setsidebarshow] = useState(false);
    const [selectflag, setSelctflag] = useState(2);
    return (
        <MainOut>
            <SideBar selected={1} show={sidebarshow} />

            {sidebarshow && <ResBack onClick={() => setsidebarshow(false)} opa={sidebarshow} />}
            <MainRightOut>
                <MainRight>
                    <TitlePart>
                        <Title>
                            <RiBarChartHorizontalFill className="dashresIcon" onClick={() => setsidebarshow(!sidebarshow)} />
                            Dashboard
                        </Title>
                        <TiitleRight>
                            <NewAppBtn>
                                Save Applications
                            </NewAppBtn>
                        </TiitleRight>
                    </TitlePart>
                    <ContentPart>
                        <TopPart>
                            <CtitleLeft>
                                <Ctitle>Preferred Contact method</Ctitle>
                                <Csub>How would the applicant prefers to be contacted</Csub>
                            </CtitleLeft>
                            <CtitleRight>
                                <CEmail onClick={() => setSelctflag(1)} sel={selectflag}>Email</CEmail>
                                <CMobile onClick={() => setSelctflag(2)} sel={selectflag}>Mobile</CMobile>
                            </CtitleRight>
                        </TopPart>
                        <BorderLine />
                        <Ctitle>Personal Information</Ctitle>
                        <InputPart>
                            <InputOne>
                                <InputLabel>First Name</InputLabel>
                                <InputItem type='text' placeholder='Enter your first name' />
                            </InputOne>
                            <InputOne>
                                <InputLabel>Last Name</InputLabel>
                                <InputItem type='text' placeholder='Enter your last name' />
                            </InputOne>
                            <InputOne>
                                <InputLabel>Birthdate</InputLabel>
                                <InputItem type='text' placeholder='Enter your birthdate' />
                            </InputOne>
                            <InputOne>
                                <InputLabel>Gender</InputLabel>
                                <SelectItem>
                                    <option>Male</option>
                                    <option>Female</option>
                                </SelectItem>
                            </InputOne>
                            <InputOne>
                                <InputLabel>Martial Status</InputLabel>
                                <SelectItem>
                                    <option>Single</option>
                                </SelectItem>
                            </InputOne>
                            <InputOne>
                                <InputLabel>SIN</InputLabel>
                                <InputItem type='text' placeholder='Enter your SIN' />
                            </InputOne>
                        </InputPart>
                        <ApplicantPart>
                            <InputLabel>Applicant Detail</InputLabel>
                            <SelectItem>
                                <option>Primary vihicle or trade - in unit</option>
                            </SelectItem>
                        </ApplicantPart>
                        <Ctitle>Contact Information</Ctitle>
                        <ContactPart>
                            <InputOne>
                                <InputLabel>Mobile Number</InputLabel>
                                <InputItem type='text' placeholder='Enter your mobile number' />
                            </InputOne>
                            <InputOne>
                                <InputLabel>Email Address</InputLabel>
                                <InputItem type='text' placeholder='Enter your email address' />
                            </InputOne>
                        </ContactPart>
                        <LongText>How long has the applicant lived there?</LongText>
                        <ContactPart>
                            <InputOne>
                                <InputLabel>Years</InputLabel>
                                <InputItem type='text' placeholder='Enter years lived' />
                            </InputOne>
                            <InputOne>
                                <InputLabel>Months</InputLabel>
                                <InputItem type='text' placeholder='Enter months lived' />
                            </InputOne>
                        </ContactPart>
                        <IncomePart>Select Income type</IncomePart>
                        <IComePart>
                            <InputOne>
                                <InputLabel>Income type</InputLabel>
                                <CheckPart>
                                    <CheckItem>
                                        <CusCheckbox type='checkbox' />Employed
                                    </CheckItem>
                                    <CheckItem>
                                        <CusCheckbox type='checkbox' />Self Employed
                                    </CheckItem>
                                    <CheckItem>
                                        <CusCheckbox type='checkbox' />Other
                                    </CheckItem>
                                </CheckPart>
                            </InputOne>
                            <InputOne>
                                <InputLabel>Employer Name</InputLabel>
                                <InputItem type='text' placeholder='Enter employer name' />
                            </InputOne>
                        </IComePart>
                        <ApplicantPart>
                            <InputLabel>Other income</InputLabel>
                            <SelectItem>
                                <option>Select Income Type</option>
                            </SelectItem>
                        </ApplicantPart>
                        <BorderLine />
                        <ConsentPart>
                            <CusCheckbox type='checkbox' />The applicant has consented to recieving text and email messages regarding a potential loan application with Quanfiti.
                        </ConsentPart>
                        <ContinumBtn>Save Applicant and Continue</ContinumBtn>
                    </ContentPart>
                </MainRight>
            </MainRightOut>
        </MainOut>
    );
};

export default DashboardContainer;
