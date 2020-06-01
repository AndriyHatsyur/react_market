import React, { useState } from 'react'
import s from './userInfo.module.css'
import { routes } from './../../../routes/routes'
import { Link, generatePath } from 'react-router-dom'
import { userNameFormat } from '../../../utils/common/userNameFormat'

export const UserInfo = ({ viewer, logout }) => {
  const initialName = userNameFormat(viewer.fullName)
  const [isDetail, setDetail] = useState(false)
  return (
    <>
      <div className={s.circle} onClick={() => setDetail(!isDetail)}>
        {initialName}
      </div>
      {isDetail && (
        <div className={s.detailInfo}>
          <div>
            <div className={s.blockInfo}>
              <div className={s.circle + ' ' + s.infoCircle}>
                {initialName}
              </div>
              <div className={s.userInfo}>
                <p className={s.fullName}>{viewer.fullName}</p>
                <p className={s.email}>{viewer.email}</p>
                <Link
                  to={generatePath(routes.userProducts.path, {
                    id: viewer.id,
                  })}>
                  <p className={s.profile}>Profile</p>
                </Link>
              </div>
            </div>
            <Link
              to={routes.viewer.editProfile.path}
              className={s.link}>
              {routes.viewer.editProfile.name}
            </Link>

            <button className={s.link} onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  )
}

UserInfo.defaultProps = {
  user: {
    email: '',
    fullName: '',
  },
}
