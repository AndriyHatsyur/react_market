import React from 'react'
import s from './messageForm.module.css'
import { Icon } from '../../../../../components/Icons/Icon'

export const MessageFormView = ({ onChange, onSubmit, message }) => {
  return (
    <form className={s.form}>
      <textarea
        name="message"
        value={message}
        onChange={onChange}
        onKeyDown={onSubmit}
        placeholder="Type your message here.."></textarea>
      <span className={s.icon}>
        <Icon name="smile" fill="#97A3B4" />
      </span>
      <span className={s.icon}>
        <Icon name="file" fill="#97A3B4" />
      </span>
    </form>
  )
}
