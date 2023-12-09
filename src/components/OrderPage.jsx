import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useGetAllOrderQuery } from '../redux/api/api';

const OrderPage = () => {
  const { data } = useGetAllOrderQuery();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/productpage');
  };

  return (
    <Container>
      <Header />
      {data ? (
        <OrdersContainer>
          {data.map((order, index) => (
            <OrderCard key={index}>
              <h3>Order #{index + 1}</h3>
              <p>Item: {order.item}</p>
              <p>Quantity: {order.quantity}</p>
              <img src={order.picture} alt="Ordered Item" />
            </OrderCard>
          ))}
        </OrdersContainer>
      ) : (
        <NoOrdersContainer>
          <h4>No orders yet</h4>
          <PayButton onClick={handleNavigation}>Make your first Order</PayButton>
        </NoOrdersContainer>
      )}
      <Footer />
    </Container>
  );
};


export default OrderPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  justify-content: flex-start;
  align-items: center;
  max-width: 390px;
  width: 90%;
  height: auto;
  max-height: 100vh;
  overflow-y: auto;
  border-radius: 4px;
  margin: 3px 10px 0;

  h4 {
    color: #d72029;
  }
`;

const OrdersContainer = styled.div`
  /* Styles for displaying orders if data is available */
`;

const NoOrdersContainer = styled.div`
  /* Styles for displaying no orders */
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
const OrderCard = styled.div`
  /* Your styles for an individual order card */
`;