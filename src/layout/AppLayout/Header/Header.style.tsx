import styled from "styled-components";

export const HeaderMain = styled.div`
  width: calc(100% - 130px);
  z-index: 100;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 21.63px 65px 0;
  @media screen and (max-width: 1100px) {
    width: calc(100% - 60px);
    padding: 21.63px 30px 0;
    /* background-color: #000; */
  }
`;
export const HeaderLeft = styled.div`
  font-family: "Sans";
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  line-height: 29px;
  color: #000000;
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  @media screen and (max-width: 950px) {
    display: none;
  }
`;
export const HeaderLogo = styled.img``;
export const HeaderItemText = styled.div`
  font-family: "Balthazar";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
  line-height: 20px;
  white-space: nowrap;
  color: #bababa;
  transition: all 0.3s ease-in-out;
  /* -------------------------- */
  text-decoration: none;
  z-index: 1;
  position: relative;
  cursor: pointer;
  ::after {
    transition: all 0.3s ease-in-out;
    position: absolute;
    content: "";
    height: 2px;
    background-color: #c25200;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
  :hover {
    ::after {
      transform: scaleX(1);
    }
  }
`;
export const HeaderTextItemGrp = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 950px) {
    flex-direction: column;
    margin-bottom: 50px;
    padding-top: 52.5px;
  }
`;
export const SocialGrp = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  .socialIcon {
    color: #bababa;
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    :hover {
      color: #c25200;
    }
  }
`;
export const ResMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  z-index: 101;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: none;
  @media screen and (max-width: 950px) {
    display: flex;
  }
`;
export const ResIcons = styled.div`
  .resbarIcon {
    display: none;
    color: #c4c4c4;
    font-size: 24px;
    cursor: pointer;
    @media screen and (max-width: 950px) {
      display: flex;
    }
  }
`;
export const ResTop = styled.div`
  display: flex;
  width: calc(100% - 60px);
  padding: 21.63px 30px 0;
  align-items: center;
  justify-content: space-between;
`;
