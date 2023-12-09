import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {

const navigate = useNavigate;
const handleNavigation = () => {
    navigate("/productpage")
}


  return (
    
    <Container>
        <Header/>
        <h4>No orders yet</h4>
        <PayButton onClick={handleNavigation}>Make your first Order</PayButton>
        <Footer/>
    </Container>
  )
}

export default OrderPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  justify-content: flex-start;
  align-items: center;
  max-width: 390px;
  width: 90%;
  height: auto;
  max-height: 100vh; /* Set a maximum height */
  overflow-y: auto; /* Enable vertical scrolling */
  border-radius: 4px;
  margin: 3px 10px 0;

  h4 {
    color: #d72029;
  }
`;

const PayButton = styled.button`
  width: 100%;
  height: 48px;
  background: #d72029;
  color: white;
  border: none;
  outline: none;
  border-radius: 4px;
  font-weight: bold;
`;
