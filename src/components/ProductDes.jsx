import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useGetProductDescQuery } from "../redux/api/api";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ProductDes = () => {
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });
  const { productId } = useParams();

  const { data, isError, isLoading, isSuccess } =
    useGetProductDescQuery(productId);

  

  if (isLoading) {
    return <h2>FETCHING DATA...</h2>;
  }

  const { picture, id, description, discount_price, price, title } = data;


  if (isError) {
    return <h2>Error Loading product details...</h2>;
  }

  return (
    <Container key={id}>
      <Header/>
      <ImageContainer>
        <ProductImg src="https://kinkstore.com/cdn/shop/products/deep-by-kink-estim-comfortable-tieable-plug-533199.jpg?v=1692909977&width=1200" />
      </ImageContainer>
      <h4>{title}</h4>
      <Divider />
      <BuySection>
          <h4>Price: <span>${price}</span> </h4>
        <Section>
          <h4>Quantity:</h4>
          <QuantityContainer>
            <div> - </div>
            <div> 12 </div>
            <div> + </div>
          </QuantityContainer>
        </Section>
        <Button>Add to cart</Button>
        <Description>
          <h4>Description</h4>
          <p>{description}</p>
        </Description>
      </BuySection>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    text-align: start;
    margin-left: 2rem;
  }

  div ~  h4{
   align-self: flex-start;
  }
`;

const ImageContainer = styled.div`
  max-width: 350px;
  height: 350px;
  align-self: flex-start;
  margin-left: 2rem;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Divider = styled.div`
  height: 1px;
  background: grey;
  width: 100%;
`;

const BuySection = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-left: 2.5rem;
    color: #d72029;
  }


  h4 {
    text-align: start;
    font-weight: bold;
  }
`;
const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityContainer = styled.div`
  display: flex;
  gap: 0;
  margin-left: 1rem;

  

  div {
    border: 1px solid grey;
    cursor: pointer;
  }

  div: nth-child(odd) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 42px;
    height: 42px;
    color: #677279;
  }

  div: nth-child(even) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 64px;
    height: 42px;
    font-weight: bold;
  }
`;

const Button = styled.div`
  background: #d72029;
  padding: 15px 30px;
  color: white;
  text-align: center;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 5px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  p {
    text-align: start;
    margin-left: 2rem;
  }
`;
export default ProductDes;
