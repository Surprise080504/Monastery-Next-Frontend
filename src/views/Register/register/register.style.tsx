import styled from "styled-components";

export const LoginContent = styled.div`
  width: 500px;
  height: auto;
  position: absolute;
  font-family: Roboto;
  left: 50%;
  top: 50%;
  border-radius: 20px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  padding: 40px;
  box-sizing: border-box;
  @media screen and (max-width: 550px) {
    width: 90%;
    padding: 40px 20px;
  }
`;
export const LoginTitle = styled.div`
  text-align: center;
  font-size: 34px;
  font-weight: 600;
`;
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const LoginInputTitle = styled.span`
  font-size: 17px;
  line-height: 30px;
  text-transform: capitalize;
`;
export const Input = styled.input`
  height: 40px;
  transition: all 0.3s;
  font-size: 16px;
  border: 1px solid #e5e8ea;
  border-radius: 5px;
  outline: none;
  padding: 0 10px;
  :focus {
    box-shadow: rgba(0, 106, 255, 0.3) 0px 0px 0px 0px,
      rgba(0, 106, 255, 0.3) 0px 0px 3px 3px;
  }
`;
export const Button = styled.button`
  margin: 20px 0 10px 0;
  height: 45px;
  border-radius: 5px;
  background-color: rgb(0, 106, 255);
  color: white;
  border: none;
  margin-top: 30px;
  outline: none;
  font-size: 17px;
  cursor: pointer;
`;
export const ForgotTitle = styled.div`
  font-size: 17px;
  span {
    color: #0085fe;
    cursor: pointer;
    text-decoration: underline;
  }
`;
export const LoginPassTitle = styled.div`
  margin-top: 30px;
  font-size: 17px;
  line-height: 30px;
  text-transform: capitalize;
`;
export const LoginInputName = styled.span`
  margin-top: 30px;
  font-size: 17px;
  line-height: 30px;
  text-transform: capitalize;
`;
