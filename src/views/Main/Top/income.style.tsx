import styled from "styled-components";

export const Top = styled.div`
  overflow: hidden;
  width: 100vw;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HomeTop = styled.div`
  max-width: 1440px;
  width: 100%;
  height: calc(100% - 50px);
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const HomeTopLeft = styled.div`
  width: 518px;
  margin-top: 25vh;
  margin-left: 65px;
  position: relative;
  @media screen and (max-width: 1200px) {
    margin-top: -50px;
    margin-left: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    margin-top: -30px;
  }
`;
export const LeftTitle = styled.div`
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 70px;
  line-height: 81px;
  margin-bottom: 40px;
  color: #ffffff;
  @media screen and (max-width: 720px) {
    font-size: 40px;
    line-height: 50px;
  }
  @media screen and (max-width: 420px) {
    font-size: 35px;
    line-height: 40px;
  }
`;
export const HomeTopRightImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  @media screen and (max-width: 1200px) {
    position: relative;
    right: unset;
    bottom: unset;
    width: 70vh;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 50px;
  }
`;
export const CircleImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
