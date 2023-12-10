import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useGetAllOrderQuery } from "../redux/api/api";

const OrderPage = () => {
  const { data } = useGetAllOrderQuery();
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/productpage");
  };

  return (
    <Container>
      <Header />
      {data ? (
        <OrdersContainer>
          {data.map((order, index) => (
            <OrderCard key={index}>
              <h3>Order #{index + 1}</h3>
              <p>Full Name: {order.full_name}</p>
              <p>Phone: {order.phone}</p>
              <p>Ordered Date: {order.ordered_date}</p>
              <ItemsList>
                {order.cart.map((item, itemIndex) => (
                  <ItemCard key={itemIndex}>
                    <p>Item: {item.item}</p>
                    <p>Quantity: {item.quantity}</p>
                    <img src={item.picture} alt={`Item ${itemIndex + 1}`} />
                    {/* Add more item details here if needed */}
                  </ItemCard>
                ))}
              </ItemsList>
            </OrderCard>
          ))}
        </OrdersContainer>
      ) : (
        <NoOrdersContainer>
          <h4>No orders yet</h4>
          <PayButton onClick={handleNavigation}>
            Make your first Order
          </PayButton>
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
  min-height: 100vh;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: auto;
  overflow-y: auto;
  border-radius: 4px;

  h4 {
    color: #d72029;
  }
`;

const OrdersContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 align-self: center;
//  transform: translateX(3rem)
 width: 70%;
 margin: 0 auto;
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
  margin-bottom: 1.5rem;
`;
const OrderCard = styled.div`
  /* Your styles for an individual order card */
`;

const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  /* Add any other styles for the list */
`;

const ItemCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  width: 200px;
  /* Add styles for individual item cards */
  p {
    margin: 5px 0;
    color: #d72029
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;