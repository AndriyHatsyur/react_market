import React from 'react'
import s from './userProductList.module.css'

import { ProductCard } from '../../../../components/Product/Card/ProductCard'

export const UserProductList = ({ products }) => {
  return (
    <div className={s.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
