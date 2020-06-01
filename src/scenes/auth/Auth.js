import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './../../components/Header/Header'
import { Footer } from './../../components/Footer/Footer'
import { Login } from './Login/Login'
import { Register } from './Register/Register'
import { routes } from './../../routes/routes'
import s from './auth.module.css'

export const Auth = () => {
  return (
    <div className={s.container}>
      <Header />
      <main className={s.main}>
        <Switch>
          <Route path={routes.login.path} component={Login} />
          <Route path={routes.register.path} component={Register} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}
