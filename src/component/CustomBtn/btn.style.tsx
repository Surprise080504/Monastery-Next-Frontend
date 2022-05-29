import styled from "styled-components";

interface CustomBtnInterface {
  width?: string;
  height?: string;
}

export const CustomContainer = styled.div<CustomBtnInterface>`
  background: url("img/buttonback.png") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font */
  font-family: "Germania One";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 6px 24px;
  :hover {
    transform: scale(1.1, 1.1);
  }
`;
