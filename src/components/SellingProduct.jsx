import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


function SellingProducts({id, src, title, price }) {
  const breakPoint = useMediaQuery({ query: "(max-width: 769px)" });
  
  const navigate = useNavigate()

  const handleNavigation = (id) => {
    navigate(`/product/${id}`) 
  }

 
  return (
    <Container breakPoint={breakPoint}>
      <ImgContainer>
        <ProductImage src={src} />
      </ImgContainer>
      <p>{title}</p>
      <span>${price}</span>
      <Button onClick={(() => handleNavigation(id))}>View details</Button>
    </Container>
  );
}

const Container = styled.div`
  max-width: ${(props) => (props.breakPoint ? "49%" : "24%")};
  height: 574.95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 0.2px solid rgba(0, 0, 0, 0.2);

  p,
  span {
    text-align: start;
    padding: 0.3rem 1rem;
    align-self: flex-start;
  }

  span {
    color: red;
    font-size: 1.2rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 344.25px;
  object-fit: cover;
  object-position: center;
  padding: 0.5rem;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

`;

const Button = styled.button`
  background: red;
  color: white;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 1.1rem;
  padding: .6rem .6rem;
  cursor: pointer;
  margin: 1rem 0rem;
  width: 90%;
  border-radius: 0.2rem;
  cursor: pointer;
`;

export default SellingProducts;
