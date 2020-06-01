import React from 'react'
import { Formik } from 'formik'
import { Input } from '../elements/Input/Input'
import { Submit } from '../elements/Submit/Submit'
import s from './searchForm.module.css'

export const SearchFormView = ({ formikProps }) => {
  return (
    <Formik {...formikProps}>
      <form className={s.form}>
        <Input
          type="text"
          name="keywords"
          label=""
          className={s.search}
          placeholder="Search products by name"
        />
        <Input
          type="text"
          name="location"
          label=""
          className={s.location}
          placeholder="Location"
        />
        <Submit>Searh</Submit>
      </form>
    </Formik>
  )
}
