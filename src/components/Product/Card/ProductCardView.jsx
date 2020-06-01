import React from 'react'
import { Link } from 'react-router-dom'
import s from './productCard.module.css'
import { priceFormatter } from '../../../utils/common/priceFormatter'
import { Icon } from '../../Icons/Icon'
import { generatePath } from 'react-router-dom'
import { routes } from './../../../routes/routes'

export const ProductCardView = ({ product, savedUnsavedProduct }) => {
  return (
    <div className={s.container}>
      <Link
        to={generatePath(routes.products.detail.path, {
          id: product.id,
        })}>
        <img
          src={product.photos && product.photos[0]}
          alt={product.title}
        />
      </Link>
      <i onClick={() => savedUnsavedProduct(product)}>
        {product.saved ? (
          <Icon name="heartLike" fill="#349A89" />
        ) : (
          <Icon name="heart" fill="#B7B7B7" />
        )}
      </i>

      <Link
        to={generatePath(routes.products.detail.path, {
          id: product.id,
        })}>
        <p>{product.title}</p>
      </Link>
      <span>{priceFormatter.format(product.price)}</span>
    </div>
  )
}
