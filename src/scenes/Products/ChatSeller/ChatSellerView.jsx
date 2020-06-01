import React from 'react'
import s from './chatSeller.module.css'
import { SellerInfoView } from './components/SellerInfo/SellerInfoView'
import { MessageForm } from './components/MessageForm/MessageForm'

export const ChatSellerView = ({ product, owner, closeModal }) => {
  if (!product && !owner) return <div>Loading...</div>
  return (
    <div className={s.container}>
      <h2>Contact seller</h2>
      <i className={s.close} onClick={closeModal}></i>
      <SellerInfoView {...{ product, owner }} />
      <MessageForm product={product} />
    </div>
  )
}
