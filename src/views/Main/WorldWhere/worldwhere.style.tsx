import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  position: relative;
  padding-top: 103px;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 1500px) {
    width: 95%;
  }
`;
export const KeyTitle = styled.div`
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
  margin: 150px 0 140px;
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
  @media screen and (max-width: 800px) {
    font-size: 30px;
    width: 230px;
  }
`;
export const Title = styled.div`
  position: relative;
  width: 598px;
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
  margin-bottom: 140px;
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
  @media screen and (max-width: 850px) {
    font-size: 30px;
    line-height: 40px;
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    width: 290px;
  }
`;
export const WorldWhere = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const RedGradient = styled.div`
  background: linear-gradient(180deg, #5e1116 0%, rgba(120, 21, 27, 0) 100%);
  height: 727px;
  position: absolute;
  width: 100%;
`;
export const DarknessRow = styled.div`
  display: flex;
  align-items: center;
  column-gap: 60px;
  @media screen and (max-width: 1170px) {
    flex-direction: column;
    row-gap: 50px;
  }
`;
export const HeroImg = styled.img`
  @media screen and (max-width: 1170px) {
    order: 1;
  }
  @media screen and (max-width: 580px) {
    width: 300px;
  }
`;
export const DarkTextContainer = styled.div<{ ml?: string }>`
  padding: 40px 35.69px;
  background: url("img/worldborder.png") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: 430.93px;
  height: fit-content;
  margin-left: ${(props) => props.ml};
  margin-right: 40px;
  @media screen and (max-width: 1170px) {
    margin-left: 0;
    margin-right: 0;
    order: 2;
  }
  @media screen and (max-width: 580px) {
    width: calc(90% - 71.38px);
  }
`;
export const DarkTitle = styled.div`
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;

  color: #ffffff;
  @media screen and (max-width: 580px) {
    font-size: 24px;
  }
`;
export const DarkText = styled.div`
  margin: 25px 0;
  font-family: "Balthazar";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;

  color: #ffffff;
  @media screen and (max-width: 580px) {
    font-size: 15px;
  }
`;
export const DarkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 70px;
  @media screen and (max-width: 1170px) {
    row-gap: 50px;
  }
`;
export const KeyrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
`;
export const DarkTextImg = styled.img``;
export const KeyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;
export const KeyTextRow = styled.div`
  width: 470px;
  display: flex;
  align-items: center;
  span {
    font-family: "Balthazar";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #ffffff;
  }
  @media screen and (max-width: 550px) {
    width: 95%;
    span {
      font-size: 15px;
    }
  }
`;
