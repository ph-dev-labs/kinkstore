import React from "react";
import styled from "styled-components";
import FlexBetween from "./FlexBetween";
import Product from "./CollectionProducts";
import { useMediaQuery } from "react-responsive";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useGetCategoryQuery } from "../redux/api/api";

function Collection() {
  const items = [
    <Product src="/images/K-3.png" title="Anal" />,
    <Product src="/images/K-3.png" title="Leather" />,
    <Product src="/images/K-3.png" title="Machine sex" />,
    <Product src="/images/K-3.png" title="Anal hook" />,
    <Product src="/images/K-3.png" title="Anal hook" />,
    <Product src="/images/K-3.png" title="Anal hook" />,
  ];

  //configuation options for slider.
  const products = useGetCategoryQuery();
  console.log(products);
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

  console.log(`breakPoint: ${breakPoint}`);

  return (
    <Container>
      <FlexBetween>
        <p>Our collections</p>
        <ViewAll>View all</ViewAll>
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
