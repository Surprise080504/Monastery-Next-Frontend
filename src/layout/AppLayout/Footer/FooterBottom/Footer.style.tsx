import styled from "styled-components";

export const FooterOut = styled.div`
  width: calc(100% - 130px);
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 65px;
  height: 90px;
  @media screen and (max-width: 1400px) {
    padding: 0 30px;
    width: calc(100% - 60px);
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    padding: 50px 0;
  }
`;
export const FooterLogoImg = styled.img``;
export const MiddleText = styled.div`
  font-family: "Balthazar";
  font-style: normal;
  position: absolute;
  left: calc(50% - 130px);
  white-space: nowrap;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    position: relative;
    left: 0;
  }
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  column-gap: 35px;
  @media screen and (max-width: 1200px) {
    margin: 25px 0 30px;
  }
  @media screen and (max-width: 420px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;
export const Terms = styled.div`
  font-family: "Balthazar";
  font-style: normal;
  cursor: pointer;
  font-weight: 400;
  white-space: nowrap;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  /* font */
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
