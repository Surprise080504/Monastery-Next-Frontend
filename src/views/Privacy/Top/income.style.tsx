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
  min-height: calc(100vh - 71.63px - 90px);
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
  @media screen and (max-width: 600px) {
    padding-bottom: 50px;
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
  width: 500px;
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
  margin-bottom: 80px;
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
    width: 230px;
    margin: 30px 0;
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
  max-width: 870px;
  width: 100%;
  @media screen and (max-width: 950px) {
    width: 90%;
    max-width: 100%;
  }
`;
export const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* font */
  font-family: "Balthazar";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  color: #ffffff;
`;
