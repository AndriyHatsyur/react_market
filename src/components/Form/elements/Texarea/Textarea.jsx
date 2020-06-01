import React from 'react'
import { useField } from 'formik'
import s from './texarea.module.css'
import T from 'prop-types'

export const Textarea = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <label className={s.label}>
      {label}
      <textarea {...field} {...props}></textarea>
      {meta.touched && meta.error && (
        <div className={s.error}>{meta.error}</div>
      )}
    </label>
  )
}

Textarea.propTypes = {
  label: T.string.isRequired,
}
