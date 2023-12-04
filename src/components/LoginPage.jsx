import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Header />
      <h1>Login to my account</h1>
      <p>Enter your e-mail and password</p>

      <Form action="" method="POST" onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={handleEmail} value={email} />
        <input
          placeholder="Password"
          onChange={handlePassword}
          value={password}
        />
        <LoginButton>Login</LoginButton>
      </Form>
      <p>
        New Customer? <Link to="/register">Create your account</Link>
      </p>
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
