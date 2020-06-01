import React from 'react'
import s from './productView.module.css'
import { priceFormatter } from '../../../../../utils/common/priceFormatter'
import { Icon } from '../../../../../components/Icons/Icon'
import moment from 'moment'

export const ProductView = ({ product }) => {
  return (
    <div className={s.container}>
      <img src={product.photos[0]} alt={product.title} />
      <span className={s.price}>
        {priceFormatter.format(product.price)}
      </span>
      <div className={s.productInfo}>
        <div>
          <h1>{product.title}</h1>
          <span className={s.time}>
            {moment(product.createdAt).format('MMMM DD h:mm')}
          </span>
        </div>
        <div>
          <Icon name="location" fill="#5C5C5C" />
          <span className={s.location}>{product.location}</span>
        </div>
        <hr />
        <p>{product.description}</p>
      </div>
    </div>
  )
}
