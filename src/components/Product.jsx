import React from "react";
import styled from "styled-components";

function Product({ src, title }) {
  return (
    <Container>
      <ImgContainer>
        {/* <ProductImage src={src} /> */}
      </ImgContainer>
      <p>{title}</p>
    </Container>
  );
}

const Container = styled.div`
  max-width: 150px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: transparent;

  p {
    text-align: start;
  }
`;

const ImgContainer = styled.div`
  width: inherit;
  height: inherit;
  object-fit: cover;
  object-position: center;
  padding: 0.5rem;
  border: 1px solid red;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

export default Product;
