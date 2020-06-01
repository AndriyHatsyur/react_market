import React from 'react'
import s from './sellProduct.module.css'
import { SellForm } from './components/SellForm'

export const SellProduct = () => {
  return (
    <div className={s.container}>
      <h1>Add product</h1>
      <SellForm />
    </div>
  )
}
