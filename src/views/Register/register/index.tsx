import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useRouter } from "next/router";
import { notify } from "component/Notify";
import { registerUser } from "actions/authActions";
import {
  LoginContent,
  LoginTitle,
  LoginForm,
  LoginInputTitle,
  Input,
  Button,
  LoginPassTitle,
  ForgotTitle,
  LoginInputName,
} from "./register.style";
const RegisterContainer = () => {
  const router = useRouter();
  // const history = useHistory();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [name, setname] = useState("");
  const Submit = () => {
    if (email === "") notify("warn", "Email is required");
    else if (name === "") notify("warn", "Name is required");
    else if (pass === "") notify("warn", "Password is required");
    else {
      const userData = { email, pass, name };
      registerUser(userData, router);
    }
  };
  return (
    <>
      <LoginContent>
        <LoginTitle>Sign up</LoginTitle>
        <LoginForm>
          <LoginInputTitle>Email address</LoginInputTitle>
          <Input
            type="text"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter email"
          />
          <LoginInputName>Name</LoginInputName>
          <Input
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter name"
          />
          <LoginPassTitle>password</LoginPassTitle>
          <Input
            type="password"
            onChange={(e) => setpass(e.target.value)}
            placeholder="Enter password"
          />
          <Button onClick={() => Submit()}>Register</Button>
          <ForgotTitle>
            Already have account?{" "}
            <span onClick={() => router.push("/login")}>Sign in</span>
          </ForgotTitle>
        </LoginForm>
      </LoginContent>
    </>
  );
};
export default RegisterContainer;
