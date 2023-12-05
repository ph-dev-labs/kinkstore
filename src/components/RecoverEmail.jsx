import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import { useResetPasswordEmailMutation } from "../redux/api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmailField } from "../redux/resetPassword";

function RecoveryPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [recoverEmailApi] = useResetPasswordEmailMutation();
  const validateEmail = (email) => {
    // Basic email format validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validateEmail(email)) {
      return toast.error("Enter a valid email")
    }

    dispatch(setEmailField(email))
    try {
      const response = await recoverEmailApi({email}).unwrap()
      if(response){
        toast.success("Otp successfully sent")
        setTimeout(() => {
          navigate("/resetpassword")
        },2000)
      } 
    } catch (error) {
      toast.error("something went wrong", error)
    }


  };

  return (
    <Container>
      <Header />
      <h1>Recover Password</h1>
      <p>Enter your e-mail</p>

      <Form onSubmit={handleSubmit}>
        <input placeholder="email" onChange={handleEmail} value={email} />
        <LoginButton type="submit" onClick={handleSubmit}>Recover</LoginButton>
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
