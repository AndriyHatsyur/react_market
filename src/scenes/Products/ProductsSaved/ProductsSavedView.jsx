import React from 'react'
import s from './productsSaved.module.css'
import { ProductCard } from '../../../components/Product/Card/ProductCard'

export const ProductsSavedView = ({
  products,
  savedUnsavedProduct,
}) => {
  return (
    <div className={s.container}>
      <h1>
        SAVED ITEMS <span>({products.length})</span>
      </h1>
      <div className={s.productContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} {...{ product }} />
        ))}
      </div>
    </div>
  )
}
