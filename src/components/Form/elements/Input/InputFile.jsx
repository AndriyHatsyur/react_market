import React from 'react'
import { useField } from 'formik'
import s from './input.module.css'

export const InputFile = ({ label, labelStyle, ...props }) => {
  const [field] = useField(props)
  return (
    <label className={labelStyle}>
      {label}
      <input
        type="file"
        className={s.inputFile}
        {...field}
        {...props}
      />
    </label>
  )
}
