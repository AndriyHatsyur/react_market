import React from 'react'
import { RegisterForm } from './../../../components/Form/RegisterForm/RegisterFormContainer'
import { FormFooter } from './../components/FormFooter'
import { routes } from './../../../routes/routes'

export const Register = () => {
  return (
    <>
      <RegisterForm />
      <FormFooter
        text="I already have an account, "
        link={routes.login.path}
        linkText="LOG IN"
      />
    </>
  )
}
