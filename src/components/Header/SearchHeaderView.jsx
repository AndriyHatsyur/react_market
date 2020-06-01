import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Icons/Icon'
import s from './header.module.css'
import { routes } from '../../routes/routes'
import { UserInfo } from './elements/UserInfo'
import { SearchForm } from './../Form/SearchForm/SearchForm'
import { SellBtn } from './elements/Buttotn/SellBtn'

export const SearchHeaderView = ({ isAuth, viewer, logout }) => {
  return (
    <header className={s.searchHeaderContainer}>
      <div className={s.header}>
        <div className={s.logo}>
          <Link to={routes.home.path}>
            <Icon name="logo" fill="white" />
          </Link>
        </div>
        {isAuth && (
          <div className={s.chat}>
            <Link to={routes.chats.path}>
              <Icon name="chat" fill="white" />
            </Link>
          </div>
        )}
        <SellBtn />
        <div>
          {isAuth ? (
            <UserInfo viewer={viewer} logout={logout} />
          ) : (
            <Link
              to={routes.login.path}
              className={`${s.link} ${s.searchLink}`}>
              {routes.login.name}
            </Link>
          )}
        </div>
        <div>
          <Link to={routes.products.saved.path}>
            <Icon name="heart" fill="white" />
          </Link>
        </div>
      </div>
      <SearchForm />
    </header>
  )
}
