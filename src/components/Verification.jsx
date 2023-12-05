import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useConfirmOtpMutation } from "../redux/api/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Verification() {
  const [otp, setOtp] = useState("");
  const selectedRegistration = useSelector((state) => state.registration)
  const email = selectedRegistration.email
  const navigate = useNavigate()

  const [otpApi] = useConfirmOtpMutation();
  

  function handleOtp(e) {
    setOtp(e.target.value);
  }

  

  const handleVerification = async () => {
    if(otp.length < 4) {
        return toast.error("enter valid otp")
    }
    try {
        let response = await otpApi({email, otp}).unwrap()
        if(response) {
            toast.success("Email successfully verified")
            setTimeout(() => {
              navigate("/login")
   
           }, 2000)
        } else {
            toast.error("something went wrong")
        }
    } catch (error) {
        toast.error("Enter correct otp")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleVerification();
  };

  return (
    <Container>
      <Header />
      <h1>Verify account</h1>
      <p>Enter your otp</p>

      <Form onSubmit={handleSubmit}>
        <input placeholder="otp" onChange={handleOtp} value={otp} />
       
        <LoginButton onClick={handleSubmit} type="submit">Verify</LoginButton>
      </Form>
      <ToastContainer />
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: borde-box;
  min-height: 100vh;]

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
  }
`;

export default Verification;
