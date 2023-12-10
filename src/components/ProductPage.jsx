import React from 'react'
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ProductPageItem from './ProductPageItem.jsx';
import { useMediaQuery } from "react-responsive";

const ProductPage = () => {
  const breakPoint = useMediaQuery({ query: "(max-width: 769px)" });
  return (
    <div>
        <Header />
        <ProductPageItem />
        <Footer/>
    </div>
  )
}

export default ProductPage
