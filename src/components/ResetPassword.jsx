import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../redux/login/login";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      toast.error("Please fill in both password fields");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      // Passwords are valid, proceed with your login logic here
      // For example, dispatch an action to handle successful login
      dispatch(loginSuccess());
      // Or perform the API call for login
    }
  };

  return (
    <Container>
      <Header />
      <h1>Reset Password</h1>
      <p>Enter your new password</p>

      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Password"
          type="password"
          onChange={handlePassword}
          value={password}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          onChange={handleConfirmPassword}
          value={confirmPassword}
        />
        <LoginButton onClick={handleSubmit} type="submit">Reset password</LoginButton>
      </Form>
      <ToastContainer />
    </Container>
  );
}

// Styled components...

export default ResetPassword;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: borde-box;
  min-height: 100vh;

  a{
     color: #d72029;
     text-decoration: none;
  }
    
  }
`;

const LoginButton = styled.div`
  background: #d72029;
  color: white;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 5px 10px;
  text-transform: uppercase;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 375px;
  width: 80%;

  input {
    width: 100%;
    height: 48px;
    padding: 5px 10px;
    outline: none;
    margin: .6rem;
  }
`;


