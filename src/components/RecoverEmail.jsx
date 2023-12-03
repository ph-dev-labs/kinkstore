import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useUserLoginMutation } from "../redux/api/api";
import { useDispatch } from "react-redux";
import { moveToShopPage } from "../redux/login/login";
import { loginSuccess, loginFailure } from "../redux/login/login";

function RecoveryPage() {
  const [email, setEmail] = useState("");
  
  const [loginApi] = useUserLoginMutation();
  const dispatch = useDispatch();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  

  const handleLogin = async () => {
    try {
      const response = await loginApi({ email }).unwrap();
      if (response.status === "success") {
        toast.success("Login successful!");
        dispatch(loginSuccess(response))
      } else {
        toast.error("Login failed. Please check your credentials.");
        dispatch(loginFailure())
      }
    } catch (error) {
      toast.error("Login failed. Please try again later.");
      dispatch(loginFailure(error))
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Container>
      <Header />
      <h1>Recover Password</h1>
      <p>Enter your e-mail and password</p>

      <Form onSubmit={handleSubmit}>
        <input placeholder="email" onChange={handleEmail} value={email} />
        <LoginButton onClick={handleSubmit} type="submit">Recover</LoginButton>
      </Form>
      <p>
        Remember password? <Link to="/login">back to login</Link>
      </p>

      <ToastContainer />
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: borde-box;
  min-height: 100vh;

  a{
     color: #d72029;
     text-decoration: none;
     text-transform: capitalize;
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

export default RecoveryPage;
