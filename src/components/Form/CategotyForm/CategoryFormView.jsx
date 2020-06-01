import React from 'react'

import s from './categoryForm.module.css'

export const CategoryFormView = ({ price, onChange }) => {
  return (
    <form className={s.form}>
      <select
        name="categoty"
        tupe="select"
        placeholder="Choose Category"
        className={s.select}>
        <option value=""></option>
      </select>
      <input
        type="text"
        name="priceFrom"
        className={s.price}
        placeholder="Price from (USD)"
        value={price.priceFrom}
        onChange={onChange}
      />
      <span></span>
      <input
        type="text"
        name="priceTo"
        className={s.price}
        placeholder="Price to (USD)"
        value={price.priceTo}
        onChange={onChange}
      />
    </form>
  )
}
