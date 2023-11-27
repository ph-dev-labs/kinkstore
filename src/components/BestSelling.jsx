import React from "react";
import FlexBetween from "./FlexBetween";
import styled from "styled-components";

function BestSelling() {
  return (
    <Container>
      <FlexBetween>
        <p>Best Sellling Products</p>
        <ViewAll >View all</ViewAll>
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
