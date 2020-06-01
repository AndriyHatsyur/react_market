import React from 'react'
import s from './sellerInfo.module.css'

export const SellerInfoView = ({ product, owner }) => {
  return (
    <div className={s.container}>
      <h2>Subject: {product.title}</h2>
      <div className={s.owner}>
        <img src={owner.avatar} alt={owner.fullName} />
        <div>
          <h3>{owner.fullName}</h3>
          <span>{owner.location}</span>
        </div>
      </div>
    </div>
  )
}
