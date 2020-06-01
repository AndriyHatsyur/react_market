import React from 'react'
import s from './messageForm.module.css'
import { Formik } from 'formik'
import { Textarea } from './../../../../../components/Form/elements/Texarea/Textarea'
import { Submit } from './../../../../../components/Form/elements/Submit/Submit'

export const MessageFormView = ({ formikProps }) => {
  return (
    <>
      <Formik {...formikProps}>
        <form className={s.form}>
          <Textarea
            label="message"
            name="message"
            className={s.texarea}
            placeholder="For example: Iron man suit"
          />
          <Submit>SUBMIT</Submit>
        </form>
      </Formik>
    </>
  )
}
