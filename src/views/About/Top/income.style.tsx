import styled from "styled-components";

export const Top = styled.div`
  overflow: hidden;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HomeTop = styled.div`
  max-width: 1440px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1500px) {
    width: 95%;
    max-width: 100%;
  }
`;

export const RedGradient = styled.div`
  background: linear-gradient(180deg, #5e1116 0%, rgba(120, 21, 27, 0) 100%);
  height: 700px;
  position: absolute;
  width: 100%;
`;

export const Title = styled.div`
  position: relative;
  width: 300px;
  justify-content: center;
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  margin-top: 100px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: calc(200%);
    height: 1px;
    background-color: #ffffff;
  }
  ::before {
    left: 100%;
  }
  ::after {
    right: 100%;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
    width: 150px;
    margin-top: 50px;
  }
`;
export const SubTitle = styled.div`
  font-family: "Balthazar";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  margin-top: 25px;
  color: #ffffff;
  margin-bottom: 80px;
  @media screen and (max-width: 600px) {
    width: 90%;
    font-size: 15px;
    margin: 20px 0;
  }
`;
export const Galleries = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 77px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const GalleryPhotoImg = styled.img`
  width: 100%;
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  width: 100%;
  @media screen and (max-width: 750px) {
    width: 90%;
    max-width: 100%;
  }
`;
export const ContactImg = styled.img`
  width: 700px;
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
export const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 60px;
  /* font */
  font-family: "Balthazar";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  color: #ffffff;
`;
export const DoTitle = styled.div`
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;
export const CustomInput = styled.input`
  width: 390px;
  height: 40px;
  outline: none;
  border: 1px solid #fffdd1;
  padding: 0 10px;
  background-color: #000;
  color: #fff;
  /* ---font--- */
  font-family: "Balthazar";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  @media screen and (max-width: 460px) {
    width: calc(100% - 20px);
  }
`;
export const ContactBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  @media screen and (max-width: 460px) {
    width: 100%;
  }
`;
export const CustomTextarea = styled.textarea`
  width: 390px;
  height: 140px;
  outline: none;
  border: 1px solid #fffdd1;
  padding: 10px;
  background-color: #000;
  color: #fff;
  /* ---font--- */
  font-family: "Balthazar";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  @media screen and (max-width: 460px) {
    width: calc(100% - 20px);
  }
`;

export const CheckPart = styled.div`
  display: flex;
  margin: 21px 0;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  span {
    font-family: "Balthazar";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #ffffff;
    display: flex;
    span {
      text-decoration: underline;
      margin-left: 2px;
      cursor: pointer;
    }
  }
`;
