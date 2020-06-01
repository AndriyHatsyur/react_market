import React from 'react'
import s from './sellForm.module.css'
import { useField } from 'formik'

export const InputFoto = ({ handleChange, ...props }) => {
  const [, meta, helpers] = useField(props)

  return (
    <label>
      Photos
      <div className={s.photos}>
        <i className={s.fileBtn}>+</i>
        <input
          className={s.inputFile}
          type="file"
          onChange={handleChange({ meta, helpers })}
          {...props}
        />
        {meta.value.map((photo) => (
          <img key={photo} src={photo} alt={photo} />
        ))}
      </div>
      {meta.touched && meta.error && (
        <div className={s.error}>{meta.error}</div>
      )}
    </label>
  )
}
