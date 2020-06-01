import React from 'react'
import { useFormikContext } from 'formik'
import T from 'prop-types'
import s from './submit.module.css'

export const Submit = ({ children, ...props }) => {
  const form = useFormikContext(props)

  return (
    <button
      type="submit"
      className={s.submit}
      onClick={form.handleSubmit}
      {...props}>
      {children}
    </button>
  )
}

Submit.propTypes = {
  children: T.string,
}
