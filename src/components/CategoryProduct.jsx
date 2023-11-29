import React from 'react'
import Aside from './Aside'
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import CategoriesProductItem from './CategoriesProductItem.jsx';

const CategoryProduct = () => {
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