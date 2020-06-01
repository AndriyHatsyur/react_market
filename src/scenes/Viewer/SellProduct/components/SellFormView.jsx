import React from 'react'
import s from './sellForm.module.css'
import { Formik } from 'formik'
import { Input } from './../../../../components/Form/elements/Input/Input'
import { Textarea } from './../../../../components/Form/elements/Texarea/Textarea'
import { Submit } from './../../../../components/Form/elements/Submit/Submit'
import { InputFoto } from './InputFoto'

export const SellFormView = ({
  formikProps,
  uploadPhotos,
  isError,
  errorApi,
}) => {
  return (
    <>
      {isError && <div className={s.error}>{errorApi}</div>}
      <Formik {...formikProps}>
        <form className={s.form}>
          <Input
            name="title"
            label="title"
            placeholder="For example: Iron man suit"
          />
          <Input
            name="location"
            label="location"
            placeholder="For example: Los Angeles, CA"
          />
          <Textarea
            name="description"
            label="Description"
            placeholder="For example: Iron man suit"
          />
          <Input
            name="price"
            label="price"
            placeholder="For example: 200.00"
          />
          <InputFoto handleChange={uploadPhotos} name="photos" />
          <Submit>SUBMIT</Submit>
        </form>
      </Formik>
    </>
  )
}
