import React from 'react'
import { useField } from 'formik'
import s from './input.module.css'
import T from 'prop-types'

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <label className={s.label}>
      {label}
      <input className={s.input} {...field} {...props} />
      {meta.touched && meta.error && <div className={s.error}>{meta.error}</div>}
    </label>
  )
}

Input.propTypes = {
  label: T.string.isRequired,
}
