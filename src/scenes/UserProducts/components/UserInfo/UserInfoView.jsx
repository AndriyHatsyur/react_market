import React from 'react'
import s from './userInfo.module.css'

export const UserInfoView = ({ user, productsCount }) => {
  return (
    <div className={s.container}>
      <img src={user.avatar} alt={user.fullName} />
      <h1>{user.fullName}</h1>
      <span>{user.location}</span>
      <ul>
        <li>
          88% <span>Positive feedback</span>
        </li>
        <li>
          123<span>Sales</span>
        </li>
        <li>
          {productsCount}
          <span>Active listings</span>
        </li>
      </ul>
    </div>
  )
}
