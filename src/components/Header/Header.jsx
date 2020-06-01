import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './../Icons/Icon'
import s from './header.module.css'
import { routes } from './../../routes/routes'
import { SellBtn } from './elements/Buttotn/SellBtn'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link to={routes.home.path}>
          <Icon name="logo" fill="#262525" />
        </Link>
      </div>
      <SellBtn />
      <div>
        <Link to={routes.login.path} className={s.link}>
          {routes.login.name}
        </Link>
      </div>
      <div>
        <Link to={routes.products.saved.path}>
          <Icon name="heart" fill="#2E2E2E" />
        </Link>
      </div>
    </header>
  )
}
