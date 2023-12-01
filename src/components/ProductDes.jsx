import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import { useGetProductDescQuery } from '../redux/api/api'

const ProductDes = () => {
    const productId = useParams()
    console.log(productId.productId)
    const {data, isLoading, isError, refetch} = useGetProductDescQuery(productId.productId)

    if(data) {
        console.log(data)
    }


  return (
    <div>
        <Header />
        <Footer />
    </div>
  )
}

export default ProductDes