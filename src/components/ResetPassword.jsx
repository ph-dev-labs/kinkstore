import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useResetPasswordOtpMutation } from "../redux/api/api";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [new_password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [changePasswordApi] = useResetPasswordOtpMutation();
  const email = useSelector((state) => state.resetpassword.email);
  const navigate = useNavigate()

  function handlePassword(e) {
    setNewPassword(e.target.value);
  }

  function handleOtp(e) {
    setOtp(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.length !== 4) {
      toast.error("Enter a valid OTP");
      return;
    }

    if (!new_password || !confirmPassword) {
      toast.error("Please fill in both password fields");
      return;
    }

    if (new_password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await changePasswordApi({ email, otp, new_password: new_password }).unwrap();
      if (response.status == "success") {
        toast.success("Password successfully changed");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Something went wrong", error);
    }
  };

  return (
    <Container>
      <Header />
      <h1>Reset Password</h1>
      <p>Enter your new password</p>

      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Enter otp"
          type="text"
          onChange={handleOtp}
          value={otp}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={handlePassword}
          value={new_password}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          onChange={handleConfirmPassword}
          value={confirmPassword}
        />
        <LoginButton onClick={handleSubmit} type="submit">
          Reset password
        </LoginButton>
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
    margin: 0.6rem;
  }
`;
