import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useUserLoginMutation } from "../redux/api/api";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../redux/login/login";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginApi] = useUserLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleEmail(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleLogin = async () => {
    try {
      const response = await loginApi({ username, password }).unwrap();
      if (response) {
        toast.success("Login successful!");
        dispatch(loginSuccess(response));
        setTimeout(() => {
          navigate("/orderpage");
        }, 2000);
      } else {
        toast.error("Login failed. Please check your credentials.");
        dispatch(loginFailure());
      }
    } catch (error) {
      toast.error("Login failed. Please try again later.");
      dispatch(loginFailure(error));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Container>
      <Header />
      <h1>Login to my account</h1>
      <p>Enter your e-mail and password</p>

      <Form onSubmit={handleSubmit}>
        <input placeholder="username" onChange={handleEmail} value={username} />
        <input
          placeholder="Password"
          type="password"
          onChange={handlePassword}
          value={password}
        />
        <LoginButton onClick={handleSubmit} type="submit">
          Login
        </LoginButton>
      </Form>
      <p>
        New Customer? <Link to="/register">Create your account</Link>
      </p>
      <p>
        loss password? <Link to="/recoverpassword">recover password</Link>
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

export default LoginPage;
