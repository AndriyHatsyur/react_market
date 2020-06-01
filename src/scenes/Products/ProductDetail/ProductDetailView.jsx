import React from 'react'
import s from './productDetail.module.css'
import { Spinner } from './../../../components/Spinner/Spinner'
import { ProductView } from './components/ProductView/ProductView'
import { OwnerView } from './components/OwnerView/OwnerView'
import { ChatSellerModal } from '../ChatSeller/ChatSellerModal'

export const ProductDetailView = ({
  product,
  owner,
  isModal,
  openModal,
  closeModal,
  saveUnsave,
}) => {
  if (!product) return <Spinner />
  return (
    <>
      <div className={s.container}>
        <ProductView product={product} />
        {owner ? (
          <OwnerView
            {...{
              owner,
              openModal,
              saveUnsave,
              isSaved: product.saved,
            }}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <ChatSellerModal
        {...{ isModal, openModal, closeModal, product, owner }}
      />
    </>
  )
}
