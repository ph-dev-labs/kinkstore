import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/api";

function RegisterPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();

  function handleFirstname(e) {
    setFirstname(e.target.value);
  }

  function handleLastname(e) {
    setLastname(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleRegistration = async () => {
    const userData = { firstname, lastname, email, password };
    try {
      let response = await register(userData).unwrap();
      if (response.status === "Ok") {
        toast.success("Registration successful!");
        // Handle redirection or any other action upon successful registration
      } else {
        toast.error("Registration failed.");
      }
    } catch (error) {
      toast.error("Registration failed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration();
  };

  return (
    <Container>
      <Header />
      <h1>Create my account</h1>
      <p>Please fill in the information below:</p>

      <Form onSubmit={handleSubmit}>
        <input
          placeholder="First name"
          onChange={handleFirstname}
          value={firstname}
        />
        <input
          placeholder="Last name"
          onChange={handleLastname}
          value={lastname}
        />
        <input placeholder="Email" onChange={handleEmail} value={email} type="email" />
        <input
          placeholder="Password"
          type="password"
          onChange={handlePassword}
          value={password}
        />
        <LoginButton type="submit" onClick={handleSubmit}>Register</LoginButton>
      </Form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
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

export default RegisterPage;
