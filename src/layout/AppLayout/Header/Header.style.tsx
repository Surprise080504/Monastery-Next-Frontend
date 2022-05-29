import styled from "styled-components";

export const HeaderMain = styled.div`
  margin-top: 21.63px;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: space-between;
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
  margin-left: 65px;
  @media screen and (max-width: 1100px) {
    margin-left: 30px;
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
  margin-right: 65px;
  .resbarIcon {
    display: none;
    color: #c4c4c4;
    font-size: 24px;
    @media screen and (max-width: 950px) {
      display: flex;
    }
  }
  @media screen and (max-width: 1100px) {
    margin-right: 30px;
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
  column-gap: 30px;
  @media screen and (max-width: 950px) {
    display: none;
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

  @media screen and (max-width: 950px) {
    display: none;
  }
`;
