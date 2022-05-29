import { useRouter } from "next/router";
import React, { useState } from "react";
import { notify } from "component/Notify";
import { loginUser } from "actions/authActions";
import {
  LoginContent,
  LoginTitle,
  LoginForm,
  LoginInputTitle,
  Input,
  Button,
  LoginPassTitle,
  ForgotTitle,
} from "./login.style";
const LoginContainer = () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const Submit = () => {
    if (email === "") notify("warn", "Email is required");
    else if (pass === "") notify("warn", "Password is required");
    else {
      const userData = { email, pass };
      loginUser(userData, router);
    }
  };

  return (
    <>
      <LoginContent>
        <LoginTitle>Sign in</LoginTitle>
        <LoginForm>
          <LoginInputTitle>Email address</LoginInputTitle>
          <Input
            type="text"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter email"
          />
          <LoginPassTitle>password</LoginPassTitle>
          <Input
            type="password"
            onChange={(e) => setpass(e.target.value)}
            placeholder="Enter password"
          />
          <Button onClick={() => Submit()}>Log in</Button>
          <ForgotTitle>
            Do you have account?{" "}
            <span onClick={() => router.push("/register")}>Sign up</span>
          </ForgotTitle>
        </LoginForm>
      </LoginContent>
    </>
  );
};
export default LoginContainer;
