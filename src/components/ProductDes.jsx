import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import { useGetProductDescQuery } from '../redux/api/api'
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ProductDes = () => {
    const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });
    const productId = useParams()
    console.log(productId.productId)
    const {data, isLoading, isError, refetch} = useGetProductDescQuery(productId.productId)

    if(data) {
        console.log(data)
    }


  return (
    <Container>
        <Header />
        <Container>
          <ImgContainer>
             <img src={data?.picture} alt='product_picture' /> 
          </ImgContainer>
        </Container>
        <Footer />
    </Container>
  )
}

export default ProductDes


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex-grow: 1; /* Add this line */
  height: 100px;
  max-height: 100px;
  max-width: 150px;
  width: 100px;
  padding: 0.5rem;
  position: absolute;
`;

const Details = styled.div`
  flex-grow: 1; /* Add this line */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between !important;
  align-self: flex-start;
  margin: 0.8rem;
`;