import React from "react";
import styled from "styled-components";
import FlexBetween from "./FlexBetween";
import Product from "./Product";
import { useMediaQuery } from "react-responsive";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: {
    items: 1,
    // itemsFit: "contain",
  },
  568: {
    items: 3,
  },
  1024: {
    items: 4,
    itemsFit: "contain",
  },
};

const options = {
  disableButtonsControls: true,
  disableDotsControls: true,
  disableSlideInfo: true,
  responsive: {
    items: 2,
  }
};

const items = [
  <Product src="" title="Anal" />,
  <Product src="" title="Leather" />,
  <Product src="" title="Machine sex" />,
  <Product src="" title="Anal hook" />,
];

function Collection() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  console.log(isBigScreen);

  return (
    <Container>
      <FlexBetween>
        <p>Our collections</p>
        <ViewAll>View all</ViewAll>
      </FlexBetween>
      {/* <ProductGallery> */}
        <AliceCarousel items={items} responsive={responsive} {...options} />
      {/* </ProductGallery> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // background: black;
  p {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
const ViewAll = styled.button`
  border: none;
  background: transparent;
  color: rgba(255, 0, 0, 0.8);
  font-weight: bold;
  font-size: 1rem;
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
