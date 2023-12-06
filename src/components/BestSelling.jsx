import React from "react";
import FlexBetween from "./FlexBetween";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function BestSelling() {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("/productpage")
  }

  return (
    <Container>
      <FlexBetween>
        <p>Best Sellling Products</p>
        <ViewAll onClick={handleNavigation}>View all</ViewAll>
      </FlexBetween>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1rem;
  div > p {
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

const ViewAll = styled.button`
  border: none;
  background: transparent;
  color: rgba(255, 0, 0, 0.8);
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;
`;

export default BestSelling;
