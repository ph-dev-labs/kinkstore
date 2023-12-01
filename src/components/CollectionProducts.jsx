import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Product({id, src, title }) {
  const navigate = useNavigate()

  const handleCategories = (id) => {
    navigate(`/category/${id}`)
  }
  return (
    <Container>
      <ImgContainer>
        <ProductImage src={src} />
      </ImgContainer>
      <span >{title}</span>
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

  span {
    font-size: 0.8rem;
    font-weight: 600;
    transition: color, transform 0.2s ease-in-out;
  }

  span:hover:after {
    content: " -> ";
    color: red;
    transform: scale(1.3);
    cursor: pointer;
  }

  span:hover {
    color: red;
    transform: scale(1.3);
    cursor: pointer;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 141.79px;
  height: 141.79px;
  object-fit: cover;
  object-position: center;
  padding: 0.5rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export default Product;
