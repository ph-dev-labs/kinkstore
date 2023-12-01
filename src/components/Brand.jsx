import React from "react";
import styled from "styled-components";

function Brand() {
  return (
    <Container >
      <div>
        <p>&copy; 2023 Kink Store</p>
        <p>Powered by Shopify</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0.5rem;
  p {
    line-height: 0.5;
  }
`;
export default Brand;
