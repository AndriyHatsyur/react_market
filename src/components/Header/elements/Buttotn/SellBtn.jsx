import React from 'react'
import s from './sellBtn.module.css'
import { useHistory } from 'react-router-dom'
import { routes } from '../../../../routes/routes'

export const SellBtn = () => {
  const history = useHistory()

  const onClick = () => history.push(routes.viewer.sell.path)

  return (
    <div>
      <button onClick={onClick} className={s.headerBtn}>
        {routes.viewer.sell.name}
      </button>
    </div>
  )
}
