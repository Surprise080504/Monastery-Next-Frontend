import styled from "styled-components";

export const FooterOut = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  padding-top: 170px;
  padding-bottom: 45px;
  position: relative;
`;

export const Title = styled.div`
  position: relative;
  width: 500px;
  justify-content: center;
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ffffff;
  }
  ::before {
    left: -100%;
  }
  ::after {
    right: -100%;
  }
  @media screen and (max-width: 600px) {
    width: 220px;
    font-size: 30px;
  }
`;
export const FooterBody = styled.div`
  max-width: 1440px;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1480px) {
    width: 95%;
    max-width: 100%;
  }
`;
export const Left = styled.div`
  max-width: 350px;
  width: 100%;
  @media screen and (max-width: 1130px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const MiddleImg = styled.img`
  @media screen and (max-width: 1130px) {
    margin: 50px 0;
  }
  @media screen and (max-width: 600px) {
    width: 230px;
  }
`;
export const Right = styled.div`
  max-width: 400px;
  width: 100%;
`;
export const LeftTitle = styled.div`
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;
`;
export const LeftText = styled.div`
  font-family: "Balthazar";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  margin: 28px 0;
`;
export const LeftSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .socials {
    transition: all 0.3s ease-in-out;
    color: #fff;
    cursor: pointer;
    font-size: 25px;
    :hover {
      color: #c25200;
    }
  }
`;
export const Footery = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 1130px) {
    flex-direction: column;
  }
`;
export const RightTitle = styled.div`
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #ffffff;
  @media screen and (max-width: 1130px) {
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;
export const RightText = styled.div`
  font-family: "Balthazar";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  margin: 28px 0;
  color: #ffffff;
  @media screen and (max-width: 1130px) {
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
export const SubscribePart = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 15px;
`;
export const CheckPart = styled.div`
  display: flex;
  margin-top: 21px;
  max-width: 370px;
  justify-content: flex-start;
  span {
    font-family: "Balthazar";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #ffffff;
  }
`;
export const RedGradient = styled.div`
  height: 100%;
  bottom: 0;
  left: 0;
  width: 100%;
  position: absolute;
  background: linear-gradient(180deg, #5e1116 0%, rgba(120, 21, 27, 0) 100%);
  transform: rotate(-180deg);
`;
export const ScribeInputContainer = styled.div`
  background: url("img/scribeInput.png") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  padding: 0 20px;
  height: 40px;
  width: 100%;
`;
export const ScribeInput = styled.input`
  font-family: "Balthazar";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  border-style: none;
  outline: none;
  height: 38px;
  width: 100%;
`;
