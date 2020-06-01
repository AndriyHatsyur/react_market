import React from 'react'
import T from 'prop-types'
import { Formik } from 'formik'
import { Input } from './../elements/Input/Input'
import { InputPassword } from './../elements/Input/InputPasswor'
import { Submit } from './../elements/Submit/Submit'
import * as Yup from 'yup'
import s from './registerForm.module.css'
import './../Form.css'
import { validators } from '../../../utils/Form/validators'

export const RegisterFormComponent = ({
  isError,
  errorMessage,
  handleSubmit,
  isLoading,
}) => {
  const formikProps = {
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      passwordAgain: '',
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values)
      resetForm()
    },
    validationSchema: Yup.object({
      email: validators.email,
      fullName: validators.maxLength(30),
      password: validators.maxLength(15),
      passwordAgain: validators.passwordAgain,
    }),
  }
  return (
    <div className="form_auth_container">
      <div className="form_header">Register</div>
      {isError && <div className="errorApi">{errorMessage}</div>}
      <Formik {...formikProps}>
        <form>
          <Input
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            label="email"
          />
          <Input
            type="text"
            name="fullName"
            placeholder="Tony Stark"
            label="Full name"
          />
          <InputPassword name="password" label="password" />
          <InputPassword
            name="passwordAgain"
            label="password again"
          />
          <div className={s.submitContainer}>
            <Submit disabled={isLoading}>Register</Submit>
          </div>
        </form>
      </Formik>
    </div>
  )
}

RegisterFormComponent.propTypes = {
  handleSubmit: T.func.isRequired,
  errorMessage: T.string,
  isError: T.bool,
  isLoading: T.bool,
}
