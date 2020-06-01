import React from 'react'
import T from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input } from './../elements/Input/Input'
import { InputPassword } from './../elements/Input/InputPasswor'
import { Submit } from './../elements/Submit/Submit'
import s from './loginForm.module.css'
import './../Form.css'
import { validators } from '../../../utils/Form/validators'

export const LoginFormComponent = ({
  isError,
  errorMessage,
  handleSubmit,
  isLoading,
}) => {
  const formikProps = {
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values)
      resetForm()
    },
    validationSchema: Yup.object({
      password: validators.maxLength(20),
      email: validators.email,
    }),
  }
  return (
    <div className="form_auth_container">
      <div className="form_header">Login</div>
      {isError && <div className="errorApi">{errorMessage}</div>}
      <Formik {...formikProps}>
        <form>
          <Input
            name="email"
            type="email"
            placeholder="Example@gmail.com"
            label="email"
          />
          <InputPassword name="password" label="password" />
          <small className={s.small}>Don’t remember password?</small>
          <Submit disabled={isLoading}>Continue</Submit>
        </form>
      </Formik>
    </div>
  )
}

LoginFormComponent.propTypes = {
  handleSubmit: T.func.isRequired,
  errorApi: T.string,
}
