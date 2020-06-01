import React from 'react'
import { LoginForm } from './../../../components/Form/LoginForm/LoginFormContainer'
import { FormFooter } from './../components/FormFooter'
import { routes } from './../../../routes/routes'

export const Login = () => {
  return (
    <>
      <LoginForm />
      <FormFooter
        text="I have no account, "
        link={routes.register.path}
        linkText="REGISTER NOW"
      />
    </>
  )
}
