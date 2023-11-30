import React, {useEffect} from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import SellingProducts from "./SellingProduct";
import { useGetCategoriesProductQuery } from "../redux/api/api";
import { useParams } from "react-router-dom";

function CategoriesProductItem() {
  const { categoryId } = useParams();
  const normalizedCategoryId = categoryId.replace(':', '')
  
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useGetCategoriesProductQuery(normalizedCategoryId);

  if(data) {
    console.log(data)
  }
  
  
  useEffect(() => {
    // Refetch products whenever categoryId changes
    refetch();
  }, [categoryId, refetch]);

  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  return (
    <Container breakPoint={breakPoint}>
      {data?.results?.map((item) => {
        const { id, picture, description, title, price } = item;
        return (
          <SellingProducts src={picture} title={title} price={price} key={id} />
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

export default CategoriesProductItem;
