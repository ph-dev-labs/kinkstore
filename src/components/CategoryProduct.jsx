import React from 'react'
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import CategoriesProductItem from './CategoriesProductItem.jsx';
import { useMediaQuery } from "react-responsive";

const CategoryProduct = () => {
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });
  return (
    <div>
        <Header />
        <CategoriesProductItem/>
        <Footer/>
    </div>
  )
}

export default CategoryProduct