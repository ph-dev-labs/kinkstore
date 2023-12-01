import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import SellingProducts from "./SellingProduct";
import { useGetProductBestSellingQuery } from "../redux/api/api";

function SellingProductsContainer() {
  const { data, isLoading, isError } = useGetProductBestSellingQuery();
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  

  return (
    <Container breakPoint={breakPoint}>
      {data?.map((item) => {
        const { id, picture, description, title, price } = item;
        return (
          <SellingProducts src={picture} title={title} price={price} key={id} id={id}/>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
`;

export default SellingProductsContainer;
