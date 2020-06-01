import React from 'react'
import moment from 'moment'
import s from './chatsItem.module.css'
import { NavLink } from 'react-router-dom'
import { Icon } from '../../../../components/Icons/Icon'
import { priceFormatter } from '../../../../utils/common/priceFormatter'

export const ChatsItemtView = ({ chat }) => {
  if (!chat.message) return <div>Loadind...</div>
  return (
    <div>
      <NavLink
        className={s.chatItem}
        activeClassName={s.active}
        key={chat.id}
        to={`/chats/${chat.id}`}>
        <div className={s.chatParticipant}>
          <h4>{chat.participant.fullName}</h4>
          <Icon name="message" fill="#959595" />
          <span>{chat.message.text.substr(0, 15)}</span>
        </div>
        <div className={s.chatProduct}>
          <img
            src={chat.product.photos && chat.product.photos[0]}
            alt={chat.product.title}></img>
          <div className={s.productInfo}>
            <h4>{chat.product.title}</h4>
            <span>{priceFormatter.format(chat.product.price)}</span>
          </div>
        </div>
        <div className={s.time}>
          {moment(chat.message.createdAt).format('h:mm')}
        </div>
      </NavLink>
    </div>
  )
}
