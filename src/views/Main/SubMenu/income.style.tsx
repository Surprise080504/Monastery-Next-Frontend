import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 90px;
  width: calc(100% - 60px);
  padding: 0 30px;
  height: 60px;
  background: #6b0309;
  @media screen and (max-width: 1130px) {
    column-gap: 50px;
    flex-wrap: wrap;
    row-gap: 30px;
    height: auto;
    padding: 35px 30px;
  }
`;
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuImg = styled.img``;
export const Text = styled.div`
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-left: 8px;
  color: #ffffff;
`;
