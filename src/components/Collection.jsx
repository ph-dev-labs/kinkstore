import React from "react";
import styled from "styled-components";
import FlexBetween from "./FlexBetween";
import Product from "./CollectionProducts";
import { useMediaQuery } from "react-responsive";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useGetProductByCollectionQuery } from "../redux/api/api";
import { useNavigate } from "react-router-dom";

function Collection() {

  const {data, isLoading, isError} = useGetProductByCollectionQuery()
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("/productpage")
  }

  const items = data?.map((product) => {
    const {id, category, picture} = product
    return (
      <Product key={id} src={picture} title={category} id={id} />
    )
  })

  //configuation options for slider.
;
  const options = {
    disableButtonsControls: true,
    disableDotsControls: true,
    disableSlideInfo: true,
    mouseTracking: true,
    responsive: {
      0: {
        items: 2,
      },
      1024: {
        items: 6,
      },
    },
  };

  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  // console.log(`breakPoint: ${breakPoint}`);

  return (
    <Container>
      <FlexBetween>
        <p>Our collections</p>
        <ViewAll onClick={handleNavigation}>View all</ViewAll>
      </FlexBetween>
      <ProductGallery>
        <AliceCarousel items={items} {...options} />
      </ProductGallery>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

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

const ProductGallery = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

export default Collection;
