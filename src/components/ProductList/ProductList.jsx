import React from 'react'
import "./ProductList.css"
import Product from '../Product/Product'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
        <h1 className="pl-title">Certifications</h1>
        <p className="pl-desc">
          I have attained certificates from NPTEL and also from CourseEra platform.
        </p>
    </div>
    <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
       
    </div>
 </div>
  )
}

export default ProductList