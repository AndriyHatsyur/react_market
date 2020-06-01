import React from 'react'
import s from './spinner.module.css'

export const Spinner = () => {
  return (
    <div className={s.container}>
      <div className={s.loadinSpinner}>
        <div className={s.spinner}>
          <div></div>
        </div>
      </div>
    </div>
  )
}
