import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import SellingProducts from "./SellingProduct";
import { useGetProductQuery } from "../redux/api/api";

function ProductPageItem() {
  const { data, isLoading, isError, refetch } = useGetProductQuery();
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  // Logic to calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.results?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil((data?.results?.length || 0) / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container breakPoint={breakPoint}>
      {currentItems?.map((item) => {
        const { id, picture, description, title, price } = item;
        return (
          <SellingProducts
            src={picture}
            title={title}
            price={price}
            key={id}
            id={id}
          />
        );
      })}

      {/* Pagination */}
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#333" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

export default ProductPageItem;
