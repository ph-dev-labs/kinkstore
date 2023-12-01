import React from 'react'
import Aside from './Aside'
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import CategoriesProductItem from './CategoriesProductItem.jsx';
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const CategoryProduct = () => {
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });
  return (
    <div>
        <Aside />
        <Header />
        <CategoriesProductItem/>
        <Footer/>
    </div>
  )
}

export default CategoryProduct