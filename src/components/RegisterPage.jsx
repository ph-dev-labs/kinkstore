import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/api";
import {
  setEmailField,
  setFirstnameField,
  setLastNameField,
} from "../redux/Registration/Registration";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [register] = useRegisterMutation();
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateEmail = (email) => {
    // Basic email format validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegistration = async () => {
    const { firstname, lastname, email, password } = userData;
    if (!firstname || !lastname || !email || !password) {
      toast.error("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email format.");
      return;
    }

    try {
      const response = await register(userData).unwrap();
      if (response) {
        toast.success("Registration successful!");
        setTimeout(() => {
           navigate("/verification")

        }, 2000)
       
        // Redirect or perform actions after successful registration
      } 
    } catch (error) {
      console.error(error)
      toast.error("Registration failed.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegistration();
    dispatch(setEmailField(userData.email));
    dispatch(setFirstnameField(userData.firstname));
    dispatch(setLastNameField(userData.lastname));
  };
  return (
    <Container>
      <Header />
      <h1>Create my account</h1>
      <p>Please fill in the information below:</p>

      <Form onSubmit={handleSubmit}>
        <input
          placeholder="First name"
          onChange={handleInputChange}
          value={userData.firstname}
          name="firstname"
        />
        <input
          placeholder="Last name"
          onChange={handleInputChange}
          value={userData.lastname}
          name="lastname"
        />
        <input
          placeholder="Email"
          onChange={handleInputChange}
          value={userData.email}
          type="email"
          name="email"
        />
        <input
          placeholder="Password"
          type="password"
          onChange={handleInputChange}
          value={userData.password}
          name="password"
        />
        <LoginButton type="submit" onClick={handleSubmit}>
          Register
        </LoginButton>
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
